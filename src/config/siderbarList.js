const list = [
  {
    title: '中国石油西南管道公司',
    key: '/realTimeMonitoring/EarthquakeRealTimeData/ChinaPetroleum'
  },
  {
    title: '昆明输油气分公司',
    key: '/realTimeMonitoring/EarthquakeRealTimeData/KunmingOil',
  },
  {
    title: '兰成渝输油分公司',
    key: '/realTimeMonitoring/EarthquakeRealTimeData/LanChengyuOil',
    children:[
      {
        title: '中缅-K1542+400软土层',
        key: '/realTimeMonitoring/EarthquakeRealTimeData/LanChengyuOil/China-Myanmar-K1542+400softsoillayer'
      },
      {
        title: '中缅-K0321滑坡',
        key: '/realTimeMonitoring/EarthquakeRealTimeData/LanChengyuOil/China-Myanmar-K0321landslide'
      },
      {
        title: '中缅-K0937+050滑坡',
        key: '/realTimeMonitoring/EarthquakeRealTimeData/LanChengyuOil/China-Myanmar-K0937+050landslide'
      }
    ]
  }
];
export default list
