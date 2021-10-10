import './App.css';
import {Home} from './Home';
import {Myrecipes} from './Myrecipes';
import {Navigation} from './Navigation';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="Container">
     <h1 className="m-3 d-flex justify-content-center">
       Flavorful Minds
     </h1>
    <Navigation/>
     <Switch>
       <Route exact path='/Home' component={Home} />
       <Route exact path='/'>
         <Redirect to ='/Home'/>
       </Route>
       <Route path='/Myrecipes' component={Myrecipes}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
