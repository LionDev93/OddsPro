import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
} from 'native-base';
import styles from './style';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  

  render() {
    return (
      <Container>
        <Content
          padder
          contentContainerStyle={{ alignItems: 'center', width: '100%' }}
        >
          
        </Content>
      </Container>
    );
  }
}


export default LoginScreen;
