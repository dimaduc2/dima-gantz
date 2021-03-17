
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon, Popup } from 'semantic-ui-react'
import axios from 'axios';


class Vampire extends Component {

  state = {
    ketQuaVampire: '',

    nameVampire: '',
    speciesVampire: '',
    genderVampire: '',
    imageVampire: ''
  }

  componentDidMount() {
    axios.get('http://localhost:5300/Gantz/Vampire')
    .then(response => {
      this.setState({ketQuaVampire: response.data});
      // alert(this.state.ketQuaVampire)
    })
  }

  
  taoMoi = () => {
    if(this.state.nameVampire === ''){
      alert('đánh chữ vào ô text name')
    }
    else if(this.state.speciesVampire === ''){
      alert('đánh chữ vào ô text species')
    }
    else if(this.state.genderVampire === ''){
      alert('đánh chữ vào ô text gender')
    }
    else if(this.state.imageVampire === ''){
      alert('đánh chữ vào ô text image')
    }
    else{
      const newVampire = {
        name: this.state.nameVampire,
        species: this.state.speciesVampire,
        gender: this.state.genderVampire,
        image: this.state.imageVampire
      };
      axios.post('http://localhost:5300/gantz/vampire/add', newVampire)
      .then(res => {
        this.setState({ketQuaAngel: res.data});
      })
      this.setState({
        nameVampire: '',
        speciesVampire: '',
        genderVampire: '',
        imageVampire: '',
      })
    }
  }



  
  taoMoi1 = () => {
    if(this.state.nameVampire === ''){
      alert('đánh chữ vào ô text name')
    }
    else if(this.state.speciesVampire === ''){
      alert('đánh chữ vào ô text species')
    }
    else if(this.state.genderVampire === ''){
      alert('đánh chữ vào ô text gender')
    }
    else if(this.state.imageVampire === ''){
      alert('đánh chữ vào ô text image')
    }
    else{
      axios.get('http://localhost:5300/gantz/vampire/add1?tenVampire='+this.state.nameVampire+
                                                  '&gioiTinhVampire='+this.state.genderVampire+
                                                  '&giaTocVampire='+this.state.speciesVampire+
                                                  '&anhVampire='+this.state.imageVampire)
      .then(res => {
        this.setState({ketQuaAngel: res.data});
      })
      this.setState({
        nameVampire: '',
        speciesVampire: '',
        genderVampire: '',
        imageVampire: '',
      })
    }
  }



  
  taoMoi2 = () => {
    if(this.state.nameVampire === ''){
      alert('đánh chữ vào ô text name')
    }
    else if(this.state.speciesVampire === ''){
      alert('đánh chữ vào ô text species')
    }
    else if(this.state.genderVampire === ''){
      alert('đánh chữ vào ô text gender')
    }
    else if(this.state.imageVampire === ''){
      alert('đánh chữ vào ô text image')
    }
    else{
      // axios.get('http://localhost:5300/gantz/vampire/add2/'+this.state.nameVampire+'&'+this.state.speciesVampire+'&'+this.state.genderVampire+'&'+this.state.imageVampire)
      // axios.get('http://localhost:5300/gantz/vampire/add2/tenVampire&gioiTinhVampire&giaTocVampire&anhVampire')
      axios.get('http://localhost:5300/gantz/vampire/add2/'+this.state.nameVampire+'/'+
                                                            this.state.speciesVampire+'/'+
                                                            this.state.genderVampire+'/'+
                                                            this.state.imageVampire
      )
      .then(res => {
        this.setState({ketQuaAngel: res.data});
      })
      this.setState({
        nameVampire: '',
        speciesVampire: '',
        genderVampire: '',
        imageVampire: '',
      })
    }
  }



  xoa(id){
    var r = window.confirm("Có xóa không?");
    if(r === true){
      axios.get('http://localhost:5300/gantz/vampire/xoa?id=' + id)
      .then(response => {
        this.setState({ketQuaVampire: response.data});
      })
    }
  }








  onChangeNameVampire = (e, { value }) => {
    this.setState({
      nameVampire: value
    });
  }
  onChangeSpeciesVampire = (e, { value }) => {
    this.setState({
      speciesVampire: value
    });
  }
  onChangeGenderVampire = (e, { value }) => {
    this.setState({
      genderVampire: value
    });
  }
  onChangeImageVampire = (e, { value }) => {
    this.setState({
      imageVampire: value
    });
  }




  
  
  render() {
    const { ketQuaVampire } = this.state
    const {  } = this.props

    return (
      <div className="Vampire" align='center'>
        <h1>Vampire</h1>
        
        <br/>

        {ketQuaVampire
          ?
            <Grid doubling columns={3}>
              {ketQuaVampire.map((Vampire)=>

                <Grid.Column>
                  <Popup
                    content={
                      <div>
                        <Image src={Vampire.image} size='big'></Image>
                        Name: {Vampire.name}
                        <br/>
                        Species: {Vampire.species}
                        <br/>
                        Gender: {Vampire.gender}
                        <br/><br/><br/>
                      </div>
                    }
                    on='click'
                    pinned
                    trigger={<Image src={Vampire.image} size='small'></Image>}
                    position='center'
                  />
                  <br/>
                  {Vampire.name}
                  <br/>
                  <Button onClick={() => this.xoa(Vampire._id)}>X</Button>
                </Grid.Column>


              )}
            </Grid>
          :null
        }

        <Form>
          Name: <Form.Input inline
          value={this.state.nameVampire}
          onChange={this.onChangeNameVampire}
          />
          Species: <Form.Input inline
          value={this.state.speciesVampire}
          onChange={this.onChangeSpeciesVampire}
          />
          Gender: <Form.Input inline
          value={this.state.genderVampire}
          onChange={this.onChangeGenderVampire}
          />
          Image: <Form.Input inline
          value={this.state.imageVampire}
          onChange={this.onChangeImageVampire}
          />
        </Form>
        <Button onClick={this.taoMoi} >thêm Vampire</Button>
        <Button onClick={this.taoMoi1} >thêm Vampire1</Button>
        <Button onClick={this.taoMoi2} >thêm Vampire2</Button>

      </div>
    )

  }



}
export default Vampire;