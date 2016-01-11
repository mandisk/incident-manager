//controlador llamado notasController al que inyectamos el modelo notasModel
Incidence.controller("incidencesController", function($scope, $http, $mdDialog, incidencesModel) {
    $scope.numOption = [];
    $scope.numEstado = [];
    $scope.data = {
        incidences: $http.get('http://apps.socialdeveloper.org/incidences/getIncidences.php').
        success(function(data) {
            $scope.incidences = data.incidences;
            console.log('length:' + data.incidences.length);
            for (var i = 0; i < data.incidences.length; i++) {
                $scope.numOption[data.incidences[i]["idIncidence"]] = data.incidences[i]["idPriority"];
                $scope.numEstado[data.incidences[i]["idIncidence"]] = data.incidences[i]["idStateName"];
            }
        })
    };
    $scope.comment = "";
    //Cambios en la select de estado
    $scope.stateUpdate = function(idIncidence) {
            console.log('idIncidence:' + idIncidence);
        }
        //Listener botón menu
    $scope.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
    // Opciones de menu
    $scope.addIncidence = function() {
        window.location.href = "http://apps.socialdeveloper.org/incidences/#/addIncidence";
    }
    $scope.showIncidences = function() {
            window.location.href = "http://apps.socialdeveloper.org/incidences/#/home";
        }
        //Añadir incidencia a base de datos
    $scope.saveIncidence = function() {
            console.log('name:' + $scope.incidence.name);
            console.log('description:' + $scope.incidence.description);
            console.log('author:' + $scope.incidence.author);
            console.log('priority:' + $scope.incidence.priority);
            console.log('state:' + $scope.incidence.state);
        }
        //Dialog
    $scope.showAlert = function(ev, idIncidence) {
        $mdDialog.show($mdDialog.alert().parent(angular.element(document.querySelector('#popupContainer'))).clickOutsideToClose(true).title('Historial').textContent('incidence:' + idIncidence).ariaLabel('Alert Dialog').ok('Aceptar').targetEvent(ev));
    };
})