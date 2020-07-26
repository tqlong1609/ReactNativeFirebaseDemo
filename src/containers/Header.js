import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as Colors from '../styles/colors';
import * as Sizes from '../styles/sizes';
export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtHeader}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_SCREEN,
    height: Sizes.HEIGHT_SMALL_MEDIUM,
    justifyContent: 'center',
  },
  txtHeader: {
    alignSelf: 'center',
    fontSize: Sizes.FONT_SIZE_MEDIUM_LARGE,
    color: Colors.TEXT_HEADER,
  },
});
export default Header;
