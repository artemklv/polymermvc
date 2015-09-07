var polymerMVC = (function(){

    var singletons = {};

    var modules = {};

    var Controller = function( controllerName ) {
      var controllerName = controllerName;
      return {
        name: controllerName,
        run: function() {

        }
      }
    }

    var Module = function( moduleElement ) {
        
        var self = this;
        var rootModuleElement = moduleElement;
        
        var controllers = {};
        
        return {
          controller: function( controllerName ) {
            if ( typeof controllers[controllerName] !== 'undefined' ) {
              return controllers[controllerName];
            }
            controllers[controllerName] = new Controller(controllerName)
            return controllers[controllerName];
          }
        }
    }

    return {

      module: function( moduleName, elementId ) {

        var moduleElement;
        if ( typeof moduleName === 'undefined' ) {
          throw new Error('Variable moduleName is required!');
        }
        if ( typeof moduleName !== 'string' ) {
          throw new Error('Variable moduleName must be a string');
        }
        if ( typeof modules[moduleName] !== 'undefined' ) {
           return modules[moduleName];
        }

        if ( typeof elementId === 'undefined' ) {
          throw new Error('Variable elementId is required!');
        }
        if ( typeof elementId !== 'string' ) {
          throw new Error('Variable elementId must be a string');
        }

        moduleElement = document.getElementById(elementId);
        if ( !moduleElement ) {
          throw new Error('Variable elementId must be a valid id from DOM node');
        }
        modules[moduleName] = new Module(moduleElement);

        return modules[moduleName];

      }

    }
})();

var app = polymerMVC;

app.module('rootPageModule', 'rootPageModule');
app.module('rootPageModule').controller('frontPage', function( $router, $crud, $singletons){

});
console.log(app.module('rootPageModule'));