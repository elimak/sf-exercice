/**
 * Created with JetBrains WebStorm.
 * User: elimak
 * Date: 4/13/14
 * Time: 4:26 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){

    var dialogService = function($modal){

        var dialogDefaults = {
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            dialogFade: true,
            templateUrl: 'dialog.html'
        };

        var dialogOptions = {
            closeButtonText: 'Close',
            actionButtonText: 'OK',
            headerText: 'Proceed?',
            bodyText: 'Perform this action?'
        };

        function showDialog (customDialogDefaults, customDialogOptions) {
            //Create temp objects to work with since we're in a singleton service
            var tempDialogDefaults = {};
            var tempDialogOptions = {};

            //Map angular-ui dialog custom defaults to dialog defaults defined in this service
            angular.extend(tempDialogDefaults, dialogDefaults, customDialogDefaults);

            //Map dialog.html $scope custom properties to defaults defined in this service
            angular.extend(tempDialogOptions, dialogOptions, customDialogOptions);

            if (!tempDialogDefaults.controller) {
                tempDialogDefaults.controller = function ($scope, $modal) {
                    $scope.dialogOptions = tempDialogOptions;
                    $scope.dialogOptions.close = function (result) {
                        $modal.close(result);
                    };
                    $scope.dialogOptions.callback = function () {
                        $modal.close();
                        customDialogOptions.callback();
                    };
                }
            }

           /* var d = */$modal.open(tempDialogDefaults);
           // d.open();
        }

        return {
            showModalDialog : function (customDialogDefaults, customDialogOptions) {
                if (!customDialogDefaults) customDialogDefaults = {};
                customDialogDefaults.backdropClick = false;
                showDialog(customDialogDefaults, customDialogOptions);
                console.log("this is called?");
            }
        }
    };

    dialogService.$inject = [
        '$modal'
    ];

    module.exports = dialogService;

}).call(this);