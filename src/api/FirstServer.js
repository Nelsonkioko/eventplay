//Where you set up the base url and response type for first server using the axio package
import axios from 'axios';

const FirstServer = axios.create({
  baseURL: 'http://eventplayauthntication.io/api', //just a dummy api
  responseType: 'json',
  withCredentials: true,
});

export default FirstServer;
