(function() {

    'use strict';

    angular.module('app').directive('focus', [function() {

        return {
            restrict: "A",
            scope: false,

         link: function(scope, element, attributes) {


                // set focus whenever a task is to be created.
             scope.$watch('addNewTaskActive',function(newVal,oldVal){
                     
                    if(newVal){
                         setTimeout(function(){
                             element[0].focus();     
                         }) 
                    }
                });      

        }
    }

    }]);
})();