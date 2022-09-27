export const API_STATUS = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  PRECONDITION_FAILED: 412,
  INTERNAL_SERVER_ERROR: 500
};

export const API_HEADERS = {
  ACCEPT_HEADER: 'Accept',
  CONTENT_TYPE_HEADER: 'Content-Type',
  AUTHORIZATION_HEADER: 'Authorization',
  BEARER: 'Bearer',
  API_KEY: 'apikey',
  CACHE_CONTROL: 'Cache-Control',
  NO_CACHE: 'no-cache',
  APPLICATION_JSON: 'application/json',
  // ToDo: Update this fields with your app ID
  APP_NAME_HEADER: 'appName',
  APP_NAME: 'MYAPP'
};

export const ERROR_MESSAGES = {
  INVALID_TOKEN: 'invalid_token'
};
