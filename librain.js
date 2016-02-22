'use strict';
const $ = require('jquery');
const Handlebars = require('handlebars');

const cards_template  = $("*[data-librain-template=cards]").html();
const cards = Handlebars.compile(cards_template);

module.exports.success = (result) => {
  if (result.docs.length == 0) { return; }
  let mydiv = $('*[data-librain]')[0];
  $(mydiv).append(cards(result));
}

module.exports.error = (xhr) => xhr;
