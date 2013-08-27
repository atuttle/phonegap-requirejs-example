define(['helpers','api','linkedin','twitter','facebook'], function(helpers,api,linkedin,twitter,facebook){

	var app_interface = {

		init: function(){
			console.log('FUNC :: app.init');

			app_interface.linkedin.init();
			app_interface.facebook.init();
			app_interface.twitter.init();

			helpers.pgalert('Success', 'Initialization complete!');
		}

		//can we import other modules and make them part of the app, like this?
		,linkedin: linkedin
		,facebook: facebook
		,twitter:  twitter

	};

	return app_interface;

});
