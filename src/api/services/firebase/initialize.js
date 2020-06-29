import firebase from 'firebase';
import Config from '../../../lib/configs/firebaseConfig';

firebase.initializeApp(Config.FilebaseConfig);

export {firebase};
