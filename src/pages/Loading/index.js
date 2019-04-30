import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';


import styles from './style';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);

  }

  async componentDidMount() {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'app' : 'auth');
  }

  componentWillUnmount() {
    
  }

  render() {
    return <View style={styles.container} />;
  }
}


export default LoadingScreen;
