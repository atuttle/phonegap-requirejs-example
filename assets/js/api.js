define(function(){

	var base_url = 'http://api.yourdomain.com/v1/';

	//work-horse for API calls
	var send = function(verb, resource, data, success, fail){
		$.ajax({
			url: base_url + resource
			,type: verb
			,data: data
			,dataType: 'json'
			,encoding: 'UTF-8'
			,crossDomain: true
			,cache: false
		})
		.done(success)
		.fail(fail);
	};

	return {
		get: function(resource, data, success, fail){
			send('GET', resource, data, success, fail);
		}
		,post: function(resource, data, success, fail){
			send('POST', resource, data, success, fail);
		}
		,put: function(resource, data, success, fail){
			send('PUT', resource, data, success, fail);
		}
		,delete: function(resource, data, success, fail){
			send('DELETE', resource, data, success, fail);
		}
	};

});
