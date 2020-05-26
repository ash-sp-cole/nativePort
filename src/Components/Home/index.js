import React, { Component } from 'react';
import { Item, Container, Header, Divider, Transition, Popup, Image, Label, Icon, Button, Grid, Segment, Menu, Sidebar} from 'semantic-ui-react';
import Tech from './TechStack';

class Projects extends Component {
    state = { visible: false }

    toggleVisibility = () =>{
        this.setState((prevState) => ({ visible: !prevState.visible }))
    }

        


    render() {
       
    

        const { visible } = this.state
        return (

            <div>

                <Header as='h1' content='Ashley Simon Peter Cole' textAlign='center' style={{ paddingTop: '3%', paddingBottom: '3%' }} />
                <Container >

                    <Item.Group divided >
                        <Item>

                            <Item.Content>
                                <Item.Header as='a'>Welcome </Item.Header>
                                <Item.Meta>

                                    <span>
                                        Freelance web developer - Highly experience in creating custom websites.
              </span>

                                </Item.Meta>
                                <Item.Description style={{ paddingBottom: '2%' }}>
                                    A description which may flow for several lines and give context to the content.
            </Item.Description>

                            </Item.Content>
                        </Item >




                        <Item style={{ textAlign: 'center' }}>

                            <Item.Content>
                                <Item.Header as='a'></Item.Header>



                                <Item.Meta>
                                    <Popup content='Click to explore my stack' trigger={


                                        <span>Experienced in a variety of Front and Back end technologies</span>
                                    } />
                                </Item.Meta>
                                <Item.Description>

                                </Item.Description>
                                <br></br>
                                <Button animated
                                    fluid
                                    content={visible ? 'Hide' : 'Show'}
                                    onClick={this.toggleVisibility}>
                                    <Button.Content visible>  <h3>Explore</h3></Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>

                                <Divider hidden />
                                <Transition visible={visible} animation='zoom' duration={900}>
                                    <Grid columns='equal' >
                                        <Grid.Row>
                                            <Grid.Column>
                                                <br></br>
                                                <Icon size="huge" name='html5' />


                                            </Grid.Column>
                                            <Grid.Column>

                                                <Icon size="huge" name='js sqaure' />
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
                                </Transition>
                            </Item.Content>
                        </Item>




                        <Item style={{ textAlign: 'right' }}>
                            <Item.Image src='/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header as='a'>Content Header</Item.Header>
                                <Item.Meta>
                                    <span>Date</span>
                                    <span>Category</span>
                                </Item.Meta>
                                <Item.Description>
                                    A description which may flow for several lines and give context to the content.
            </Item.Description>
                                <Item.Extra>
                                    <Button primary floated='right'>
                                        Primary
                <Icon name='chevron right' />
                                    </Button>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Container>


            </div>
        )
    }
}
export default Projects