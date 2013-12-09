(function () {
    'use strict';

    var controllerId = 'apartmentController';

    angular.module('aptFinderApp').controller(controllerId,
        ['$scope', 'apartmentFactory', apartmentController]);

    function apartmentController($scope, apartmentFactory) {

        apartmentFactory.renderCanvas('canvas');
        apartmentFactory.renderBirdeyeCanvas('birdeye');
        $scope.apartments = apartmentFactory.activeSection.apartmentData;
        $scope.sectionId = $scope.apartments.Id;
        $scope.birdeyeDirection = 'south';
        $scope.northToggle = '';
        $scope.southToggle = 'active';
        $scope.viewToggle = function (btn) {
            $scope.birdeyeDirection = btn;
            if (btn === 'north') {
                $scope.northToggle = 'active';
                $scope.southToggle = '';
            }else if (btn === 'south') {
                $scope.northToggle = '';
                $scope.southToggle = 'active';
            }
            
        };
        $scope.labelClass = function (a) {
            return apartmentFactory.getLabelClass(a);
        };
        $scope.labelName = function (a) {
            return apartmentFactory.getStatusName(a);
        };
        $scope.mousemoveApt = function (ev) {
            apartmentFactory.mouseoverApt(ev);
        };
        $scope.mousemoveBirdeye = function (ev) {
            apartmentFactory.mouseoverBirdeye(ev);
        };
        $scope.clickBirdeye = function (ev) {
            var section = apartmentFactory.clickBirdeye(ev);
            $scope.sectionId = section.id;
            $scope.apartments = section.apartmentData;
        };
    }
})();
