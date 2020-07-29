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
import Controller from './AddTodoList.controller';
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
      dataTodos: [],
      todo: '',
    };
  }

  componentDidMount() {
    Controller.updateCountTasks(this);
  }
  updateIsCheckItem = (id, value) => {
    let dataTodosNew = this.state.dataTodos;
    dataTodosNew.forEach((element) => {
      if (element.id === id) {
        element.isCheck = value;
      }
    });
    const isCheckCount = Controller.countIsCheck(this.state.dataTodos);
    this.setState({dataTodos: dataTodosNew, completedCount: isCheckCount});
  };
  handleDeleteTask = (itemId) => {
    let {dataTodos} = this.state;
    dataTodos = dataTodos.filter((item) => item.id !== itemId);
    const countIsCheck = Controller.countIsCheck(dataTodos);
    this.setState({dataTodos: dataTodos, completedCount: countIsCheck});
  };
  renderItem(item) {
    return (
      <TodoCheck
        id={item.id}
        stateCheck={item.isCheck}
        content={item.content}
        updateIsCheckItem={this.updateIsCheckItem}
        handleDeleteTask={this.handleDeleteTask}
        backgroundColor={this.props.backgroundColor}
      />
    );
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
              {this.state.completedCount} of {this.state.dataTodos.length} tasks
            </Text>
          </View>
          <FlatList
            style={styles.flatTodo}
            data={this.state.dataTodos}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => this.renderItem(item)}
          />
          <View style={styles.containerAddTodo}>
            <TextInput
              value={this.state.todo}
              onChangeText={(todo) => this.setState({todo})}
              style={[
                styles.txtAddTodo,
                {borderColor: this.props.backgroundColor},
              ]}
            />
            <TouchableOpacity
              onPress={() => Controller.addTodo(this)}
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
