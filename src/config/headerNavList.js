const headerNav = [
  {
    title: '地图展示',
    key: '/MapDisplay'
  },
  {
    title: '实时监测',
    key: '/realTimeMonitoring',
    children: [
      {
        title: '地灾实时数据',
        key: '/realTimeMonitoring/EarthquakeRealTimeData',
        // children:[
        //   {
        //     title: '中国石油西南管道公司',
        //     key: '/ChinaPetroleum'
        //   },
        //   {
        //     title: '昆明输油气分公司',
        //     key: '/KunmingOil',
        //   },
        //   {
        //     title: '兰成渝输油分公司',
        //     key: '/LanChengyuOil',
        //     children:[
        //       {
        //         title: '中缅-K1542+400软土层',
        //         key: '/LanChengyuOil/China-Myanmar-K1542+400softsoillayer'
        //       },
        //       {
        //         title: '中缅-K0321滑坡',
        //         key: '/LanChengyuOil/China-Myanmar-K0321landslide'
        //       },
        //       {
        //         title: '中缅-K0937+050滑坡',
        //         key: '/LanChengyuOil/China-Myanmar-K0937+050landslide'
        //       }
        //     ]
        //   }
        // ]
      },
      {
        title:"应力实时数据",
        key:'/realTimeMonitoring/StressRealTimeData',
        // children:[
        //   {
        //     title: '中国石油西南管道公司1',
        //     key: '/ChinaPetroleum1'
        //   },
        //   {
        //     title: '昆明输油气分公司1',
        //     key: '/KunmingOil1',
        //   },
        //   {
        //     title: '兰成渝输油分公司1',
        //     key: '/LanChengyuOil1',
        //     children:[
        //       {
        //         title: '中缅-K1542+400软土层1',
        //         key: '/LanChengyuOil/China-Myanmar-K1542+400softsoillayer1'
        //       },
        //       {
        //         title: '中缅-K0321滑坡1',
        //         key: '/LanChengyuOil/China-Myanmar-K0321landslide1'
        //       },
        //       {
        //         title: '中缅-K0937+050滑坡1',
        //         key: '/LanChengyuOil/China-Myanmar-K0937+050landslide1'
        //       }
        //     ]
        //   }
        // ]
      },
      // {
      //   title:'情况上报列表',
      //   key:'/realTimeMonitoring/StatusReportList'
      // },
      // {
      //   title:'预警报表管理',
      //   key:"/realTimeMonitoring/EarlyWarningReportManagement"
      // }
    ]
  },
  {
    title: '历史数据',
    key: '/historicalData',
    children: [
      {
        title: '地灾历史数据',
        key: '/HistoricalDataNaturalDisasters',
      },
      {
        title:"应力历史数据",
        key:'/StressHistoryData'
      }
    ]
  },
  {
    title: '预警预报',
    key: '/EarlyWarning',
  },
  {
    title: '系统设置',
    key: '/SystemSettings',
  },
  {
    title: '帮助',
    key: '/userCenter ',
    children: [
      {
        title: '操作说明',
        key: '/OperatingInstructions',
      },
      {
        title:"意见说明",
        key:'/Advice'
      },
      {
        title:"预警信息处理",
        key:'/EarlyWarningInformationProcessing'
      }
    ]
  }
];
export default headerNav
