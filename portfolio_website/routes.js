Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/services', function () {
  this.render('services');
});

Router.route('/portfolio', function () {
  this.render('portfolio');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/blog', function () {
  this.render('blog');
});