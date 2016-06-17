(function() {

    'use strict';

    angular.module('app').directive('list', [function() {

        return {

            restrict: "E",
            scope: false,
            templateUrl: '../app/shared/directives/list/list.html',
            link: function(scope, element, attributes) {

                
                scope.lists = [];
                scope.addNewListActive = false;

                // toggle between showing/hiding add new tlist box
                scope.toggleAddListItem = function() {

                    scope.addNewListActive = !scope.addNewListActive;
                }

                //can add a list to a task list.
                //params : evt : handles the keypress events.
                scope.addListItem = function(evt) {

                    if (evt && evt.keyCode !== 13) {
                        return false;
                    }


                    if (scope.listTitle) {
                        var listObject = {
                            title: scope.listTitle,
                            tasks: 0
                        }

                        scope.lists.push(listObject);

                        scope.listTitle = '';
                    }
                }

                // can delete the list
                //params : selectedIndex : index of the list to be deleted.
                scope.deleteListItem = function(selectedIndex) {

                    console.log(selectedIndex);
                    scope.lists.splice(selectedIndex, 1);

                }

                scope.sortableOptionsList = {
                    placeholder: "list-border",
                    'ui-floating': true
                };
            }

        }
    }]);
})();
