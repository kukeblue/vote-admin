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

function App() {
  return (
    <GobalStore.Provider>
    <Router>
        <Switch>
          <Route path='/' exact>
          <UserLayout>
            <Route path='/' exact component={Login} />
          </UserLayout>
          </Route>
          <Route path='/user/:path?' exact>
            <UserLayout>
              <Switch>
                <Route path='/user/login' exact component={Login} />
                <Route path='/user/logout' component={Login} />
              </Switch>
            </UserLayout>
          </Route>
          <Route path='/admin/:path?' exact>
            <AdminLayout>
              <Switch>
                <Route path='/admin' exact component={Index} />
                <Route path='/admin/setting' component={Index} />
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
