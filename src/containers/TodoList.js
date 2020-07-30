//Todo: translate
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {withTranslation} from 'react-i18next';
import Controller from './TodoList.controller';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import AddTodoList from '../views/AddTodoList/AddTodoList';
import styles from './TodoList.styles';
export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    const {t, tReady} = this.props;
    const completedCount = this.props.todos.filter((todo) => todo.isCheck)
      .length;
    const remainingCount = this.props.todos.length - completedCount;
    return (
      <TouchableOpacity
        onPress={() => Controller.changeModalVisible(this)}
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
            onCloseModal={() => Controller.changeModalVisible(this)}
          />
        </Modal>
        <TouchableOpacity onPressIn={() => Controller.deleteTodo(this)}>
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

export default connect(
  Controller.mapStateToProps,
  Controller.mapDispatchToProps,
)(withTranslation()(TodoList));
