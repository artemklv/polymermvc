var polymerMVC = (function(){

    var singletons = {};

    var modules = {};

    return {

      module: function( moduleName, elementId ) {

        var controllers = [];

        if ( typeof moduleName === 'undefined' ) {
          throw new Error('Variable moduleName is required!');
        }
        if ( typeof moduleName !== 'string' ) {
          throw new Error('Variable moduleName must be a string');
        }
        if ( typeof elementId === 'undefined' ) {
          throw new Error('Variable elementId is required!');
        }

        return {
          controller: function ( controllerName, callFunction ) {

          }
        }

      }

    }
})();

