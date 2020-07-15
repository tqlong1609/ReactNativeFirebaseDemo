import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import AppStyle from '../../styles';
import FlatItemMain from '../../containers/FlatItemMain';
import {ADD_ITEM_SCREEN} from '../../lib/configs/nameScreen';
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: '1',
          uriImage: 'a',
          name: 'name',
          address: 'address',
          timeOpen: '2:00',
          timeClose: '3:00',
          cost: '20.000',
        },
      ],
    };
  }

  clickAdd = () => {
    this.props.navigation.navigate(ADD_ITEM_SCREEN);
  };

  render() {
    return (
      <View style={AppStyle.StyleMain.container}>
        <FlatList
          // style={AppStyle.StyleMain.flatList}
          data={this.state.data}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <FlatItemMain value={item} />}
        />
        <TouchableOpacity
          style={AppStyle.StyleMain.btnAdd}
          onPress={this.clickAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Main;
