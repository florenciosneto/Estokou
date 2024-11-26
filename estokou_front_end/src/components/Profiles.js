var Profile = (function() {
    var full_name = "";
    var user_id = 0;
    var storage_id = 0;
  
    var getName = function() {
      return full_name; 
    };
  
    var setName = function(name) {
      full_name = name;     

    };

    var getId = function() {
        return user_id;  
      };
    
      var setId = function(id) {
        user_id = id;     

      };

      var getStorageId = function() {
        return storage_id; 
      };
    
      var setStorageId = function(id) {
        storage_id = id;     
      };
  
    return {
      getName: getName,
      setName: setName,
      getId: getId,
      setId:setId,
      getStorageId:getStorageId,
      setStorageId:setStorageId,
    }
  
  })();
  
  export default Profile;