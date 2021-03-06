﻿(function () {
    'use strict';

    var controllerId = 'apartmentController';

    angular.module('aptFinderApp').controller(controllerId,
        ['$scope', 'apartmentFactory', apartmentController]);

    function apartmentController($scope, apartmentFactory) {
        // init
        apartmentFactory.prime('canvas', 'birdeye');
        // scope
        $scope.section = apartmentFactory.setDirection('north');
        $scope.setDirection = function (btn) {
            $scope.section = apartmentFactory.setDirection(btn);
        };
        $scope.mousemoveApt = function (ev) {
            apartmentFactory.mouseoverApt(ev);
        };
        $scope.mousemoveBirdeye = function (ev) {
            apartmentFactory.mouseoverBirdeye(ev);
        };
        $scope.clickBirdeye = function (ev) {
            var s = apartmentFactory.clickBirdeye(ev);
            if (s) {
                $scope.section = s;
            }
        };
        $scope.highlightApt = function (a, clear) {
            if (clear) {
                apartmentFactory.highlightTableRow(a, true);
                apartmentFactory.highlightApartment(a, true);
            } else {
                apartmentFactory.highlightTableRow(a);
                apartmentFactory.highlightApartment(a);
            }
        };
    }
})();