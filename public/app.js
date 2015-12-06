// Name our angular app
angular.module('firstApp', [])

.controller('mainController', function($scope, $http) {

  // Bind this to vm (view-model)
  var vm = this;

  // Define variables and objects on this
  // This lets them be available to our views

  // Information that comes from our form
  vm.libData = {};

  vm.addLib = function() {
    // Add a lib to the database
    $http.post('http://localhost:8080/lib', {
      'userName' : vm.libData.userName,
      'lib1' : vm.libData.lib1,
      'lib2' : vm.libData.lib2,
      'lib3' : vm.libData.lib3,
      'lib4' : vm.libData.lib4,
      'lib5' : vm.libData.lib5
    });

    // After our computer has been added, clear the form
    vm.libData = {};
  };
});
