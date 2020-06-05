import React, { Component } from 'react';
import { Item, Container, Header, Divider, Transition, Popup, Icon, Button, Grid, Menu, Sidebar, Responsive } from 'semantic-ui-react';
import '../../App.css';

class Projects extends Component {
    state = {
        visible: false,
        showSidebar: false
    }

    toggleVisibility = () => {
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

    toggleSidebar = () => {
        this.setState({
            showSidebar: true
        })
    }
    toggleOff = () => {
        this.setState({
            showSidebar: false
        })
    }


    render() {



        const { visible } = this.state
        return (

            <div>

                <Header as='h1'  textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%' }} />
                <Container>

                    <Item.Group divided >
                        <Item>

                            <Item.Content>
                                <Item.Header ><h1 style={{fontSize:'5em', color:'white'}}>Welcome</h1> </Item.Header>
                                <Item.Meta>

                                    <span style={{fontSize:'2.5em'}}>
                                        Freelance web developer - <br></br>
              </span>

                                </Item.Meta>
                                <Item.Description style={{ paddingBottom: '2%', fontSize:'2em' }}>
                                
            </Item.Description>

                            </Item.Content>
                        </Item >


               

                        <Item style={{ textAlign: 'center' }}>

                            <Item.Content>
                                <Item.Header as='a'></Item.Header>



                                <Item.Meta>
                                    <Popup content='Click to explore my stack' trigger={


                                        <span style={{fontSize:'1.5em', fontWeight:'bold',color:'#241e2a'}}>Experienced in a variety of Front and Back end technologies</span>
                                    } />
                                </Item.Meta>
                                <Item.Description>

                                </Item.Description>
                                <br></br>
                                <Button animated
                                    
                                    content={visible ? 'Hide' : 'Show'}
                                    style={{background:'#241e2a', fontWeight:'bold', borderRadius:'25px'}}
                                    onClick={this.toggleVisibility}>
                                    <Button.Content visible  >  <h1 style={{fontSize:'4em', color:'white'}}>Explore</h1></Button.Content>
                                    <Button.Content hidden >
                                        <Icon name='arrow right'size="large" color="teal"/>
                                    </Button.Content>
                                </Button>

                                <Divider hidden />
                                <Transition visible={visible} animation='zoom' duration={900}>
                                    <Responsive>
                                        <Grid columns='equal' >
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <br></br>
                                                    <Icon size="huge" name='html5' />


                                                </Grid.Column>
                                                <Grid.Column>

                                                    <Icon size="huge" name='js square' />
                                                    <h3>JavaScript</h3>

                                                </Grid.Column>
                                                <Grid.Column>
                                                    <br></br>
                                                    <Icon size="massive" name='node' />

                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Icon name='github' size='huge' />
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <br></br>
                                                    <Icon size="huge" name='aws' />

                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Icon size="massive" name='react' />


                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Icon size="huge" name='npm' />

                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column> <h1> Redux</h1>
                                                    <Icon size='huge' name='redo' />

                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Icon size="huge" name='database' />
                                                    <h1>MongoDB / SQL</h1>

                                                </Grid.Column>

                                            </Grid.Row>
                                        </Grid>
                                    </Responsive>
                                </Transition>
                            </Item.Content>
                        </Item>
                        

                        <Sidebar.Pushable>
                            <Sidebar
                              
                                as={Menu}
                                animation='scale down'
                                icon='labeled'
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    width: '60vw'

                                }}

                                onHide={() => this.toggleOff()}

                                visible={this.state.showSidebar}
                                width='very wide'
                            >
                                <Responsive>
                                    <Grid columns='equal' style={{ width: '100%', height: '100%' }}>
                                        <Grid.Column style={{ height: '100%' }}>
                                            
                                            <a href="https://www.linkedin.com/in/ash-cole-web/"  rel="noopener noreferrer" target="_blank" style={{color:'inherit'}}>
                                            <Icon name='linkedin' size='huge'/>
                                            </a>
                                        </Grid.Column>
                                        <Grid.Column>
                                        <a href="https://github.com/ash-sp-cole" rel="noopener noreferrer" target="_blank" style={{color:'inherit'}}>
                                            <Icon name='github' size='huge' />
                                            </a>
                                        </Grid.Column>
                                        <Grid.Column>
                                        <Popup trigger={
                                            <Icon name='whatsapp' size='huge' />
                                        }>

                                            <Popup.Header>Feel free to email me</Popup.Header>
                                            <Popup.Content>
                                             Ash@ash-sp-cole.com
                                       
                                            </Popup.Content>
                                          </Popup>
                                        

                                        </Grid.Column>
                                    </Grid>
                                </Responsive>

                            </Sidebar>
                            <Sidebar.Pusher>

                            
                                <Item.Group  style={{ textAlign: 'right' }}>

                                    <Item.Content>

                                        <Item.Meta>
                                            <h1 style={{fontSize:'7em', color:'white'}}>Social</h1>

                                        </Item.Meta>
                                        <Item.Description>
                                            Thank you for viewing my site, <br></br>feel free to connect with me on the following platforms.
</Item.Description>
                                        <Item.Extra>
                                          
                                            <Button animated='vertical'
                                            size="large"
                                                floated='right' onClick={this.toggleSidebar}
                                                style={{marginTop:'5px', 
                                                background:'#241e2a', 
                                                fontWeight:'bold', 
                                                borderRadius:'25px',
                                            }}
                                            >
                                                <Button.Content hidden style={{color:'white'}}>View</Button.Content>
                                                <Button.Content visible>
                                                    <Icon name='coffee'color='teal' />
                                                </Button.Content>
                                                </Button>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item.Group>


                            </Sidebar.Pusher>
                        </Sidebar.Pushable>



                    </Item.Group>
                </Container>


            </div>
        )
    }
}
export default Projects





