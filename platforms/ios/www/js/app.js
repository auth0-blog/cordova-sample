/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) {
		this.storage = new app.Store(name);
		this.model = new app.Model(this.storage);
		this.template = new app.Template();
		this.view = new app.View(this.template);
		this.controller = new app.Controller(this.model, this.view);
	}

	var todo = new Todo('todos-vanillajs');

	function setView() {
		todo.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
 
    var onSuccess = function(position) {
        var geotext = document.getElementById('geotext');
        geotext.textContent = 'Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude;
    };
 
    var onError = function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    }
 
    var button = document.getElementById('geo');
    button.addEventListener("click", function(){
                          navigator.geolocation.getCurrentPosition(onSuccess, onError);
                          });
 
 
    // Uncomment the following code if you want to load a hosted web app.
    /* function myOnDeviceReady() {
        if (navigator.connection.type == Connection.NONE) {
            navigator.notification.alert('An internet connection is required to continue');
        } else {
            window.location="http://www.my-web-app-url.com";
        }
    }
    document.addEventListener("deviceready", myOnDeviceReady, false);
    */

})();
