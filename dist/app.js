/* global Ember */
var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
  this.route('credits', {path: 'thanks'});
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: '/images/logo.png',
  time: function() {
    return (new Date()).toDateString()
  }.property()
});

var isClosed = function(date) {
  var day = date.getDay();
  var sunday = 0;
  return day === sunday;
};

App.AboutController = Ember.Controller.extend({
  contactName: 'Mr Foo',
  avatar: 'images/avatar.jpg',
  openStatus: function() {
    var today = new Date();
    if (isClosed(today)) {
      return 'closed';
    } else {
      return 'open';
    }
  }.property()
});

