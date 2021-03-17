
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon, Popup } from 'semantic-ui-react'
import axios from 'axios';


class People extends Component {

  state = {
    ketQuaPeople: '',
  }

  componentDidMount() {
    axios.get('http://localhost:5300/Gantz/People')
    .then(response => {
      this.setState({ketQuaPeople: response.data});
      // alert(this.state.ketQuaPeople)
    })
  }
  
  
  render() {
    const { ketQuaPeople } = this.state
    const {  } = this.props

    return (
      <div className="People" align='center'>
        <h1>People</h1>
        {ketQuaPeople}
      </div>
    )

  }



}
export default People;