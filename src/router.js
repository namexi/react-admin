import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from  './App'
import Login from './pages/login'
import Admin from './admin'
import MapDisplay from './pages/MapDisplay'
import Home from './pages/Home'
import EarlyWarning from './pages/EarlyWarning'
import SystemSettings from './pages/SystemSettings'
import RealTimeMonitoring from './pages/RealTimeMonitoring'
import ChinaPetroleum from './pages/RealTimeMonitoring/EarthquakeRealTimeData/ChinaPetroleum'
import KunmingOil from './pages/RealTimeMonitoring/EarthquakeRealTimeData/KunmingOil'
import ChinaMyanmarK1542Softsoillayer from './pages/RealTimeMonitoring/EarthquakeRealTimeData/ChinaMyanmarK1542softsoillayer'
import HistoricalData from './pages//HistoricalData'
import userCenter from './pages/user'

export default class AppRouter extends Component {
  render() {
    return(
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/" render={()=>
              <Admin>
                <Switch>
                  <Route path="/MapDisplay" component={MapDisplay} />
                  <Route path="/EarlyWarning" component={EarlyWarning} />
                  <Route path="/SystemSettings" component={SystemSettings} />
                  <Route path="/realTimeMonitoring" render={()=>
                    <RealTimeMonitoring>
                      <Switch>
                        {/*<Route path="/realTimeMonitoring/EarthquakeRealTimeData" component={ChinaPetroleum} />*/}
                        <Route path="/realTimeMonitoring/EarthquakeRealTimeData/ChinaPetroleum" component={ChinaPetroleum} />
                        <Route path="/realTimeMonitoring/EarthquakeRealTimeData/KunmingOil" component={KunmingOil} />
                        <Route path="/realTimeMonitoring/EarthquakeRealTimeData/LanChengyuOil/China-Myanmar-K1542+400softsoillayer" component={ChinaMyanmarK1542Softsoillayer} />
                        <Redirect to="/realTimeMonitoring/EarthquakeRealTimeData/ChinaPetroleum" />
                      </Switch>
                    </RealTimeMonitoring>
                  } />
                  <Route path="/HistoricalData" component={HistoricalData} />
                  <Route path="/userCenter" component={userCenter} />
                  <Redirect to="/MapDisplay" />
                </Switch>
              </Admin>
            } />
          </Switch>
        </App>
      </Router>)
  }
}
