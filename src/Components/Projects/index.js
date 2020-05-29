import React from 'react';
import { Item, Container, Header, Image, Card, Popup, Modal, Embed, Button, Grid } from 'semantic-ui-react';
import lastStand from '../Projects/lastScreenShot.PNG';
import jackFront from '../Projects/jackFront.PNG';
import jackMap from '../Projects/jackMap.PNG';
import jackMobile from '../Projects/jackMobile.PNG';
import jackSprite from '../Projects/jackSprite.PNG';
import proFront from '../Projects/proFront.PNG';
import bankFront from '../Projects/bankFront.PNG';
import streamFront from '../Projects/streamFront.PNG';
import liriFront from '../Projects/liriFront.png';
import codeFront from '../Projects/codeFront.PNG';
const Projects = () => {



  return (
    <div>

      <Header as='h1' content='Past Work'
        textAlign='center' style={{ paddingTop: '8%', paddingBottom: '2%', fontSize: '5em', color: 'white' }} />
      <h3 style={{ textAlign: 'center', paddingBottom: '3%', fontWeight: 'lighter' }}>Hover image for more information</h3>
      <Container>
        <Item.Group divided>
          <Item>

            <Popup position='top left'
              trigger={<Item.Image src={proFront}

              />} flowing hoverable>
              <Grid centered divided columns={3}>


                <Grid.Column textAlign='center'>
                  <Card>
                    <Image src={lastStand} />
                    <Card.Content>
                      <Card.Header>Last Stand Taven</Card.Header>
                      <Card.Description>
                        American based restuarant, set in a beautiful scenic location.
                        A simple but creative website to help with online sales during recent global events.
          </Card.Description>
                    </Card.Content>
                  </Card>
                  <Popup content='Go to last stand tavern' trigger={
                    < a target='_blank' href="http://www.laststandtavern.com">
                      <Button>
                        Visit
                    </Button>
                    </ a>
                  } />
                </Grid.Column>


                <Grid.Column textAlign='center'>
                  <Card>
                    <Image src={bankFront} />
                    <Card.Content>
                      <Card.Header>A new take on digitalization </Card.Header>
                      <Card.Description>
                        Creating concepts for various projects and stages of a companies lifecycle.
          </Card.Description>
                    </Card.Content>
                  </Card>
                  <Popup content='go to site (some content removed for NDA)' trigger={
                    < a target='_blank' href="https://ash-sp-cole.github.io/commerzbank/">
                      <Button>
                        Visit
                    </Button>
                    </ a>
                  } />
                </Grid.Column>




                <Grid.Column textAlign='center'>
                  <Card>
                    <Image src={streamFront} />
                    <Card.Content>
                      <Card.Header>Streaming Site </Card.Header>
                      <Card.Description>
                        Currently in production, a streaming site using React and Google Auth.
          </Card.Description>
                    </Card.Content>
                  </Card>

                </Grid.Column>
              </Grid>
            </Popup>
            <Item.Content>
              <Item.Header >Professional Websites for a variety of clients </Item.Header>
              <Item.Meta>
                <span>Restuarants, e-commerce , production testing</span>

              </Item.Meta>
              <Item.Description>
                Working with clients to create a unique and meaningful digital experience for customers. Utilizing a variety of current technologies
                to bring digitalisation to upcoming brands. My work has also included optimizing WordPress for clients to produce and customize their sites on a real-time basis.
                Using Api's such as 'Toast-tab' P.O.S system and "GoogleAuth" to further extend the reach and possibility of e-commerce sites.


            </Item.Description>


            </Item.Content>
          </Item>



          <Item>
            <Item.Content>
              <Item.Header >J.A.C.K  </Item.Header>
              <Item.Meta>
                <span>A Component based RPG</span>

              </Item.Meta>
              <Item.Description>
                Working with clients to create a unique and meaningful digital experience for customers. Utilizing a variety of current technologies
                to bring digitalisation to upcoming brands. My work has also included optimizing WordPress for clients to produce and customize their sites on a real-time basis.
                Using Api's such as 'Toast-tab' P.O.S system and "GoogleAuth" to further extend the reach and possibility of e-commerce sites.


</Item.Description>

<Modal trigger={
                    <Button style={{float:'right'}}>Watch Presentation</Button>

                  }>
                    <Modal.Content>
                    <Embed
    id='ZF7IMSO7iOU'
     placeholder={jackFront}
    source='youtube'
  />
                      <Modal.Description>
                        <Header>Our Final Project presentation at UPenn</Header>
                        <p>
                          We share our project with our class and teachers
        </p>
                        
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
            </Item.Content>
            <Popup position='top left'
              trigger={<Item.Image size='medium' src={jackFront}

              />} flowing hoverable>
              <Grid centered divided columns={3}>


                <Grid.Column textAlign='center'>
                  <Card>
                    <Image src={jackMap} />
                    <Card.Content>
                      <Card.Header>Using Redux and mapping to create a dynamic component based world</Card.Header>
                      <Card.Description>
                        Our aim was to create a living world using React, to render components dynamically based on user actions.
</Card.Description>
                    </Card.Content>
                  </Card>

                </Grid.Column>


                <Grid.Column textAlign='center'>
                  <Card>
                    <Image src={jackSprite} />
                    <Card.Content>
                      <Card.Header>Custom Sprites</Card.Header>
                      <Card.Description>
                        Player changes appearance based on interactions within the game environment.Conditional based rendering to show progression
</Card.Description>
                    </Card.Content>
                  </Card>
                  


                </Grid.Column>




                <Grid.Column textAlign='center'>
                  <Card>
                    <Image src={jackMobile} />
                    <Card.Content>
                      <Card.Header>A Native experience<br></br></Card.Header>
                      <Card.Description>
                        With the flexibility that React offers and with custom UI and overlay, Native support is easy to achieve.
</Card.Description>
                    </Card.Content>
                  </Card>

                </Grid.Column>
              </Grid>
            </Popup>

          </Item>


          <Item>

            <Popup position='top left'
              trigger={<Item.Image src={codeFront}

              />} flowing hoverable>
              <Grid centered divided columns={3}>


                <Grid.Column textAlign='center'>
                  <Card>
                    <Image src={liriFront} />
                    <Card.Content>
                      <Card.Header>Liri Bot</Card.Header>
                      <Card.Description>
                        A Command line interface to scrape for songs, movies from various Api's
</Card.Description>
                    </Card.Content>
                  </Card>
                  <a target='_blank' href='https://github.com/ash-sp-cole/LiriBot'>
                  <Button>View Code</Button>
                  </a>
                </Grid.Column>

            
                <Grid.Column textAlign='center'>
                  <Card>
                    <Image src={codeFront} />
                    <Card.Content>
                      <Card.Header>B-amazon</Card.Header>
                      <Card.Description>
                        An e-commerce commandline project, using SQL.
</Card.Description>
                    </Card.Content>
                  </Card>
                  <a target='_blank' href='https://github.com/ash-sp-cole/BamazoN'>
                  <Button>View Code</Button>
                  </a>
                </Grid.Column>
              </Grid>
            </Popup>
            <Item.Content>
              <Item.Header >Command Line interfaces </Item.Header>
              <Item.Meta>
                <span>Simple projects using a variety of technologies to explore command line potential.</span>

              </Item.Meta>
              <Item.Description>
               
</Item.Description>


            </Item.Content>
          </Item>

        </Item.Group>
      </Container>



    </div>
  )
}

export default Projects