var app = angular.module('resume-app', ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '',
    templateUrl: 'partials/home.html'
    // controller: "HomeController"
  })
  .state('editProfile', {
    url: '/edit',
    templateUrl: 'partials/home.html'
    // controller: "HomeController"
  })
})
