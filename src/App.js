import React from 'react'
import './App.less'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminLayout from './layout/AdminLayout'
import UserLayout from './layout/UserLayout'
import Index from './page/index'
import './App.less';
import GobalStore from './store/gobalStore'
import Login from './page/login';
import Register from './page/register'
import NoMatch from './layout/404'
import Management from './page/management/index'
import VoteManageEdit from './page/voteManage/voteEdit'
import VoteManageList from './page/voteManage/voteList'
import VoteResult from './page/voteManage/voteResult'
import VoteStatistics from './page/voteManage/voteStatistics'
import SeriesList from './page/series/seriesList'
import SeriesEdit from './page/series/seriesEdit'
import AccountUpgrade from './page/accountUpgrade/index'






function App() {
  return (
    <GobalStore.Provider>
    <Router>
        <Switch>
          <Route path='/' exact>
            <AdminLayout>
              <Route path='/' component={Index} />
            </AdminLayout>
          </Route>
          <Route path='/user/:path?' exact>
            <UserLayout>
              <Switch>
                <Route path='/user/login' component={Login} />
                <Route path='/user/logout' component={Login} />
                <Route path='/user/register' component={Register} />
              </Switch>
            </UserLayout>
          </Route>
          <Route path='/admin/:path?/:path?' exact>
            <AdminLayout>
              <Switch>
                <Route path='/admin/setting' component={Index} />
                <Route path='/admin/management' component={Management} />
                <Route path='/admin/voteManage/result' component={VoteResult}/>
                <Route path='/admin/voteManage/edit' component={VoteManageEdit}/>
                <Route path='/admin/voteManage/statistics' component={VoteStatistics}/>
                <Route path='/admin/voteManage' component={VoteManageList} />
                <Route path='/admin/series/seriesList' component={SeriesList}/>
                <Route path='/admin/series/seriesEdit' component={SeriesEdit}/>
                <Route path='/admin/accountUpgrade' component={AccountUpgrade}/>
              </Switch>
            </AdminLayout>
          </Route>
           {/* 404 page */}
           <Route component={NoMatch}/>
        </Switch>
    </Router>
    </GobalStore.Provider>

  );
}

export const PathMap = {
  '/management' : '管理中心',
  '/voteManage': '投票管理',
  '/voteManage/result': '投票结果',
  '/voteManage/statistics': '投票统计'
}

export default App;
