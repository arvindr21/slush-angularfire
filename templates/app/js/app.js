'use strict';

// Declare app level module which depends on filters, and services
angular.module('<%= appCamelizeName %>',
      ['<%= appCamelizeName %>.config', '<%= appCamelizeName %>.routes', '<%= appCamelizeName %>.filters', '<%= appCamelizeName %>.services', '<%= appCamelizeName %>.directives', '<%= appCamelizeName %>.controllers',
         'simpleLoginTools', 'routeSecurity']
   )

   .run(['loginService', '$rootScope', 'FBURL', function(loginService, $rootScope, FBURL) {
         // establish authentication
         $rootScope.auth = loginService.init('/login');
         $rootScope.FBURL = FBURL;
   }]);