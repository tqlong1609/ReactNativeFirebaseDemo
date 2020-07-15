import {Platform, InteractionManager} from 'react-native';
import firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';
// import {FilebaseConst} from '../lib/cons';
import Const from '../lib/const/Filebase.const';

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class HandleAddItem {
  uploadContentToFireBase = (content) => {
    console.log(content);
    firebase.database().ref(Const.NameRoot).push(content);
  };
  uploadImage = (uri, mime = 'image/jpeg', name) => {
    return new Promise((resolve, reject) => {
      let imgUri = uri;
      let uploadBlob = null;
      const uploadUri =
        Platform.OS === 'ios' ? imgUri.replace('file://', '') : imgUri;
      const sessionId = new Date().getTime();
      const imageRef = firebase.storage().ref('images').child(`${sessionId}`);

      fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, {type: `${mime};BASE64`});
        })
        .then((blob) => {
          uploadBlob = blob;
          return imageRef.put(blob, {contentType: mime, name: name});
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then((url) => {
          resolve(url);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  handleWarningSettingtimmer = () => {
    if (Platform.OS === 'android') {
      // Work around issue `Setting a timer for long time`
      // see: https://github.com/firebase/firebase-js-sdk/issues/97
      const timerFix = {};
      const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
          InteractionManager.runAfterInteractions(() => {
            if (!timerFix[id]) {
              return;
            }
            delete timerFix[id];
            fn(...args);
          });
          return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
      };

      global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
          const ttl = Date.now() + time;
          const id = '_lt_' + Object.keys(timerFix).length;
          runTask(id, fn, ttl, args);
          return id;
        }
        return _setTimeout(fn, time, ...args);
      };

      global.clearTimeout = (id) => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
          _clearTimeout(timerFix[id]);
          delete timerFix[id];
          return;
        }
        _clearTimeout(id);
      };
    }
  };
}
const handle = new HandleAddItem();
export default handle;
