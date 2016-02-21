let $ = require('jquery');
let _ = require('lodash');

'use strict';
$(document).ready(function(){
  var mydiv = $('*[data-library-brain]')[0];
  var conf = $(mydiv).data('libraryBrain');
  console.log(conf);
});
