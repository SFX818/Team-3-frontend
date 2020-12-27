import {Switch, Route} from 'react-router-dom'

// Components
import Home from "./components/Home"
// HOC which wraps around other components
import Layout from './components/common/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Product from './components/Product'
import Purchase from './components/Purchase'


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
       <Route exact path="/purchase" component={Purchase}/>
     </Switch>
    </Layout>
  );
};

export default App;