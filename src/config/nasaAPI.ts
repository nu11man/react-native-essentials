import { create } from 'apisauce';
import Config from 'react-native-config';
import { API_HEADERS } from '@constants/api';

const api = create({
  baseURL: Config.NASA_BASE_URL,
  timeout: 5000
  // headers: {
  // [API_HEADERS.APP_NAME_HEADER]: API_HEADERS.APP_NAME
  // }
});

export const setAuthorizationApiHeader = (token: string) => {
  api.setHeader(API_HEADERS.AUTHORIZATION_HEADER, `${API_HEADERS.BEARER} ${token}`);
};

export default api;
