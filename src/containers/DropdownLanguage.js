import {Text, View, Picker} from 'react-native';

export default class DropdownLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageSelected: 'en',
    };
  }
  onChangeLanguage(languageSelected) {
    this.setState({
      languageSelected,
    });
    //this.props.setLanguageUser(value)
    I18n.locale = languageSelected;
    // _storeData(USER_LANGUAGE,value);
  }
  render() {
    return (
      <View>
        {/* <Text style={{width: 70}}>{I18n.t('hompage.language')}: </Text> */}
        <Picker
          mode="dropdown"
          iosHeader={''}
          style={{width: undefined, height: 40}}
          selectedValue={this.state.languageSelected}
          onValueChange={() => this.onChangeLanguage}>
          {listLanguage.map((languageItem, i) => {
            return (
              <Picker.Item
                key={i}
                value={languageItem.key}
                label={languageItem.label}
              />
            );
          })}
        </Picker>
      </View>
    );
  }
}
