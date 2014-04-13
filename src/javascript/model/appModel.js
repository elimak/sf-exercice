/*
Copyright (c) 2014, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function(){

  var appModel = function($rootScope){

    // put model properties here
    return {
        feeds:[
            {
                photo:"avatar pos-0",
                actor:"John Smith",
                timestamp:"timestamp",
                body:"Mauris vitae consequat urna. Nam fringilla elementum imperdiet. Donec non tellus sit amet dui posuere cursus. Quisque porta mauris sit amet mauris faucibus molestie. Integer feugiat odio in viverra facilisis. Pellentesque vitae felis nibh. Praesent eu facilisis ipsum. Sed et erat mollis, consequat enim ut.",
                comments:[
                    {
                        photo:"avatar pos-1",
                        from:"John Smith",
                        timestamp:"timestamp",
                        body:"body"
                    },
                    {
                        photo:"photo",
                        from:"John Smith",
                        timestamp:"timestamp",
                        body:"body"
                    }
                ]
            },
            {
                photo:"avatar pos-1",
                actor:"Jone Smith",
                timestamp:"timestamp",
                body:"Integer in consequat mauris. Phasellus tincidunt, massa et bibendum adipiscing, augue lorem pulvinar nulla, a tincidunt massa nunc id dolor.",
                comments:[]
            },
            {
                photo:"avatar pos-2",
                actor:"John Smith",
                timestamp:"timestamp",
                body:"Praesent a porttitor nisi, ut molestie augue. Pellentesque egestas mattis euismod. Fusce at neque ut ligula sollicitudin vestibulum.",
                comments:[]
            },
            {
                photo:"avatar pos-3",
                actor:"Jone Smith",
                timestamp:"timestamp",
                body:"Praesent suscipit augue fermentum nulla placerat sagittis. Aliquam non dui nisi.",
                comments:[]
            },
            {
                photo:"avatar pos-4",
                actor:"Jone Smith",
                timestamp:"timestamp",
                body:"In dolor dolor, laoreet vel gravida a, dignissim at tortor. Duis dapibus libero ut nulla egestas pretium.",
                comments:[]
            }
        ]
    };
  };

  appModel.$inject = [
    '$rootScope'
  ];

  module.exports = appModel;

}).call(this);