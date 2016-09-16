'use strict';

angular.module('User', []).
  controller('ApiController', ApiController);

function ApiController(){
	var scope = this;

	scope.users = [];

	scope.submitForm = function(data){
		data = {			
			email    : data.email.$viewValue,
			name     : data.name.$viewValue,
			country  : data.country.$viewValue,
			password : data.password.$viewValue
	    };
	    scope.create(data);
	};

	scope.create = function(data){		
		io.socket.post('/user/create', data, createCallback);
	};

	scope.read = function(){
		io.socket.get('/user/find', readCallback);
	};

	scope.update = function(id){
		io.socket.update('/user', id, Callback);
	};

	scope.delete = function(id){
		io.socket.delete('/user', id, Callback);
	};

	function createCallback(resData, jwres){
		scope.users.push(resData);
	}

	function readCallback(resData, jwres){
		console.log(resData);
	}

	//Listen model events

	io.socket.on('user', function(event){
		console.log(event.data);
		if(event.verb == "created"){
			scope.users.push(event.data);	
		}
	})

}