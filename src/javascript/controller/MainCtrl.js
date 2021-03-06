/**
 * Created with JetBrains WebStorm.
 * User: elimak
 * Date: 4/12/14
 * Time: 5:34 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){

    var MainCtrl = function($window, $location, $rootScope, $scope, appModel, dialogService){

        $scope.slide = '';
        $rootScope.back = function() {
            $scope.slide = 'slide-right';
            $window.history.back();
        };

        $rootScope.go = function(path){
            $scope.slide = 'slide-left';
            $location.url(path);
        };

        $rootScope.delete = function (feedId){
            dialogService.showModalDialog();
        };

        // make appModel available to all scopes
       // $rootScope.appModel = appModel;
        $scope.feeds = appModel.query();



    };

    MainCtrl.$inject = [
        '$window',
        '$location',
        '$rootScope',
        '$scope',
        'appModel',
        'dialogService'
    ];

    module.exports = MainCtrl;

}).call(this);