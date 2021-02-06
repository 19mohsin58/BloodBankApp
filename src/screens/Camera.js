import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      
        
        
        <Footer >
          <FooterTab style={{backgroundColor:'#a30505'}} >
            <Button vertical>
              <Icon name="medkit"/>
              
            </Button>
            <Button vertical>
              <Icon name="pulse" />
             
            </Button>
            <Button vertical active style={{backgroundColor:'#a30505'}} >
              <Icon active name="flask" />
              
            </Button>
            <Button vertical>
              <Icon name="person" />
              
            </Button>
          </FooterTab>
        </Footer>
      
    );
  }
}        