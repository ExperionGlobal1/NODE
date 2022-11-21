const service = require('./service')
var page = '1';
service.getData(page);

const axios = require('axios');
const fs = require('fs')