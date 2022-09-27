import Reactotron, { trackGlobalErrors, openInEditor } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronApisauce from 'reactotron-apisauce';

import { Tron } from '@interfaces/reactotron';

declare global {
  interface Console {
    tron: Tron;
  }
}

if (__DEV__) {
  Reactotron.configure({ name: 'Initial Application', host: 'localhost' })
    .useReactNative()
    .use(trackGlobalErrors({}))
    .use(openInEditor())
    .use(reactotronRedux())
    .use(reactotronApisauce())
    .connect();

  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}

export default Reactotron;
