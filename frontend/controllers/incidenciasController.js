//controlador llamado notasController al que inyectamos el modelo notasModel
Incidence.controller("incidencesController", function($scope,$http,$mdDialog, incidencesModel){
    $scope.numOption =[];
    $scope.numEstado =[];

    $scope.data = {
        incidences: $http.get('http://apps.socialdeveloper.org/incidences/getIncidences.php').
        success(function(data) {
            $scope.incidences = data.incidences;
            console.log('length:'+data.incidences.length);
            for(var i=0; i<data.incidences.length;i++){
              $scope.numOption[data.incidences[i]["idIncidence"]] = data.incidences[i]["idPriority"]; 
              $scope.numEstado[data.incidences[i]["idIncidence"]] = data.incidences[i]["idStateName"]; 
            }
            
        })
    };
    $scope.comment = "";
     //Cambios en la select de estado
     $scope.stateUpdate = function(idIncidence) {
    console.log('idIncidence:'+idIncidence);
  }
    //Dialog
    $scope.showAlert = function(ev,idIncidence) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Historial')
        .textContent('incidence:'+idIncidence)
        .ariaLabel('Alert Dialog')
        .ok('Aceptar')
        .targetEvent(ev)
    );
  };
})