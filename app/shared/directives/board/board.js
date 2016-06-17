(function() {

    'use strict';

    angular.module('app').directive('board', [function() {

        return {

            restrict: "E",
            scope: {},
            templateUrl: '../app/shared/directives/board/board.html',
            link: function(scope, element, attributes) {
            }
        }
    }]);
})();
