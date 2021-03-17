import React, { Component } from 'react'

import {Menu, Icon, Radio} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import './App.css';
import Home from './Home'
import People from './People'
import Weapon from './Weapon'
import Alien from './Alien'
import Vampire from './Vampire'


class App extends Component {

  state = { mauSangToi: 'mauToi', mauMenu: true}

  chonMenu = (e, { name }) => {
    this.setState({ dangChonGi: name});
    // alert(name)
  }

  render() {const { dangChonGi, mauSangToi, mauMenu } = this.state
  
  return (
    <div className="App">
    
      <Router>
        
        
        <Menu inverted = {mauMenu}>
          
          <Menu.Item
            as={Link}
            to="/"
            name='Home'
            active={this.state.dangChonGi === 'Home'}
            onClick={this.chonMenu}>
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/People"
            name='People'
            active={this.state.dangChonGi === 'People'}
            onClick={this.chonMenu}>
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/Weapon"
            name='Weapon'
            active={this.state.dangChonGi === 'Weapon'}
            onClick={this.chonMenu}>
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/Alien"
            name='Alien'
            active={this.state.dangChonGi === 'Alien'}
            onClick={this.chonMenu}>
          </Menu.Item>
          
          <Menu.Item
            as={Link}
            to="/Vampire"
            name='Vampire'
            active={this.state.dangChonGi === 'Vampire'}
            onClick={this.chonMenu}>
          </Menu.Item>
          


        </Menu>
        
        <Route exact path = "/"  component = {Home}/>
        <Route path = "/People" render={() => <People/>} />
        <Route path = "/Weapon" render={() => <Weapon/>} />
        <Route path = "/Alien" render={() => <Alien/>} />
        <Route path = "/Vampire" render={() => <Vampire/>} />
      </Router>
      
    </div>
    );
  }
}

export default App;
