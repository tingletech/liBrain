'use strict';
const $ = require('jquery');

// var card = _.template('<p>hello <%= isShownAt %>!</p>');

const card = (d) => $(`
  <p><a href="${d.isShownAt}"><img src="${d.object}"/>${ d.sourceResource.title }</a>
</p>`);

module.exports.success = (result) => {
  let mydiv = $('*[data-librain]')[0];
  for (let value of result.docs) {
    $(mydiv).append(card(value));
  }
}

module.exports.error = (xhr) => xhr;
