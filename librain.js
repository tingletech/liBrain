'use strict';
const $ = require('jquery');
const _ = require('lodash/string');

// var card = _.template('<p>hello <%= isShownAt %>!</p>');

const card = (d) => $(`
  <p><a href="${d.isShownAt}"><img src="${d.object}"/>${ d.title }</a>
</p>`);

module.exports.success = (result) => {
  let mydiv = $('*[data-librain]')[0];
  for (let value of result.docs) {
    if (typeof value.sourceResource.title == 'string') {
        value.title = value.sourceResource.title;
    } else {
        value.title = value.sourceResource.title[0];
    }
    console.log(value);
    $(mydiv).append(card(value));
  }
}

module.exports.error = (xhr) => xhr;
