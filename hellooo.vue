<template>
  <v-container fluid>
    <v-simple-table class="custom-table">
      <thead>
        <tr>
          <td>稼働状況</td>
          <td class="operationStatus">異常発生中</td>
        </tr>
      </thead>
    </v-simple-table>

    <div class="ma-2">
      <canvas
        ref="myCanvas"
        width="416"
        height="700"
        class="canvas"
        style="border: 1px solid #000000"
      ></canvas>
    </div>
  </v-container>
</template>

<script>
import { FetchAPI } from '@/utility/apiRequest'
export default {
  name: 'OperationStatusScreen',
  data() {
    return {
      imageUrl: null,
      rectangles: [
        { width: 70, height: 40, x: 65, y: 515, process_id: 1, operation_status: 1 },
        { width: 70, height: 40, x: 65, y: 425, process_id: 2, operation_status: 1 },
        { width: 70, height: 40, x: 65, y: 350, process_id: 3, operation_status: 2 },

        { width: 70, height: 40, x: 150, y: 265, process_id: 4, operation_status: 3 },
        { width: 70, height: 40, x: 100, y: 190, process_id: 5, operation_status: 1 },
        { width: 70, height: 40, x: 35, y: 125, process_id: 6, operation_status: 2 },
        { width: 70, height: 40, x: 35, y: 45, process_id: 7, operation_status: 1 },
        { width: 70, height: 40, x: 185, y: 45, process_id: 8, operation_status: 2 },
        { width: 70, height: 40, x: 290, y: 115, process_id: 9, operation_status: 3 },
        { width: 70, height: 40, x: 290, y: 200, process_id: 10, operation_status: 1 },
        { width: 70, height: 40, x: 290, y: 335, process_id: 11, operation_status: 1 },
        { width: 70, height: 40, x: 290, y: 400, process_id: 12, operation_status: 2 },
        { width: 70, height: 40, x: 290, y: 500, process_id: 13, operation_status: 3 },
        { width: 70, height: 40, x: 240, y: 615, process_id: 14, operation_status: 1 },
      ],
    }
  },
  mounted() {
    this.fetchImage()
  },
  methods: {
    /**
     * Function use for getting the image
     */
    async fetchImage() {
      try {
        const api = new FetchAPI()
        const response = await api.get('/assets/images/line_chart.png', {
          responseType: 'blob',
        })
        this.imageUrl = URL.createObjectURL(response)

        // Calls the createCanvas function with the imageURL as parameter
        this.createCanvas(this.imageUrl)
      } catch (err) {
        console.log(err)
      }
    },
    /**
     * Retrieves the operation process coordinates
     */
    async fetchProcessCoordinates() {
      try {
        const api = new FetchAPI()
        const response = await api.get('/api/get-coordinates')

        this.rectangles = [...response.data] // store the response data to the rectangle array
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Create boxes with number label
     * @param {string} imageURL - image URL
     */
    async createCanvas(imageURL) {
      const canvas = this.$refs.myCanvas
      const ctx = canvas.getContext('2d')

      // Create image object
      const image = new Image()
      image.src = imageURL // set the image src to the received image URL

      const drawCircleLabel = (ctx, x, y, radius, label, fillStyle, strokeStyle) => {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = fillStyle
        ctx.fill()
        ctx.strokeStyle = strokeStyle
        ctx.lineWidth = 4
        ctx.stroke()

        ctx.font = 'bold 14px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'white'
        ctx.fillText(label, x, y)
      }

      // Load image with the process boxes
      image.onload = () => {
        // Draw the image on the canvas
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

        // Loop through the data and draw each rectangle
        this.rectangles.forEach((rect) => {
          // Draw the rectangle
          ctx.fillStyle = this.determineColor(rect.operation_status)
          ctx.strokeStyle = ''
          ctx.strokeStyle = 'white'
          ctx.strokeRect(rect.x, rect.y, rect.width, rect.height)
          ctx.fillRect(rect.x, rect.y, rect.width, rect.height)

          // Draw label inside a circle
          const circleX = rect.x + rect.width / 2
          const circleY = rect.y + rect.height / 2
          drawCircleLabel(ctx, circleX, circleY, 15, rect.process_id, 'transparent', 'white')
        })
      }
    },
    /**
     * Determines the color of the operation based on the status value
     * @param {int} status - status value of the operation
     */
    determineColor(status) {
      let statusColor = ''

      switch (status) {
        case 1:
          statusColor = 'green'
          break
        case 2:
          statusColor = '#FFCA37' // change
          break
        case 3:
          statusColor = 'red'
          break
      }

      return statusColor
    },
  },
}
</script>
<style>
.custom-table th,
.custom-table td {
  border: 1px solid #ffffff;
  padding: 5px;
}

.custom-table td {
  font-weight: bold;
  width: 13.5rem;
  min-width: 60px;
  min-height: 10px;
  text-align: center;
  font-size: 20px;
}

.operationStatus {
  background-color: green;
}

.lineChartImage {
  width: 26rem;
  max-width: 30rem;
}
</style>
