var productServices = angular.module('productServices', ['ngResource']);

productServices.service('productService', [ '$resource', '$rootScope', function ($resource, $rootScope) {
  var productsUrl = '/api/products/';
  return $resource($rootScope.version + $rootScope.baseUrl + productsUrl +':id/?format=json', {id: '@id'},{
    list: { method: 'GET', isArray:true, headers:  $rootScope.headersJWT},
    detail: { method: 'GET', headers: $rootScope.headersJWT },
    create: { method: 'POST', headers: $rootScope.headersJWT },
    update: { method: 'PUT', headers: $rootScope.headersJWT },
    delete: { method: 'DELETE', headers: $rootScope.headersJWT }
  });
}]);
