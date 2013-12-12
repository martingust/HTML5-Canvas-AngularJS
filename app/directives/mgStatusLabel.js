(function() {
    'use strict';

    angular.module('aptFinderApp').directive('mgStatusLabel', ['$window', mgStatusLabel]);
    
    function mgStatusLabel ($window) {
        // Usage:
        // <div data-mg-status-label status="a.status"></div>
        // Creates:
        // <span class="label label-success">Tillgänglig</span>
        var directive = {
            link: link,
            restrict: 'A',
            template: '<span class="label">{{status}}</span>',
            scope: {
                'status': '@'    
            }
    };
        return directive;

        function link(scope, element, attrs) {
            switch (scope.status) {
                case 'available':
                    element.children().addClass('label-success');
                    element.children().text("Tillgänglig");
                    break;
                case 'reserved':
                    element.children().addClass('label-warning');
                    element.children().text("Reserverad");
                    break;
                case 'sold':
                    element.children().addClass('label-danger');
                    element.children().text("Såld");
                    break;
                default:
                    element.children().addClass('label-default');
                    element.children().text("N/A");
                    break;
            }
        }
    }

})();