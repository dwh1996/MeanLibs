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
    $http.post('http://lit-reef-4303.herokuapp.com/lib', {
      'userName' : vm.libData.userName,
      'lib1' : vm.libData.lib1,
      'lib2' : vm.libData.lib2,
      'lib3' : vm.libData.lib3,
      'lib4' : vm.libData.lib4,
      'lib5' : vm.libData.lib5
    });

    vm.libData = {'userName' : vm.libData.userName};
  };

  vm.getLib = function() {
    $http.get('http://lit-reef-4303.herokuapp.com/lib/' + vm.libData.userName)
    .then(function(result) {
      vm.libData.userName = result.data.userName;
      vm.libData.lib1 = result.data.lib1;
      vm.libData.lib2 = result.data.lib2;
      vm.libData.lib3 = result.data.lib3;
      vm.libData.lib4 = result.data.lib4;
      vm.libData.lib5 = result.data.lib5;
    });
  };
});
