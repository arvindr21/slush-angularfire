(function() {
   'use strict';

   /* Services */

   angular.module('<%= appCamelizeName %>.services', ['<%= appCamelizeName %>.service.login', '<%= appCamelizeName %>.service.firebase', '<%= appCamelizeName %>.service.changeEmail']);

      // put your services here!
      // .service('serviceName', ['dependency', function(dependency) {}]);

})();

