import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {withTranslation} from 'react-i18next';

import Icon from 'react-native-vector-icons/FontAwesome5';

export class TodoList extends Component {
  render() {
    const {t, tReady} = this.props;
    const completedCount = this.props.todos.filter((todo) => todo.isCheck)
      .length;
    const remainingCount = this.props.todos.length - completedCount;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: this.props.color,
          },
        ]}>
        <TouchableOpacity>
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
      </View>
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
export default withTranslation()(TodoList);
