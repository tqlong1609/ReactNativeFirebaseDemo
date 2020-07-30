import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {withTranslation} from 'react-i18next';
import Controller from './TodoList.controller';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import AddTodoList from '../views/AddTodoList/AddTodoList';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  deleteTodo = () => {
    this.props.onDelete(this.props.uid, this.props.idChoose);
  };
  changeModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  render() {
    const {t, tReady} = this.props;
    const completedCount = this.props.todos.filter((todo) => todo.isCheck)
      .length;
    const remainingCount = this.props.todos.length - completedCount;
    return (
      <TouchableOpacity
        onPress={() => this.changeModalVisible()}
        style={[
          styles.container,
          {
            backgroundColor: this.props.color,
          },
        ]}>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          transparent={false}
          onRequestClose={() => console.log('modal close')}>
          <AddTodoList
            listName={this.props.name}
            data={[{content: 'A', id: '1596127222425', isCheck: true}]}
            backgroundColor={this.props.color}
            idChoose={this.props.idChoose}
            listTodo={this.props.listTodo}
            isEdit={true}
            onCloseModal={() => this.changeModalVisible()}
          />
        </Modal>
        <TouchableOpacity onPressIn={() => this.deleteTodo()}>
          <Icon name="times" style={styles.iconDelete} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>
          {this.props.name}
        </Text>
        <View style={styles.containerContent}>
          <Text style={styles.count}>{remainingCount}</Text>
          <Text style={styles.txtContent}>{t('Remaining')}</Text>
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.txtContent}>{t('Completed')}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {width: 200, marginHorizontal: 12, borderRadius: 6},
  iconDelete: {fontSize: 30, paddingTop: 5, paddingLeft: 5, color: '#CC0000'},
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
  },
  containerContent: {
    alignItems: 'center',
    marginTop: 5,
  },
  count: {
    fontSize: 35,
    color: 'white',
  },
  txtContent: {
    fontWeight: '700',
    color: 'white',
    fontSize: 12,
  },
});
export default connect(
  Controller.mapStateToProps,
  Controller.mapDispatchToProps,
)(withTranslation()(TodoList));
