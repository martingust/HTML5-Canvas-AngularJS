(function () {

    'use strict';

    var serviceId = 'apartmentFactory';

    angular.module('aptFinderApp').factory(serviceId, ['$http', apartmentFactory]);

    function apartmentFactory($scope) {

        var ctx;
        var apartments = getData();
        var highlightColor = {
            none: "rgba(255, 0, 255, 0.5)",
            available: "rgba(0, 153, 0, .5)",
            sold: "rgba(255, 9, 0, .5)",
            reserved: "rgba(255, 255, 0, .5)"
        };

        var service = {
            getData: getData,
            getLabelClass: getLabelClass,
            getStatusName: getStatusName,
            mouseoverApt: mouseoverApt,
            renderCanvas: renderCanvas,
            highlightTableRow: highlightTableRow,
            renderApartment: renderApartment,
            highlightApartment: highlightApartment
        };

        return service;

        function renderCanvas(canvasId) {
            var canvas = document.getElementById(canvasId);
            canvas.addEventListener('mousemove', mousemove);
            ctx = canvas.getContext('2d');
        }

        function highlightTableRow(apartment, clearHighlight) {
            
            var tr = document.getElementById(apartment.id);
            var img = document.getElementById('planImg');
            
            if (apartment.plan && !clearHighlight) {
                img.setAttribute('ng-src', 'img/' + apartment.plan);
                img.setAttribute('src', 'img/' + apartment.plan);
            }
            
            if (clearHighlight) {
                img.setAttribute('ng-src', 'img/plan-no-image.png');
                img.setAttribute('src', 'img/plan-no-image.png');
                tr.className = '';
            } else {
                tr.className = getAptRowClassName(apartment);
            }
        };

        function highlightApartment(a, clear) {
            renderApartment(a);
            highlightTableRow(a, true);
            if (!clear) {
                highlightTableRow(a);
                renderApartment(a, true);
            }
        }

        function renderApartment(apartment, hightlight) {;
            var r = apartment.rect;
            if (hightlight) {
                ctx.fillStyle = highlightColor[apartment.status];
                ctx.fillRect(r.xPos, r.yPos, r.width, r.height);
            } else {
                ctx.clearRect(r.xPos, r.yPos, r.width, r.height);
            }
        };

        function getAptRowClassName(apartment) {
            switch (apartment.status) {
                case 'available':
                    return 'success';
                case 'reserved':
                    return 'warning';
                case 'sold':
                    return 'danger';
                default:
                    return '';
            }
        };

        function getLabelClass(apartment) {
            switch (apartment.status) {
                case 'available':
                    return 'label label-success';
                case 'reserved':
                    return 'label label-warning';
                case 'sold':
                    return 'label label-danger';
                default:
                    return 'label label-default';
            }
        }

        function getStatusName(apartment) {
            switch (apartment.status) {
                case 'available':
                    return 'Available';
                case 'reserved':
                    return 'Reserved';
                case 'sold':
                    return 'Sold';
                default:
                    return '';
            }
        }

        function getData() {
            return [
                { id: 'a1401', room: 4, area: 75, price: 160500, fee: 3400, pdf: '#', status: 'available', plan: 'plan1.png', rect: { width: 186, height: 70, xPos: 144, yPos: 30 } },
                { id: 'a1301', room: 3, area: 45, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 186, height: 70, xPos: 144, yPos: 100 } },
                { id: 'a1201', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 186, height: 70, xPos: 144, yPos: 170 } },
                { id: 'a1101', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 186, height: 70, xPos: 144, yPos: 240 } },
                { id: 'a1001', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 186, height: 70, xPos: 144, yPos: 310 } },
                { id: 'a1402', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 276, height: 70, xPos: 346, yPos: 30 } },
                { id: 'a1303', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 276, height: 70, xPos: 346, yPos: 100 } },
                { id: 'a1203', room: 3, area: 56, price: 130500, fee: 6500, pdf: '#', status: 'available', rect: { width: 276, height: 70, xPos: 346, yPos: 170 } },
                { id: 'a1103', room: 3, area: 78, price: 150500, fee: 3400, pdf: '#', status: 'sold', rect: { width: 276, height: 70, xPos: 346, yPos: 240 } },
                { id: 'a1003', room: 2, area: 35, price: 110500, fee: 5500, pdf: '#', status: 'reserved', rect: { width: 235, height: 70, xPos: 387, yPos: 310 } },
            ];
        }

        function mouseoverApt(ev) {
            var x;
            var y;

            if (ev.offsetX || ev.offsetY == 0) {
                x = ev.offsetX;
                y = ev.offsetY;
            } else if (ev.layerX || ev.layerY == 0) {
                x = ev.layerX - this.offsetLeft;
                y = ev.layerY - this.offsetTop;
            }

            document.getElementById("xPos").innerHTML = 'X: ' + x;
            document.getElementById("yPos").innerHTML = 'Y: ' + y;

            for (var i = 0; i < apartments.length; i++) {

                var a = apartments[i];
                var r = a.rect;
                var xMin = r.xPos;
                var xMax = r.xPos + r.width;
                var yMin = r.yPos;
                var yMax = r.yPos + r.height;
                if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)) {
                    return a;
                }
            }
            
            return null;
        };

        function mousemove(ev) {
            var x;
            var y;

            if (ev.offsetX || ev.offsetY == 0) {
                x = ev.offsetX;
                y = ev.offsetY;
            } else if (ev.layerX || ev.layerY == 0) {
                x = ev.layerX - this.offsetLeft;
                y = ev.layerY - this.offsetTop;
            }

            document.getElementById("xPos").innerHTML = 'X: ' + x;
            document.getElementById("yPos").innerHTML = 'Y: ' + y;

            for (var i = 0; i < apartments.length; i++) {

                var a = apartments[i];
                var r = a.rect;
                var xMin = r.xPos;
                var xMax = r.xPos + r.width;
                var yMin = r.yPos;
                var yMax = r.yPos + r.height;
                if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)) {
                    renderApartment(a);
                    renderApartment(a, true);
                    highlightTableRow(a);
                    
                } else {
                    renderApartment(a);
                    highlightTableRow(a, true);
                }
            }
        };
    }
})();