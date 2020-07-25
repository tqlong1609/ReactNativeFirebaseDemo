import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './Splash.styles';
import LottieView from 'lottie-react-native';
export class Splash extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LottieView
          source={require('../../assets/json/20937-stay-home-with-music.json')}
          autoPlay
          Loop
        />
      </SafeAreaView>
    );
  }
}

export default Splash;
