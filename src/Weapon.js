
import React, { Component } from 'react'
import { Grid, Card, Image, Button, Form, Dropdown, Icon, Popup, Segment } from 'semantic-ui-react'
import axios from 'axios';

const options = [
  { key: '', text: '', value: '' },
]

class Weapon extends Component {

  state = {
    ketQuaWeapon: '',
    timNameWeapon1:'', 
    timNameWeapon1KO:'', 
    timNameWeapon2:'', 
    timNameWeapon2KO:'', 
    NameWeapon:'',

    chonImageWeapon:'',
    chonNameWeapon:'',

    idWeaponCu:'',
    imageWeaponMoi:'',

    name1:'',
    name2:'',

    thongBao:'',
  }

  componentDidMount() {
    axios.get('http://localhost:5300/Gantz/Weapon')
    .then(response => {
      this.setState({ketQuaWeapon: response.data});
      // alert(this.state.ketQuaWeapon)
      for(var i = 0; i < response.data.length; i++){
        options.push({
          key: response.data[i].id,
          text: response.data[i].name,
          // value: response.data[i].name,
          value: i,
        })
      }
    })
  }

  onChangeTimNameWeapon1 = (e, { value }) => {
    this.setState({timNameWeapon1: value})
  }
  onChangeTimNameWeapon2 = (e, { value }) => {
    this.setState({timNameWeapon2: value})
  }
  
  tìm = (e, { value }) => {
    axios.get('http://localhost:5300/Gantz/Weapon/tim?tenWeapon1='+this.state.timNameWeapon1+'&tenWeapon2='+this.state.timNameWeapon2)
    .then(res => {
      this.setState({NameWeapon: res.data});
      this.setState({timNameWeapon1KO: this.state.timNameWeapon1})
      this.setState({timNameWeapon1: ''});
    })
  }
  

  onChangeTenCu = (e, { value }) => {
    this.setState({idWeaponCu: value})
  }
  onChangeAnhMoi = (e, { value }) => {
    this.setState({imageWeaponMoi: value})
  }
  update = (e, { value }) => {
    axios.get('http://localhost:5300/Gantz/Weapon/update?idWeaponCu='+this.state.idWeaponCu+'&anhWeaponMoi='+this.state.imageWeaponMoi)
    .then(res => {
      this.setState({idWeaponCu:''});
      this.setState({imageWeaponMoi:''});
      this.setState({ketQuaWeapon: res.data});
    })
  }

  
  onChangeName1 = (e, { value }) => {
    this.setState({name1: value})
  }
  onChangeName2 = (e, { value }) => {
    this.setState({name2: value})
  }
  change = (e, { value }) => {
    axios.get('http://localhost:5300/Gantz/Weapon/change?name1='+this.state.name1+'&name2='+this.state.name2)
    .then(res => {
      this.setState({name1:''});
      this.setState({name2:''});
      this.setState({ketQuaWeapon: res.data});
    })
  }

  chonTen = (e, { value }) => { 
    // đây là cách 1 gửi đến server để nhận ảnh
    // axios.get('http://localhost:5300/Gantz/Weapon/tim?tenWeapon1='+value)
    // .then(res => {
    //   this.setState({chonImageWeapon: res.data});
    // })

    // đây là cách 2 lấy ảnh ở đây
    this.setState({chonImageWeapon: this.state.ketQuaWeapon[value].image});
    this.setState({chonNameWeapon: this.state.ketQuaWeapon[value].name});

    // alert(value)
  }
  
  render() {
    const { ketQuaWeapon, NameWeapon, chonImageWeapon, chonNameWeapon } = this.state
    const {  } = this.props

    return (
      <div className="Weapon" align='center'>
        <h1>Weapon</h1>
        
        <Grid columns={2}>
          <Grid.Column>
            <Dropdown
              onChange={this.chonTen}
              search
              selection
              wrapSelection={false}
              options={options}
              placeholder="Choose Gantz's Weapon"
            />
          </Grid.Column>
          <Grid.Column>
            <Segment>
            {chonNameWeapon}
            </Segment>
          
            {/* {chonImageWeapon===''
              ?null
              :<div>{<Image src={chonImageWeapon[0].image} size='small'></Image>}</div>
            } */}


            <Image src={chonImageWeapon} size='small'></Image>
            
          </Grid.Column>
        </Grid>


        <br/><br/><br/><br/><br/>

        {ketQuaWeapon
          ?
            <Grid doubling columns={3}>
              {ketQuaWeapon.map((Weapon)=>
                <Grid.Column>
                  <Popup
                    content={
                      <div>
                        <Image src={Weapon.image} size='big'></Image>
                        name: {Weapon.name}
                        <br/>
                        id: {Weapon._id}
                        <br/><br/><br/>
                      </div>
                    }
                    on='click'
                    pinned
                    trigger={<Image src={Weapon.image} size='small'></Image>}
                    position='center'
                  />
                  <br/>
                  {Weapon.name}
                  <br/>
                </Grid.Column>
              )}
            </Grid>
            
          :null
        }
        <br/><br/>
        name 1 <Form>
          <Form.Input inline
          value={this.state.timNameWeapon1}
          onChange={this.onChangeTimNameWeapon1}
          />
        </Form>
        name 2 <Form>
          <Form.Input inline
          value={this.state.timNameWeapon2}
          onChange={this.onChangeTimNameWeapon2}
          />
        </Form>
        <Button onClick={this.tìm} >Tìm</Button>
        <br/><br/>

        {NameWeapon===''
          ?null
          :
            <div>
              {
                NameWeapon.length===0
                ?'Không tìm thấy ' + this.state.timNameWeapon1KO + ' và ' + this.state.timNameWeapon2KO
                :
                  <div>
                    {NameWeapon.map((moiWeapon) =>
                      <div>
                        <Image src={moiWeapon.image}></Image>
                        Name: {moiWeapon.name}
                      </div>
                    )}
                  </div>
              }
            </div>
        }


        <br/><br/>
        id <Form>
          <Form.Input inline
            value={this.state.idWeaponCu}
            onChange={this.onChangeTenCu}
          />
        </Form>
        new image's name <Form>
          <Form.Input inline
            value={this.state.imageWeaponMoi}
            onChange={this.onChangeAnhMoi}
          />
        </Form>
        <Button onClick={this.update} >Update</Button>
        <br/><br/>


        <br/><br/>
        name 1 <Form>
          <Form.Input inline
            value={this.state.name1}
            onChange={this.onChangeName1}
          />
        </Form>
        name 2 <Form>
          <Form.Input inline
            value={this.state.name2}
            onChange={this.onChangeName2}
          />
        </Form>
        <Button onClick={this.change} >Change</Button>

        

        <br/><br/>







        {/* {NameWeapon===''?null:
          <div>
            {
              NameWeapon.length===0
              ?'Không tìm thấy ' + this.state.timNameWeapon1KO
              :
                NameWeapon.length===2
                ? <div>
                    <Image src={NameWeapon[0].image} size='small'></Image>
                                {NameWeapon[0].name}
                    <Image src={NameWeapon[1].image} size='small'></Image>
                                {NameWeapon[1].name}
                  </div>
                : <div>
                    <Image src={NameWeapon[0].image} size='small'></Image>
                                {NameWeapon[0].name}
                  </div>
            }
          </div>
        } */}






        <br/><br/>
        
      </div>
    )

  }



}
export default Weapon;