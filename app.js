'use strict';
const $ = require('jquery');
const dplaKey = require('./dpla-api-key.js');
/* dpla-api-key.js contains: `module.exports = { 'api_key': '...' };` */
const librain = require('./librain.js');
$(document).ready(function(){
  let mydiv = $('*[data-librain]')[0];
  let conf = $(mydiv).data('librain');
  $.extend(conf, dplaKey);
  $.ajax({
    url: 'http://api.dp.la/v2/items',
    type: 'GET',
    data: conf,
    success: librain.success,
    error: librain.error
  });
});
