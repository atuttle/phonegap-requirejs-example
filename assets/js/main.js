//this module handles app startup and initialization
//also handles figuring out whether we should use phonegap's
require(['app','helpers'], function(app, helpers){

	//while this does go against some best practices; it improves debugability by
	//making some things available for tinkering via the console
	window.app = app;

	function bootstrap(){
		window.phonegapLoaded = true;
		app.init();
		console.log('bootstrap complete...');
	}

	// bootstrap when not running inside a PhoneGap app
	$(function(){
		if (!helpers.isPhonegap()){
			bootstrap();
		}
	});

	//bootstrap when running inside a PhoneGap app
	document.addEventListener('deviceready', bootstrap, false);

	//there is no equivalent (or the need?) for the resume event in mobile web
	document.addEventListener('resume', function(){
		// required for iOS:
		// http://docs.phonegap.com/en/2.9.0/cordova_events_events.md.html#resume_ios_quirks
		setTimeout(function(){
			if (app.onResume) app.onResume();
		}, 0);
	}, false);
});
