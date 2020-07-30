class HandleAddList {
  changeModalVisible = (context) => {
    context.setState({modalVisible: !context.state.modalVisible});
  };
}

export default new HandleAddList();
