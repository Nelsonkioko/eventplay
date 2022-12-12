//Where you set up the base url and response type for second server using the axio package
import axios from 'axios';

const SecondServer = axios.create({
  baseURL: 'http://eventplay.io/api', //dummy api
  responseType: 'json',
  withCredentials: true,
});

export default SecondServer;
