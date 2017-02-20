// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('center');
});


app.controller('main', function($scope){
  
  var opcion = 'A';

  $scope.result=90;

  $scope.cantidad=100; // cantidad
  $scope.porcent=10;  // porcentaje


  $scope.data = {
    selected: 'A'
  };

  $scope.clientSideList = [
      { text: "Restar el porcentaje a la cantidad", value: "A" },
      { text: "Sumar el porcentaje a la cantidad", value: "B" }
  ];


 

  $scope.opcion = function (value) {
        opcion = value;
        $scope.calcular();
  };


  $scope.calcular = function () {
      if(opcion === 'A'){
        var operation1 = $scope.porcent / 100 ;
        var operation2 = (1 - operation1);
        $scope.result = $scope.cantidad * operation2;
      }
      if(opcion === 'B'){
        var operation1 = ($scope.cantidad * $scope.porcent) / 100 ;
        $scope.result = operation1 + $scope.cantidad;
      }
  };

});
