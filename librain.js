'use strict';
const $ = require('jquery');
const Handlebars = require('handlebars');

const card_template  = $("*[data-librain-template=card]").html();
const card = Handlebars.compile(card_template);

module.exports.success = (result) => {
  let mydiv = $('*[data-librain]')[0];
  for (let value of result.docs) {
    console.log(value);
    $(mydiv).append(card(value));
  }
}

module.exports.error = (xhr) => xhr;
