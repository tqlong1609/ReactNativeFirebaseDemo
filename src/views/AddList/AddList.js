import React, {Component} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Const from '../../lib/const/Color.const';
import stylesAddList from './AddList.styles';
import {withTranslation} from 'react-i18next';
import LottieView from 'lottie-react-native';
import AddTodoList from '../AddTodoList/AddTodoList';
export class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: Const.COLOR_LIST_THEME_TODO[0],
      modalVisible: false,
    };
  }
  renderColor = () => {
    return Const.COLOR_LIST_THEME_TODO.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          onPress={() => this.setState({backgroundColor: color})}
          style={[
            {
              backgroundColor: color,
            },
            stylesAddList.btnColorChange,
          ]}
        />
      );
    });
  };
  changeModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  render = () => {
    const {t, tReady} = this.props;
    return (
      <View style={stylesAddList.container}>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          transparent={false}
          onRequestClose={() => console.log('modal close')}>
          <AddTodoList onCloseModal={() => this.changeModalVisible()}/>
        </Modal>
        <ScrollView style={stylesAddList.containerScrollView}>
          <LottieView
            style={stylesAddList.animateWork}
            source={require('../../assets/json/25216-team-work.json')}
            autoPlay
            loop
          />
          <View style={stylesAddList.containerContent}>
            <Text style={stylesAddList.title}>{t('Create Todo List')}</Text>
            <TextInput
              style={stylesAddList.inputListName}
              placeholder={t('List Name ?')}
            />
            <View style={stylesAddList.containerListBtnColor}>
              {this.renderColor()}
            </View>
            <TouchableOpacity
              onPress={() => this.changeModalVisible()}
              style={[
                {
                  backgroundColor: this.state.backgroundColor,
                },
                stylesAddList.btnCreate,
              ]}>
              <Text style={stylesAddList.txtCreate}>{t('Create')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.props.onCloseModal()}
          style={stylesAddList.btnClose}>
          <Icon name="times" style={stylesAddList.iconClose} />
        </TouchableOpacity>
      </View>
    );
  };
}

export default withTranslation()(AddList);
