import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './AddTodoList.styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TodoCheck from '../../containers/TodoCheck';
import {TextInput} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
// import TaskTodo from '../../containers/TaskTodo'
const dataTodo = [
  {id: '1', content: 'Book Flight', isCheck: false},
  {id: '2', content: 'Book Flight 1', isCheck: true},
  {id: '3', content: 'Book Flight 2', isCheck: false},
  {id: '4', content: 'Book Flight', isCheck: false},
  {id: '5', content: 'Book Flight 1', isCheck: true},
  {id: '6', content: 'Book Flight 2', isCheck: false},
  {id: '7', content: 'Book Flight', isCheck: false},
  {id: '8', content: 'Book Flight 1', isCheck: true},
  {id: '9', content: 'Book Flight 2', isCheck: false},
  {id: '10', content: 'Book Flight', isCheck: false},
  {id: '11', content: 'Book Flight 1', isCheck: true},
  {id: '12', content: 'Book Flight 2', isCheck: false},
  {id: '13', content: 'Book Flight', isCheck: false},
  {id: '14', content: 'Book Flight 1', isCheck: true},
  {id: '15', content: 'Book Flight 2', isCheck: false},
  {id: '16', content: 'Book Flight', isCheck: false},
  {id: '17', content: 'Book Flight 1', isCheck: true},
  {id: '18', content: 'Book Flight 2', isCheck: false},
];
export class AddTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedCount: 0,
      remainingCount: 0,
      dataTodos: dataTodo,
    };
  }
  updateCountTasks = (state) => {
    switch (state) {
      case null:
        const completedCount = this.state.dataTodos.filter(
          (todo) => !todo.isCheck,
        ).length;
        const remainingCount = this.state.dataTodos.length;
        this.setState({
          completedCount: completedCount,
          remainingCount: remainingCount,
        });
        break;
      case false:
        this.setState({
          completedCount: this.state.completedCount - 1,
        });
        break;
      case true:
        this.setState({
          completedCount: this.state.completedCount + 1,
        });
        break;
    }
  };
  componentDidMount() {
    this.updateCountTasks(null);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerContent}>
          <View style={styles.containerHeader}>
            <View style={styles.containerTitle}>
              <Text
                style={[styles.txtTitle, {color: this.props.backgroundColor}]}>
                {this.props.listName}
              </Text>
              <LottieView
                style={styles.animBrain}
                source={require('../../assets/json/21277-brain-work-smart-not-hard.json')}
                autoPlay
                loop
              />
            </View>
            <Text
              style={[
                styles.txtCount,
                {
                  borderColor: this.props.backgroundColor,
                  color: this.props.backgroundColor,
                },
              ]}>
              {this.state.completedCount} of {this.state.remainingCount} tasks
            </Text>
          </View>
          <FlatList
            style={styles.flatTodo}
            data={this.state.dataTodos}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TodoCheck
                state={item.isCheck}
                content={item.content}
                parrenFlatlist={this}
              />
            )}
          />
          <View style={styles.containerAddTodo}>
            <TextInput
              style={[
                styles.txtAddTodo,
                {borderColor: this.props.backgroundColor},
              ]}
            />
            <TouchableOpacity
              style={[
                styles.btnAdd,
                {backgroundColor: this.props.backgroundColor},
              ]}>
              <Icon name="plus" style={{fontSize: 10}} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.onCloseModal()}
          style={styles.btnClose}>
          <Icon name="times" style={styles.iconClose} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default AddTodoList;
