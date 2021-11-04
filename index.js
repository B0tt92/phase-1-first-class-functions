function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction(a) {
      return function a() {

      };
    
  };

  function returnsAnAnonymousFunction() {
    return function() {

    }

  };