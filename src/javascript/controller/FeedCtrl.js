/**
 * Created with JetBrains WebStorm.
 * User: elimak
 * Date: 4/12/14
 * Time: 5:34 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){

    var FeedCtrl = function($scope, appModel){
        $scope.feeds = appModel.query();

        $scope.getTextLink = function( feed ){

            var str;
            switch(true){
                case feed.comments.length > 1:
                    str = feed.comments.length+" Comments";
                    break;
                case feed.comments.length == 1:
                    str = feed.comments.length+" Comment"
                    break;
                default:
                    str = "Comment";
                    break
            }

            return str;
        };
    };

    FeedCtrl.$inject = [
        '$scope',
        'appModel'
    ];

    module.exports = FeedCtrl;

}).call(this);