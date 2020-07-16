import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import FlatItemMain from '../../containers/FlatItemMain';
import {ADD_ITEM_SCREEN} from '../../lib/configs/nameScreen';
import MainStyle from './Main.Styles';
import MainController from './Main.Controller';
import {connect} from 'react-redux';
import {translate} from '../../lib/locales';
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
    };
  }
  static getDerivedStateFromProps(_props, _state) {
    // if (_state.data === _props.data) {
    //   return null;
    // }
    return {error: _props.error, data: _props.arrData};
  }
  clickAdd = () => {
    this.props.navigation.navigate(ADD_ITEM_SCREEN);
  };

  componentDidMount() {}

  render() {
    this.props.onLoad();

    return (
      <View style={MainStyle.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <FlatItemMain value={item} />}
        />
        <TouchableOpacity style={MainStyle.btnAdd} onPress={this.clickAdd}>
          <Text>{translate('Add')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(
  MainController.mapStateToProps,
  MainController.mapDispatchToProps,
)(Main);
