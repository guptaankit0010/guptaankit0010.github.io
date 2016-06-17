(function() {

    'use strict';

    angular.module('app').directive('tasks', [function() {
        return {
            restrict: "E",
            scope: false,
            templateUrl: '../app/shared/directives/tasks/tasks.html',

            link: function(scope, element, attributes) {

                // create a tasks array, in the selected list {selected list is in scope}
                scope.list.tasks = [];
                scope.addNewTaskActive = false;

                // toggle between showing/hiding add new task box.
                scope.toggleAddTaskItem = function() {

                    scope.addNewTaskActive = !scope.addNewTaskActive;                    
                }

                //can add a task to a task list.
                //params : evt : handles the keypress events.
                scope.addTaskItem = function(evt) {

                    if (evt && evt.keyCode !== 13) {
                        return false;
                    }

                    if (scope.taskTitle) {
                        var taskObject = {
                            parentList: scope.list.title,
                            title: scope.taskTitle,
                            description: ''
                        }

                        scope.list.tasks.push(taskObject);
                        scope.taskTitle = '';
                    }                
                }


                // opens modal on tasks click.
                // params : selectedTask : selected task data.
                scope.showModal = function(selectedTask) {

                    scope.modalOpen(selectedTask);
                }

                // UI sortable options
                scope.sortableOptionsTasks = {
                    placeholder: "item-placeholder",
                    connectWith: ".tasks",
                    items: "> .task-item"

                };


                // update the drop list for a particular list of tasks.
                if (scope.list.tasks.length === 1) {

                    scope.$watchCollection('list.tasks', function() {
                        scope.dropTarget = scope.list;
                    });
                }

            }

        };

    }]);
})();