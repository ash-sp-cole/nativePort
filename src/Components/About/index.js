import React from 'react';
import { Grid, Card, Image, Popup, Header,  Icon, Segment } from 'semantic-ui-react';
import screen from '../About/screenMedium.PNG';
import ash from '../About/ash.jfif'
const About = () => {
    return (
        <div>



            <Grid columns='equal' style={{ height: '80vh' }} stackable>
                <Grid.Row stretched>
                    <Grid.Column verticalAlign='middle' columns='equal' style={{ marginTop: 'auto' }}>
                        <Segment style={{ width: '55%', margin: 'auto', marginBottom: '30px', background: '#241e2a' }} >


                            <Header as='h5' style={{ color: 'white' }} icon textAlign='center'>
                                <Icon name='write' size="tiny" />
                                <Header.Content>Articles I've published</Header.Content>

                            </Header>


                            <Popup
                                content='React interview series - Ash Cole'
                                position='top center'
                                header='Visit Medium'
                                trigger={
                                    <a target='_blank' rel="noopener noreferrer" href='https://medium.com/@acole9238/react-interview-series-a23dcc44a0c4'>
                                        <Card  centered style={{ background: 'none', boxShadow: 'none' }} >
                                            <Image src={screen} verticalAlign='middle' wrapped style={{}} />
                                            <Card.Content style={{ color: 'white' }}>
                                                <Card.Header style={{ color: 'white' }}>Medium <Icon name="medium"/></Card.Header>
                                                <Card.Meta style={{ color: 'white' }}>May 2020</Card.Meta>

                                            </Card.Content>

                                        </Card>
                                    </a>
                                } />
{/* 
                            <Popup
                                content='React interview series - Ash Cole'
                                position='top center'
                                header='Visit Medium'
                                trigger={
                                    <a target='_blank' rel="noopener noreferrer" href='https://medium.com/@acole9238/react-interview-series-a23dcc44a0c4'>
                                        <Card verticalAlign='middle' centered style={{ background: 'none', boxShadow: 'none' }} >
                                            <Image src={screen} verticalAlign='middle' wrapped style={{}} />
                                            <Card.Content style={{ color: 'white' }}>
                                                <Card.Header style={{ color: 'white' }}>Medium <Icon name="medium" color="white" /></Card.Header>
                                                <Card.Meta style={{ color: 'white' }}>May 2020</Card.Meta>

                                            </Card.Content>

                                        </Card>
                                    </a>
                                } /> */}

                        </Segment>

                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as='h1'  style={{ fontSize: '3em' }} icon textAlign='center'>
                            <Image src={ash} color="white" style={{ color: 'white' }} circular />
                            <Header.Content style={{ color: 'white' }}>Hi I'm Ash</Header.Content>
                            <div style={{ fontSize: '.6em', paddingTop: '5%' }}>
                                <p>I am a web developer and programmer with experience in a variety of tech stacks. One of my main passions is algorithmic logic and understanding data structures, I find myself drawn to logical puzzles and complex problems that require careful thought. I enjoy attending conferences, Hackathons and competitions, solving new problems with one of my favourite languages C++.</p>
                                <p><br />Alternatively I find freedom in the creative expression of web design. Using the digital space as a platform and canvas to be creative and imaginative.The world is turning more towards personalised experiences, based in feedback and responsiveness.</p>
                                <p><em>As a web developer I am proud to be at the front of this digital pioneering, a journey where we can provide more opportunity, and most importantly more connection for those around us.</em></p>
                            </div>
                        </Header>
                        
                    </Grid.Column>
                    <Grid.Column>

                               
                    </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row>

                    <Grid.Column>

                    </Grid.Column>
                    <Grid.Column width={6}>

                        <Grid verticalAlign='middle' stackable columns='equal' style={{ textAlign: 'center' }} >
                            <Grid.Row>
                                <Grid.Column>
                                <Popup
                                content='2020'
                                position='top center'
                                header='Msbuild'
                                trigger={
                                    <Icon name='microsoft' size="huge" />
                                }/>
                                </Grid.Column>
                                <Grid.Column>
                                <Popup
                                content='Competitive Coding'
                                position='top center'
                                header='Google CodeJam'
                                trigger={
                                    <Icon name='google' size="huge" />
                                      
                                }/>
                                </Grid.Column>
                                <Grid.Column>
                                <Popup
                             
                                position='top center'
                                header='Medium'
                                trigger={
                                    <Icon name='medium' size="huge" />
                                }/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row>
            </Grid>







        </div>
    )
}

export default About;