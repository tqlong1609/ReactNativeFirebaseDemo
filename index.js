/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ProviderApp from './src/store';

AppRegistry.registerComponent(appName, () => ProviderApp);
