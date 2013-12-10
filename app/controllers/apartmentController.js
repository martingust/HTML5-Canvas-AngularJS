(function () {
    'use strict';

    var controllerId = 'apartmentController';

    angular.module('aptFinderApp').controller(controllerId,
        ['$scope', 'apartmentFactory', apartmentController]);

    function apartmentController($scope, apartmentFactory) {

        // init
        apartmentFactory.renderCanvas('canvas');
        apartmentFactory.renderBirdeyeCanvas('birdeye');
        
        // scope
        $scope.section = apartmentFactory.setDirection('north');
        $scope.setDirection = function (btn) {
            $scope.section = apartmentFactory.setDirection(btn);
        };
        $scope.labelClass = function (a) {
            return apartmentFactory.getLabelClass(a); // TODO: move to directive
        };
        $scope.labelName = function (a) {
            return apartmentFactory.getStatusName(a); // TODO: move to directive
        };
        $scope.mousemoveApt = function (ev) {
            apartmentFactory.mouseoverApt(ev);
        };
        $scope.mousemoveBirdeye = function (ev) {
            apartmentFactory.mouseoverBirdeye(ev);
        };
        $scope.clickBirdeye = function (ev) {
            $scope.section = apartmentFactory.clickBirdeye(ev);
        };
    }
})();