var app = angular.module('resume-app', ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('main', {
    url: '',
    templateUrl: 'partials/main.html'
    // controller: "KittensController"
  })
})
