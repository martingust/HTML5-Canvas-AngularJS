(function () {
    'use strict';

    var controllerId = 'apartmentController';

    angular.module('aptFinderApp').controller(controllerId,
        ['$scope', 'apartmentFactory', apartmentController]);

    function apartmentController($scope, apartmentFactory) {

        apartmentFactory.renderCanvas('canvas');
        apartmentFactory.renderBirdeyeCanvas('birdeye');
        $scope.apartments = apartmentFactory.getData();
        $scope.apartmentPlan = 'img/plan-no-image.png';
        $scope.setSort = function(prop) {
            this.apartmentPredicate = prop;
            this.apartmentsReverse = !this.apartmentsReverse;
        };
        $scope.labelClass = function (a) {
            return apartmentFactory.getLabelClass(a);
        };
        $scope.labelName = function (a) {
            return apartmentFactory.getStatusName(a);
        };
        $scope.highlightApt = function (a, clearHighlight) {
            if (!clearHighlight && a.plan) {
                $scope.apartmentPlan = 'img/' + a.plan;
            } else {
                $scope.apartmentPlan = 'img/plan-no-image.png';
            }
            apartmentFactory.highlightApartment(a, clearHighlight);
        };
        $scope.mousemoveApt = function (ev) {
            apartmentFactory.mouseoverApt(ev);
        };
        $scope.mousemoveBirdeye = function (ev) {
            apartmentFactory.mouseoverBirdeye(ev);
        };
        $scope.clickBirdeye = function(ev) {
            apartmentFactory.clickBirdeye(ev);
        };
    }
})();
