import React from 'react';
import {Item, Container,Header, Image , Label,Icon, Button, Step} from 'semantic-ui-react';

const Projects = () =>{

    return(
        <div>
               <Header as='h3' content='Responsive Item'textAlign='center' />
    <Container>
      <Item.Group divided>
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
              <Image avatar circular src='/images/wireframe/square-image.png' />
              Username
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
    <Header as='h3' content='Responsive Steps'textAlign='center' />

    <Container>
      <Step.Group fluid>
        <Step icon='plane' title='Shipping' description='Choose your shipping options' />
        <Step active icon='dollar' title='Billing' description='Enter billing information' />
        <Step
          disabled
          icon='info circle'
          title='Confirm Order'
          description='Verify order details'
        />
      </Step.Group>
    </Container>
        </div>
    )
}

export default Projects