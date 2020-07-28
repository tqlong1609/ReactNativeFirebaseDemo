import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import MainStyle from './Main.Styles';
import MainController from './Main.Controller';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import TodoList from '../../containers/TodoList';
import {withTranslation} from 'react-i18next';
import AddList from '../AddList/AddList';
const data = [
  {
    id: '1',
    name: 'Plan a trip',
    color: '#00CCCC',
    todos: [{title: 'Book a flight', completed: false}],
  },
  {
    id: '2',
    name: 'Plan a trip 1',
    color: '#9933FF',
    todos: [
      {title: 'Book a flight 1', completed: false},
      {title: 'Book a flight 2', completed: true},
    ],
  },
  {
    id: '3',

    name: 'Plan a trip 2',
    color: '#CC66FF',
    todos: [
      {title: 'Book a flight 2', completed: false},
      {title: 'Book a flight 3', completed: true},
      {title: 'Book a flight 4', completed: false},
      {title: 'Book a flight 5', completed: true},
    ],
  },
  {
    id: '4',
    name: 'Plan a trip 2',
    color: '#FF6666',
    todos: [
      {title: 'Book a flight 2', completed: false},
      {title: 'Book a flight 3', completed: true},
      {title: 'Book a flight 4', completed: false},
      {title: 'Book a flight 5', completed: true},
    ],
  },
  {
    id: '5',

    name: 'Plan a trip 2',
    color: '#3366FF',
    todos: [
      {title: 'Book a flight 2', completed: false},
      {title: 'Book a flight 3', completed: true},
      {title: 'Book a flight 4', completed: false},
      {title: 'Book a flight 5', completed: true},
    ],
  },
  {
    id: '6',

    name: 'Plan a trip 2',
    color: '#FF6600',
    todos: [
      {title: 'Book a flight 2', completed: false},
      {title: 'Book a flight 3', completed: true},
      {title: 'Book a flight 4', completed: true},
      {title: 'Book a flight 5', completed: true},
    ],
  },
];

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      error: '',
      modalVisible: false,
    };
  }

  render() {
    const {t, tReady} = this.props;
    return (
      <ScrollView>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          transparent={false}
          onRequestClose={() => console.log('modal close')}>
          <AddList
            onCloseModal={() =>
              this.setState({modalVisible: !this.state.modalVisible})
            }
          />
        </Modal>
        <LottieView
          style={MainStyle.animationView}
          source={require('../../assets/json/8216-working-room.json')}
          autoPlay
          loop
        />
        <View style={MainStyle.containerTitle}>
          <Text style={MainStyle.txtTodo}>
            Todo <Text style={MainStyle.txtLists}>Lists</Text>
          </Text>
          <TouchableOpacity
            style={MainStyle.btnAddList}
            onPress={() =>
              this.setState({modalVisible: !this.state.modalVisible})
            }>
            <Icon name="plus-circle" style={MainStyle.iconAdd} />
            <Text style={MainStyle.txtAddList}>{t('Add list')}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={MainStyle.flatList}
          data={this.state.data}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TodoList name={item.name} color={item.color} todos={item.todos} />
          )}
        />
      </ScrollView>
    );
  }
}
export default connect(
  MainController.mapStateToProps,
  MainController.mapDispatchToProps,
)(withTranslation()(Main));
