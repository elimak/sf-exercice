/**
 * Created with JetBrains WebStorm.
 * User: elimak
 * Date: 4/12/14
 * Time: 5:34 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){

    var CommentsCtrl = function ($scope, $routeParams, appModel) {
        $scope.feed = appModel.get($routeParams.id);
    };

    CommentsCtrl.$inject = [
        '$scope',
        '$routeParams',
        'appModel',
    ];

    module.exports = CommentsCtrl;

}).call(this);