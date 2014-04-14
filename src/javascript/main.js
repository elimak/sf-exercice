/*
Copyright (c) 2014, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function(){

   /**/

   //angular.module('app.controllers', ['app.controllers']);

   var myApp = angular.module('app', ['ngTouch', 'ngAnimate', 'ngRoute','ui.bootstrap']);
  // angular.module('app.directives', ['app.directives']);

    myApp.controller('MainCtrl', require('./controller/MainCtrl'));
    myApp.controller('FeedCtrl', require('./controller/FeedCtrl'));
    myApp.controller('CommentsCtrl', require('./controller/CommentsCtrl'));
    myApp.controller('ConfirmationCtrl', require('./controller/ConfirmationCtrl'));

    myApp.directive('feeditem', require('./directive/feeditem'));


    // Models
    myApp.service('appModel', require('./model/appModel'));
    myApp.service('dialogService', require('./service/dialogService'));

    // router
    myApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/feed',
                {
                    templateUrl: 'feed-list.html',
                    controller: 'FeedCtrl'
                })
                .when('/comments/:id',
                {
                    templateUrl: 'feed-comments.html',
                    controller: 'CommentsCtrl'
                })
                .when('/confirmation',
                {
                    templateUrl: 'dialog.html',
                    controller: 'ConfirmationCtrl'
                })
                .otherwise({
                    redirectTo: '/feed'
                });

        }]);

}).call(this);
