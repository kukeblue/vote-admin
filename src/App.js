import React from 'react'
import './App.less'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminLayout from './layout/AdminLayout'
import UserLayout from './layout/UserLayout'
import Index from './page/index'
import './App.less';
import GobalStore from './store/gobalStore'
import Login from './page/login';
import NoMatch from './layout/404'
import Management from './page/management/index'
import VoteManageEdit from './page/voteManage/voteEdit'
import VoteManageList from './page/voteManage/voteList'



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
              </Switch>
            </UserLayout>
          </Route>
          <Route path='/admin/:path?/:path?' exact>
            <AdminLayout>
              <Switch>
                <Route path='/admin/setting' component={Index} />
                <Route path='/admin/management' component={Management} />
                <Route path='/admin/voteManage/list' component={VoteManageList} />
                <Route path='/admin/voteManage/edit' component={VoteManageEdit}/>
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

export default App;
