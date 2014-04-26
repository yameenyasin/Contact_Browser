//app controller constructor
function appController($scope, $http) {
    var promise = $http.get("contacts.json");
    promise.success(function(data, status) {
        //add contact json object to the angular scope
        $scope.Contacts = data;
        console.log('AJAX succesfull, status: ', status);
    });

    promise.error(function(data, status) {
        console.log('AJAX failed, status: ', status);
    });

    
    //partial view urls
    $scope.headerURL = "partials/header-view.html";
    $scope.propertyURL = "partials/property-view.html";
    $scope.contactURL = "partials/contacts-view.html";

    //selected contact reference
    $scope.currentContact = null;

    //set selected contact
    $scope.setCurrentContact = function(id) {
        $scope.currentContact = $scope.Contacts[id - 1];
    };
}