
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon, Popup } from 'semantic-ui-react'
import axios from 'axios';


class Alien extends Component {

  state = {
    ketQuaAlien: '',
  }

  componentDidMount() {
    axios.get('http://localhost:5300/Gantz/Alien')
    .then(response => {
      this.setState({ketQuaAlien: response.data});
      // alert(this.state.ketQuaAlien)
    })
  }
  
  
  render() {
    const { ketQuaAlien } = this.state
    const {  } = this.props

    return (
      <div className="Alien" align='center'>
        <h1>Alien</h1>
        {ketQuaAlien}
      </div>
    )

  }



}
export default Alien;