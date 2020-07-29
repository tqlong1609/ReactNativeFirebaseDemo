import {PanResponder, Dimensions} from 'react-native';
class HandleTodoCheck {
  handleAnimationDelete = (context) => {
    context.panResponder = PanResponder.create({
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
        this.onMoveX(context, gestureState.dx);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        this.onPanResponderRelease(context, gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.onPanResponderRelease(context, gestureState);
      },
    });
  };
  onPanResponderRelease = (context, gestureState) => {
    if (Math.abs(gestureState.dx) < Dimensions.get('window').width / 2) {
      context.refs['task'].setNativeProps({
        style: {transform: [{translateX: 0}]},
      });
    }
    if (Math.abs(gestureState.dx) >= Dimensions.get('window').width / 2) {
      context.refs['task'].setNativeProps({
        style: {transform: [{translateX: Dimensions.get('window').width}]},
      });
      context.props.handleDeleteTask(context.props.id);
    }
  };
  onMoveX = (context, dx) => {
    context.refs['task'].setNativeProps({
      style: {transform: [{translateX: dx}]},
    });
  };
  getPropsToState = (_props, _state) => {
    if (_state.stateCheck === null || _state.content === null) {
      return {
        stateCheck: _props.stateCheck,
        content: _props.content,
        id: _props.id,
      };
    } else {
      return null;
    }
  };

  checkUpdateRender = (context, nextProps, nextStates) => {
    if (nextStates.stateCheck === context.state.stateCheck) {
      return false;
    }
    return true;
  };

  changeState = (context) => {
    context.props.updateIsCheckItem(
      context.state.id,
      !context.state.stateCheck,
    );
    context.setState({stateCheck: !context.state.stateCheck});
  };
}

export default new HandleTodoCheck();
