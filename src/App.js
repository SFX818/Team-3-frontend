import {Switch, Route} from 'react-router-dom'

// Components
import Home from "./components/Home"
// HOC which wraps around other components
import Layout from './components/common/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Product from './components/Product'
import MyProduct from './components/MyProduct'
import Purchase from './components/Purchase'
import Sell from './components/Sell'
import Settings from './components/Settings'
import Edit from './components/Edit'


// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <Layout>
      <Switch>
       <Route exact path={["/", "/home"]} component={Home} />
       <Route exact path="/login" component={Login}/>
       <Route exact path="/register" component={Signup}/>
       <Route exact path="/profile" component={Profile}/>
       <Route exact path="/product" component={Product}/>
       <Route exact path="/myproduct" component={MyProduct}/>
       <Route exact path="/sell" component={Sell}/>
       <Route exact path="/purchase" component={Purchase}/>
       <Route exact path="/settings" component={Settings}/>
       <Route exact path="/edit" component={Edit}/>
     </Switch>
    </Layout>
  );
};

export default App;