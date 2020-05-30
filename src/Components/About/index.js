import React from 'react';
import { Grid, Card, Image, Popup, Header,  Placeholder, Icon, Segment } from 'semantic-ui-react';
import screen from '../About/screenMedium.PNG';
const About = () => {
    return (
        <div>



            <Grid columns='equal' style={{ height: '80vh' }}>
                <Grid.Row stretched>
                    <Grid.Column verticalAlign='middle' stackable columns='equal'>


                        <Popup
                            content='React interview series - Ash Cole'

                            header='Visit Medium'
                            trigger={
                                <a target='_blank' rel="noopener noreferrer" href='https://medium.com/@acole9238/react-interview-series-a23dcc44a0c4'>
                                    <Card verticalAlign='middle' centered style={{ background: 'none', boxShadow: 'none' }} >
                                        <Image src={screen} verticalAlign='middle' wrapped style={{}} />
                                        <Card.Content>
                                            <Card.Header>Medium <Icon name="medium" /></Card.Header>
                                            <Card.Meta>May 2020</Card.Meta>

                                        </Card.Content>

                                    </Card>
                                </a>
                            } />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as='h1' size="massive" style={{ fontSize:'3em'}} icon textAlign='center'>
                            <Icon name='paper plane outline' color="white" style={{color:'white'}} circular />
                            <Header.Content style={{color:'white'}}>Things I enjoy </Header.Content>
                            <Segment>
                                Thank you for visiting my site
                            </Segment>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>


                        <Grid verticalAlign='middle' stackable columns='equal' >
                            <Grid.Row>
                                <Grid.Column>

                                    <Icon name='microsoft' size="huge" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='google' size="huge" />
                                      CodeJam
                                </Grid.Column>
                                <Grid.Column>

                                    <Icon name='medium' size="huge" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>



                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                    </Grid.Column>
                    <Grid.Column width={6}>

                        <Grid verticalAlign='middle' stackable columns='equal' style={{ textAlign: 'center' }} >
                            <Grid.Row>
                                <Grid.Column>

                                    <Icon name='microsoft' size="huge" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon name='google' size="huge" />
                                      CodeJam
                                </Grid.Column>
                                <Grid.Column>

                                    <Icon name='medium' size="huge" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Grid.Column>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>







        </div>
    )
}

export default About;