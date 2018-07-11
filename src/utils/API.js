import axios from "axios";

// const APIKEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';

// const queryUrlBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKEY + '&q=';

export default {
  // nytSearch: function(queryTerms) {
  //   return axios.get(`${queryUrlBase}${queryTerms}`);
  // },
  getRequests: function() {
    return axios.get('/api/requests/');
  },
  deleteRequest: function(id) {
    return axios.delete('/api/requests/' + id);
  },
  saveRequest: function(requestData) {
    return axios.post('/api/requests' + requestData);
  }
};