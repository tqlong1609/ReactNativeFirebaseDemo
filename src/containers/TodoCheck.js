import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TodoCheckController from './TodoCheck.controller';
import styles from './TodoCheck.styles';
export class TodoCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {stateCheck: null, content: null, id: null};
    TodoCheckController.handleAnimationDelete(this);
  }

  static getDerivedStateFromProps(_props, _state) {
    return TodoCheckController.getPropsToState(_props, _state);
  }

  shouldComponentUpdate(nextProps, nextStates) {
    return TodoCheckController.checkUpdateRender(this, nextProps, nextStates);
  }

  render() {
    return (
      <View>
        <View style={styles.containerTxtdelete}>
          <Text
            style={[
              styles.txtDelete,
              {
                backgroundColor: this.props.backgroundColor,
              },
            ]}>
            Delete
          </Text>
        </View>
        <Animated.View
          ref="task"
          style={styles.containerAnimated}
          {...this.panResponder.panHandlers}>
          <View style={styles.containerContentItem}>
            <TouchableOpacity
              onPress={() => TodoCheckController.changeState(this)}>
              {!this.state.stateCheck ? (
                <Icon name="square" style={styles.iconCheck} />
              ) : (
                <Icon name="check-square" style={styles.iconCheck} />
              )}
            </TouchableOpacity>
            <Text
              style={[
                styles.txtContent,
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
