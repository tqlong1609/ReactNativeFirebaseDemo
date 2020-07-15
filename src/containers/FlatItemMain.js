import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import StyleApp from '../styles';
import ImageLoad from 'react-native-image-placeholder';

export class FlatItemMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      //   uriImage: '',
      //   name: '',
      //   address: '',
      //   timeOpen: '',
      //   timeClose: '',
      //   cost: '',
    };
  }
  static getDerivedStateFromProps(_props, _state) {
    if (_props.value === _state.value) {
      return null;
    }
    return {value: _props.value};
  }
  render() {
    const urlImage = this.state.value.urlImageFireBase;
    return (
      <View style={StyleApp.StyleFlatItemMain.container}>
        {/* <Image
          style={StyleApp.StyleFlatItemMain.image}
          source={{
            uri:
              '',
          }}
        /> */}
        {(() => {
          switch (urlImage) {
            case null:
              return null;
            case '':
            // return (
            //   <Image
            //     source={require('../../assets/img/high_priority_127px.png')}
            //   />
            // );
            default:
              return (
                <ImageLoad
                  style={StyleApp.StyleFlatItemMain.image}
                  loadingStyle={{size: 'large', color: 'red'}}
                  source={{uri: urlImage}}
                />
              );
          }
        })()}
        <View style={StyleApp.StyleFlatItemMain.containerContent}>
          <Text style={StyleApp.StyleFlatItemMain.NameText}>
            {this.state.value.name}
          </Text>
          <Text>{this.state.value.address}</Text>
          <Text>
            {this.state.value.timeOpen} - {this.state.value.timeClose}
          </Text>
          <Text>Cost: {this.state.value.cost}</Text>
        </View>
      </View>
    );
  }
}

export default FlatItemMain;
