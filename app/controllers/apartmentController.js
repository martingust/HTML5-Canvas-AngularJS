(function () {
    'use strict';

    var controllerId = 'apartmentController';

    angular.module('aptFinderApp').controller(controllerId,
        ['$scope', 'apartmentFactory', apartmentController]);

    function apartmentController($scope, apartmentFactory) {

        apartmentFactory.renderCanvas('canvas');
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
        $scope.mousemove = function (ev) {
            var apartment = apartmentFactory.mouseoverApt(ev);
            if (apartment)
                $scope.highlightApt(apartment);
        };
    }
})();
