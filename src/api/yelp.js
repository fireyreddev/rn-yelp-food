import axios from 'axios';
import {getApiKey} from '../../env';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${getApiKey()}`
  }
});