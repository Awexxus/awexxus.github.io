import React, { Component } from 'react';
import RenderTable from './renderTable'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AddItem from './addItem'
import InfoRender from './info'
import './App.css';
const Info = () =>{
    return(
        <InfoRender/>
    )
}
const Home = () =>{
    return (<div>
                <div>
                    <AddItem/>
                </div>
                <div>
                    <RenderTable />
                </div>
            </div>)
}
class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/info">Info</Link></li>
                    </ul>
                </header>
                <Route exact path="/" component={Home}/>
                <Route exact path="/info" component={Info}/>
            </div>
        </Router>
    );
  }
}

export default App;
