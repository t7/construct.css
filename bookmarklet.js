/*
  This is the boomarklet in the "GET TRASHY"
  link on this project's index.html page.

  It is minified there, so this file is just
  a way to clearly see what it is doing.
*/

(function (d) {
  var f = Array.prototype.forEach;
  var linkTags = d.querySelectorAll('[rel=\'stylesheet\']');
  var styleTags = d.querySelectorAll('style');

  f.call(linkTags, function (x) {
    x.rel = '';
  });

  f.call(styleTags, function (x) {
    x.innerHTML = '';
  });

  var newLink = d.createElement('link');

  newLink.rel = 'stylesheet';

  newLink.href =
    'https://t7.github.io/trashy.css/css/bookmarklet.css';

  d.head.appendChild(newLink);
})(document);
