(function() {

    'use strict';

    angular.module('app').directive('taskModal', [function() {
        
        return {
            restrict: "E",
            scope: false,
            templateUrl: '../app/shared/directives/modal/modal.html',

            link: function(scope, element, attributes) {


                // open model for a selected task.
                // params: selectedTask : selected task data being passed from tasks on click.
                scope.modalOpen = function(selectedTask) {
                    scope.isModelOpen = true;

                    // set the selected task on scope, for addition of description or comments
                    // in the same object.
                    scope.selectedTask = selectedTask;
                }

                scope.modalClose = function() {
                    scope.isModelOpen = false;
                }

                //add commnent to existing task list.
                scope.addComment = function() {
                    
                    var comment = {
                        "description": scope.commentInput,
                        "time": new Date()
                    }
                    
                    // push the last added comment to the top of the list.
                    scope.selectedTask.comments.unshift(comment);

                    // clear ng model.
                    scope.commentInput = '';
                }

                scope.toggleEditTaskDescription = function() {

                    scope.ifDescriptionBoxOpen = !scope.ifDescriptionBoxOpen;

                    // Update the display description action selection.
                    if (scope.selectedTask.description) {
                        scope.taskDescriptionText = 'Edit Description';
                    }
                }

                // update/add task description.
                scope.updateTaskDescripton = function() {

                    scope.selectedTask.description = scope.taskDescription;
                    scope.toggleEditTaskDescription();

                }

                // delete task from the model itself [Archive]
                scope.deleteTaskItem = function() {

                }

                // update the data, as per the selected task selection.
                scope.$watch('selectedTask', function(newVal, oldVal) {

                    if (oldVal !== newVal && newVal) {


                        // description action text.
                        scope.taskDescription = '';

                        if (newVal.description) {

                            scope.taskDescriptionText = 'Edit Description';
                            scope.taskDescription = newVal.description;

                        } else {
                            scope.taskDescriptionText = 'Add a Description';
                        }

                        // if no comments in the selected task, add a new comments array.
                        if (!newVal.comments) {
                            scope.selectedTask.comments = [];
                        }
                    }

                })

            }

        };

    }]);
})();
