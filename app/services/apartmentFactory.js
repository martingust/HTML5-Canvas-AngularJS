(function () {

    'use strict';

    var serviceId = 'apartmentFactory';

    angular.module('aptFinderApp')
        .factory(serviceId,
            ['$http', 'datacontext', apartmentFactory]);

    function apartmentFactory(http, datacontext) {

        var apartmentCtx;
        var birdeyeCtx;
        var apartmentCanvasId = '';
        var birdeyeCanvasId = '';
        var sections = [];
        var currentActiveSection;
        var highlightColor = {
            none: "rgba(255, 0, 255, 0.5)",
            available: "rgba(0, 153, 0, .5)",
            sold: "rgba(255, 9, 0, .5)",
            reserved: "rgba(255, 255, 0, .5)"
        };

        var service = {
            clickBirdeye: clickBirdeye,
            highlightApartment: highlightApartment,
            highlightTableRow: highlightTableRow,
            mouseoverApt: mouseoverApt,
            mouseoverBirdeye: mouseoverBirdeye,
            prime: prime,
            setDirection: setDirection,
        };

        return service;

        // Public functions
        function clickBirdeye(ev) {
            _clearApartments();
            var section = _isInsideSection(ev);
            if (section) {
                currentActiveSection = section;
                _renderSection(section);
                return section;
            }
        };

        function highlightApartment(a, clear) {
            _clearApartments();
            _renderApartment(a, !clear);
        };

        function highlightTableRow(apartment, clearHighlight) {
            var tr = document.getElementById(apartment.id);
            if (clearHighlight) {
                tr.className = '';
            } else {
                tr.className = _getAptRowClassName(apartment);
            }
        };

        function mouseoverApt(event) {
            var apartments = currentActiveSection.apartmentData;
            for (var i = 0; i < apartments.length; i++) {
                var a = apartments[i];
                if (_isInsideApartment(a, event)) {
                    _renderApartment(a);
                    _renderApartment(a, true);
                    highlightTableRow(a);
                } else {
                    _renderApartment(a);
                    highlightTableRow(a, true);
                }
            }
        };

        function mouseoverBirdeye(ev) {
            var section = _isInsideSection(ev);
            if (section) {
                _renderSection(section);
            }
        };

        function prime(apartmentCanvas, birdeyeCanvas) {
            birdeyeCanvasId = birdeyeCanvas;
            apartmentCanvasId = apartmentCanvas;

            renderApartmentCanvas(apartmentCanvasId);
            renderBirdeyeCanvas(birdeyeCanvasId);
            sections = datacontext.getData();
        }

        function renderApartmentCanvas(canvasId) {
            var canvas = document.getElementById(canvasId);
            apartmentCtx = canvas.getContext('2d');
        }

        function renderBirdeyeCanvas(canvasId) {
            var canvas = document.getElementById(canvasId);
            birdeyeCtx = canvas.getContext('2d');
        }

        function setDirection(direction) {
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].direction === direction) {
                    var section = sections[i];
                    _clearSections();
                    _clearApartments();
                    currentActiveSection = section;
                    _renderSection(section);
                    return section;
                }
            }
        }

        // Internal functions
        function _renderApartment(apartment, hightlight) {;
            var r = apartment.rect;
            if (hightlight) {
                apartmentCtx.fillStyle = highlightColor[apartment.status];
                apartmentCtx.fillRect(r.xPos, r.yPos, r.width, r.height);
            } else {
                apartmentCtx.clearRect(r.xPos, r.yPos, r.width, r.height);
            }
        };

        function _renderSection(section, clear) {
            var context = birdeyeCtx;
            context.beginPath();
            context.moveTo(section.rect.moveToX, section.rect.moveToY);

            for (var i = 0; i < section.rect.lines.length; i++) {
                context.lineTo(section.rect.lines[i].x, section.rect.lines[i].y);
            }

            if (!clear) {
                context.closePath();
                context.lineWidth = 1;
                context.fillStyle = highlightColor.available;
                context.fill();
            } else {
            }
        };

        function _isInsideSection(ev) {
            var context = birdeyeCtx;
            var x = _getMouseXPos(ev, birdeyeCanvasId);
            var y = _getMouseYPos(ev, birdeyeCanvasId);

            for (var i = 0; i < sections.length; i++) {
                var s = sections[i];
                if (s.direction !== currentActiveSection.direction) { continue; }
                var vertx = [];
                var verty = [];

                vertx.push(s.rect.moveToX);
                verty.push(s.rect.moveToY);
                for (var n = 0; n < s.rect.lines.length; n++) {
                    vertx.push(s.rect.lines[n].x);
                    verty.push(s.rect.lines[n].y);
                }

                context.clearRect(vertx[0], 0, 570, 354);

                if (currentActiveSection) {
                    context.clearRect(0, 0, 570, 354);
                    _renderSection(currentActiveSection);
                }

                if (isInsidePoly(s.rect.lines.length + 1, vertx, verty, x, y)) {
                    return s;
                }
            }
            return false;

            function isInsidePoly(nvert, vertx, verty, testx, testy) {
                var i, j, isInside = false;
                for (i = 0, j = nvert - 1; i < nvert; j = i++) {
                    if (((verty[i] > testy) != (verty[j] > testy)) &&
                        (testx < (vertx[j] - vertx[i]) * (testy - verty[i]) / (verty[j] - verty[i]) + vertx[i])) {
                        isInside = !isInside;
                    }
                }
                return isInside;
            }
        }
        
        function _isInsideApartment(apartment, event) {
            var x = _getMouseXPos(event, apartmentCanvasId);
            var y = _getMouseYPos(event, apartmentCanvasId);
            var r = apartment.rect;
            var xMin = r.xPos;
            var xMax = r.xPos + r.width;
            var yMin = r.yPos;
            var yMax = r.yPos + r.height;
            if ((x >= xMin && x <= xMax) && (y >= yMin && y <= yMax)) {
                return true;
            }
        }

        function _getAptRowClassName(apartment) {
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

        function _getMouseXPos(ev, canvasId) {
            var x;
            if (ev.offsetX) {
                x = ev.offsetX;
            } else if (ev.layerX) {
                var canvas = document.getElementById(canvasId);
                x = ev.layerX - canvas.offsetLeft;
            }
            document.getElementById("xPos").innerHTML = 'X: ' + x;
            return x;
        };

        function _getMouseYPos(ev, canvasId) {
            var y;
            if (ev.offsetY) {
                y = ev.offsetY;
            } else if (ev.layerY) {
                var canvas = document.getElementById(canvasId);
                y = ev.layerY - canvas.offsetTop;
            }
            document.getElementById("yPos").innerHTML = 'Y: ' + y;
            return y;
        };

        function _clearApartments() {
            apartmentCtx.clearRect(0, 0, 570, 344);
        }

        function _clearSections() {
            birdeyeCtx.clearRect(0, 0, 570, 354);
        }
    }
})();