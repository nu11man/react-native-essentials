import Config from 'react-native-config';

import api from '@config/nasaAPI';
import Reactotron from '@config/reactotronConfig';

export const SetupApi = () => {
  api.addMonitor((Reactotron as unknown as { apisauce: any }).apisauce);
  api.addRequestTransform(request => {
    request.params['api_key'] = Config.NASA_API_KEY;
  });
};
