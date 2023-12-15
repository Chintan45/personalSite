const baseUrls = (process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEV_CONTENT_API : process.env.REACT_APP_PROD_CONTENT_API;

export const API = baseUrls + '/api';

