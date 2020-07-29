import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('window');
export class TodoCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {stateCheck: null, content: null, id: null};

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        const {dx, dy} = gestureState;
        if (dx > 2 || dx < -2 || dy > 5 || dy < -5) {
          return true;
        } else {
          return false;
        }
      },
      onPanResponderMove: (evt, gestureState) => {
        this.onMoveX(gestureState.dx);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        this.onPanResponderRelease(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.onPanResponderRelease(gestureState);
      },
    });
  }
  onPanResponderRelease = (gestureState) => {
    if (Math.abs(gestureState.dx) < Dimensions.get('window').width / 2) {
      this.refs['task'].setNativeProps({style: {transform: [{translateX: 0}]}});
    }
    if (Math.abs(gestureState.dx) >= Dimensions.get('window').width / 2) {
      this.refs['task'].setNativeProps({
        style: {transform: [{translateX: Dimensions.get('window').width}]},
      });
      this.props.handleDeleteTask(this.props.id);
    }
  };
  onMoveX = (dx) => {
    this.refs['task'].setNativeProps({
      style: {transform: [{translateX: dx}]},
    });
  };
  static getDerivedStateFromProps(_props, _state) {
    if (_state.stateCheck === null || _state.content === null) {
      return {
        stateCheck: _props.stateCheck,
        content: _props.content,
        id: _props.id,
      };
    } else {
      return null;
    }
  }

  shouldComponentUpdate(nextProps, nextStates) {
    if (nextStates.stateCheck === this.state.stateCheck) {
      return false;
    }
    return true;
  }

  changeState = () => {
    this.props.updateIsCheckItem(this.state.id, !this.state.stateCheck);
    this.setState({stateCheck: !this.state.stateCheck});
  };
  render() {
    return (
      <View>
        <View
          style={[
            {
              position: 'absolute',
              width: '100%',
              height: '100%',
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
            },
          ]}>
          <Text
            style={[
              {
                fontSize: 15,
                marginLeft: 5,
                fontWeight:'700',
                width: '100%',
                color: 'white',
                backgroundColor: this.props.backgroundColor,
              },
            ]}>
            Delete
          </Text>
        </View>
        <Animated.View
          ref="task"
          style={{flexDirection: 'row', backgroundColor: 'white'}}
          {...this.panResponder.panHandlers}>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <TouchableOpacity onPress={() => this.changeState()}>
              {!this.state.stateCheck ? (
                <Icon name="square" style={[{fontSize: 30, marginRight: 20}]} />
              ) : (
                <Icon
                  name="check-square"
                  style={{fontSize: 30, marginRight: 20}}
                />
              )}
            </TouchableOpacity>
            <Text
              style={[
                {alignSelf: 'center', fontWeight: '700'},
                this.state.stateCheck
                  ? {textDecorationLine: 'line-through', color: 'gray'}
                  : {textDecorationLine: 'none', color: 'black'},
              ]}>
              {this.state.content}
            </Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default TodoCheck;
