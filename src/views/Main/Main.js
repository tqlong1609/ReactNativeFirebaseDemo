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
import {OverLayLoading} from '../../containers/OverlayLoading';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: '',
      modalVisible: false,
      isLoading: false,
      errorMessage: '',
    };
  }
  static getDerivedStateFromProps(_props, _state) {
    if (_props.isLoad || _props.isSuccess) {
      _props.onLoad(_props.uid);
      _props.resetData();
      return {data: _props.arrData, error: _props.error, isLoading: true};
    }
    return {data: _props.arrData, error: _props.error};
  }

  componentDidMount() {
    // this.props.onLoad(this.props.uid);
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoading) {
      this.setState({isLoading: false, errorMessage: ''});
    }
  }

  loadData = () => {
    this.setState({isLoading: true, error: ''});
    // context.props.resetData();
    this.props.onLoad(this.props.uid);
  };

  render() {
    const {t, tReady} = this.props;
    return (
      <View style={{flex: 1}}>
        {this.state.isLoading && <OverLayLoading />}
        <ScrollView style={{flex: 1}}>
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
              <TodoList
                idDelete={item.id}
                uid={this.props.uid}
                name={item.data.listName}
                color={item.data.backgroundColor}
                todos={item.data.listTodo}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
export default connect(
  MainController.mapStateToProps,
  MainController.mapDispatchToProps,
)(withTranslation()(Main));
