define(function(){
	return {

		/*
		 *	jqMobile loading indicator
		 */

		showLoading: function(txt){
			$.mobile.loading('show', { text: txt, textVisible: trim(txt).length > 0 });
		}

		,hideLoading: function(){
			$.mobile.loading('hide');
		}

		/*
		 *	PhoneGap helpers
		 */

		,isPhonegap: function(){
			return typeof navigator.notification !== 'undefined';
		}

		,pgalert: function(title, msg, btnText, cb){
			if (this.isPhonegap())
				navigator.notification.alert(msg, cb, title, btnText);
			else
				alert(msg);
		}

		,pgconfirm: function(title, msg, buttons, callback){
			if (this.isPhonegap())
				navigator.notification.confirm(msg, callback, title, buttons);
			else{
				if (callback) callback(confirm(msg) ? 2 : 1);
			}
		}

		,pgprompt: function(title, msg, buttons, defaultVal, callback){
			defaultVal = (!!defaultVal) ? defaultVal : ' ';
			if (this.isPhonegap())
				navigator.notification.prompt(msg, callback, title, buttons, defaultVal);
			else{
				var result = window.prompt(msg, defaultVal);
				var response = {};
				if (result === null){
					response.buttonIndex = 1;
					response.input1 = null;
				}else{
					response.buttonIndex = 2;
					response.input1 = result;
				}
				callback(response);
			}
		}

		/*
		 *	Generic JS helpers
		 */

		,trim: function(s){
			s = s || '';
			return s.replace(/^\s+|\s+$/gi, '');
		}

		,isTablet: function(){
			if (typeof device === 'undefined') return false;
			return (
				device.model.indexOf('iPad') > -1
				||
				(
					device.platform.indexOf('Android') > -1
					&&
					(screen.width >= 800 && screen.height >= 1280)
				)
			);
		}

		,urlParams: function(){
			var paramter, parameters = {};
			if (window.location.search.length === 0) return {};
			var q = window.location.search.replace(/^\?(.*)/,'$1').split('&');
			for (var i = 0; i < q.length; i++) {
				parameter = q[i].split("=");
				if (parameter.length === 1) { parameter[1] = ""; }
				parameters[decodeURIComponent(parameter[0])] = decodeURIComponent(parameter[1]);
			}
			return parameters;
		}

	};
});
