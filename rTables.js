const OPERATION_INFORMATION_TABLE = {
  TABLE_HEADER: [
    {
      COMPONENT_NAME: 'CommonLabel',
      display: {
        label: '稼働状況',
      },
      directives: {},
    },
    {
      COMPONENT_NAME: 'CommonLabel',
      display: {
        label: '異常発生中',
      },
      directives: {
        // class: 'operationStatus',
        style: {
          width: '15rem',
          backgroundColor: 'red',
        },
      },
    },
  ],
}

const PROUDUCT_LINE_TABLE = {
  TABLE_HEADER: [
    {
      COMPONENT_NAME: 'CommonLabel',
      display: {
        label: '計画台数(累計)',
      },
    },
    {
      COMPONENT_NAME: 'CommonLabel',
      display: {
        label: '生産台数(累計)',
      },
    },
    {
      COMPONENT_NAME: 'CommonLabel',
      display: {
        label: '稼働率',
      },
    },
  ],
  TH_DIRECTIVES: {
    class: 'custom-table',
  },
  TABLE_ROW: [
    {
      COMPONENT_NAME: 'CommonLabel',
      display: {
        label: '57台',
      },
    },
    {
      COMPONENT_NAME: 'CommonLabel',
      display: {
        label: '28台',
      },
    },
    {
      COMPONENT_NAME: 'CommonLabel',
      display: {
        label: '-%',
      },
    },
  ],
  TR_DIRECTIVES: {
    class: 'custom-table',
  },
}

export { OPERATION_INFORMATION_TABLE, PROUDUCT_LINE_TABLE }
