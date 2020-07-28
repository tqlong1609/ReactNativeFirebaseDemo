import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class TodoCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
      content: null,
    };
  }
  static getDerivedStateFromProps(_props, _state) {
    if (_state.state === null || _state.content === null) {
      return {state: _props.state, content: _props.content};
    } else {
      return null;
    }
  }

  shouldComponentUpdate(nextProps, nextStates) {
    // console.log('nextStates ' + nextStates.state);
    if (nextStates.state === this.state.state) {
      return false;
    }
    return true;
  }

  changeState = () => {
    this.setState({state: !this.state.state});
    this.props.parrenFlatlist.updateCountTasks(this.state.state);
  };
  render() {
    return (
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        <TouchableOpacity onPress={() => this.changeState()}>
          {this.state.state ? (
            <Icon name="square" style={[{fontSize: 30, marginRight: 20}]} />
          ) : (
            <Icon name="check-square" style={{fontSize: 30, marginRight: 20}} />
          )}
        </TouchableOpacity>
        <Text
          style={[
            {alignSelf: 'center', fontWeight: '700'},
            !this.state.state
              ? {textDecorationLine: 'line-through', color: 'gray'}
              : {textDecorationLine: 'none', color: 'black'},
          ]}>
          {this.state.content}
        </Text>
      </View>
    );
  }
}

export default TodoCheck;
