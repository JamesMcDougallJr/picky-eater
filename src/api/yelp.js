import axios from 'axios';
const bearer = 'Bearer lhSzuTL_SyQuAqc7fy0fnChhomc_6JBuRQQjEUyyePOTUUORDxpE3O0SO3StUXCBI7uUf24FasdclIt8Zi4KVc8sbOoZNjv_oNYw_f0x3bi3gooevnNr_4wpjJIZYXYx';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: bearer
  }
});