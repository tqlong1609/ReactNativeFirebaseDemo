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

export class AddTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedCount: 0,
      remainingCount: 0,
      dataTodos: [
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
      ],
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerContent}>
          <View style={styles.containerHeader}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.containerTitle}>Plan a Trip</Text>
              <LottieView
                style={styles.animBrain}
                source={require('../../assets/json/21277-brain-work-smart-not-hard.json')}
                autoPlay
                loop
              />
            </View>
            <Text style={styles.txtCount}>
              {this.state.completedCount} of {this.state.remainingCount} tasks
            </Text>
          </View>
          <FlatList
            style={styles.flatTodo}
            data={this.state.dataTodos}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TodoCheck state={item.isCheck} content={item.content} />
            )}
          />
          <View style={styles.containerAddTodo}>
            <TextInput style={styles.txtAddTodo} />
            <TouchableOpacity style={styles.btnAdd}>
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
