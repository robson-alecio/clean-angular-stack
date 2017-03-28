(function () {
  'use strict'

  angular
    .module('CleanStack', [])
    .controller('CleanStackController', CleanStackController)

  function CleanStackController() {
    var vm = this;
    vm.process = process;

    function process() {
      var processedStack = angular.copy(vm.rawStack);

      while (processedStack.indexOf('%') > 0) {
        processedStack = clean(processedStack);
      }

      vm.processedStack = processedStack;
    }

    function clean(stack) {
      var result = stack;
      result = result.replace(/%20/g, ' ');
      result = result.replace(/%5B/g, '[');
      result = result.replace(/%5D/g, ']');
      result = result.replace(/%24/g, '$');
      result = result.replace(/%3A/g, ':');
      result = result.replace(/%2F/g, '/');
      result = result.replace(/%0A/g, '\n');
      result = result.replace(/%25/g, '%');
      result = result.replace(/%3F/g, '?');
      result = result.replace(/%26/g, '&');
      result = result.replace(/%3D/g, '=');

      return result;
    }
  }
}());