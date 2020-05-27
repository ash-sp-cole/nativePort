import React from 'react';
import {Item, Container,Header, Image , Label,Icon, Button, Step} from 'semantic-ui-react';
import lastStand from'../Projects/lastScreenShot.PNG'



const Projects = () =>{



    return(
        <div>
              
               <Header as='h1' content='Past Work'textAlign='center' style={{paddingTop:'5%',paddingBottom:'5%'}}/>
    <Container>
      <Item.Group divided>
        <Item>
          <Item.Image src={lastStand}/>
          <Item.Content>
            <Item.Header as='a'>Professional Websites for a variety of clients </Item.Header>
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
              <Button floated='right' primary>
                Primary
                <Icon name='chevron right' /> 
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
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

export default Projects