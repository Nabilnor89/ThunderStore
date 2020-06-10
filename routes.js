Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/news', function () {
  this.render('news');
});
Router.route('/Advertisement', function () {
  this.render('Advertisement');
});
Router.route('/Blog', function () {
  this.render('Blog');
});