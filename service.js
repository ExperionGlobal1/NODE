const axios = require('axios');
const fs = require('fs')

exports.getData = function(page){
  axios.get('https://reqres.in/api/users?page=' +page)
  .then(function(response){
    var text = JSON.stringify(response.data);
    fs.writeFileSync(`${page}.json`,text);
  });
}