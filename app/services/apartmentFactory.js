(function () {

    'use strict';

    var serviceId = 'apartmentFactory';

    angular.module('aptFinderApp').factory(serviceId, ['$http', apartmentFactory]);

    function apartmentFactory() {

        var ctx;
        var birdeyeCtx;
        var sections = getSectionsData();
        var currentActiveSection;
        var highlightColor = {
            none: "rgba(255, 0, 255, 0.5)",
            available: "rgba(0, 153, 0, .5)",
            sold: "rgba(255, 9, 0, .5)",
            reserved: "rgba(255, 255, 0, .5)"
        };

        var service = {
            clickBirdeye: clickBirdeye,
            setDirection: setDirection,
            getLabelClass: getLabelClass,
            getStatusName: getStatusName,
            mouseoverApt: mouseoverApt,
            mouseoverBirdeye: mouseoverBirdeye,
            renderCanvas: renderCanvas,
            renderBirdeyeCanvas: renderBirdeyeCanvas,
            highlightTableRow: highlightTableRow
        };

        return service;

        function renderCanvas(canvasId) {
            var canvas = document.getElementById(canvasId);
            ctx = canvas.getContext('2d');
        }

        function renderBirdeyeCanvas(canvasId) {
            var canvas = document.getElementById(canvasId);
            birdeyeCtx = canvas.getContext('2d');
        }

        function setDirection(direction) {
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].direction === direction) {
                    var section = sections[i];
                    clearSections();
                    clearApartments();
                    currentActiveSection = section;
                    renderSection(section);
                    return section;
                }
            }
        }

        function highlightTableRow(apartment, clearHighlight) {

            var tr = document.getElementById(apartment.id);
            if (clearHighlight) {
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

        function getSectionsData() {
            return [
            {
                id: 'south-inner-k2',
                direction: 'south',
                rect: {
                    moveToX: 177,
                    moveToY: 183,
                    lines: [
                        { x: 258, y: 137 },
                        { x: 265, y: 216 },
                        { x: 236, y: 238 },
                        { x: 229, y: 233 },
                        { x: 185, y: 264 }]
                },
                apartmentData: [
                    { id: 'a1401', room: 4, area: 75, price: 160500, fee: 3400, pdf: '#', status: 'available', plan: 'plan1.png', rect: { width: 176, height: 60, xPos: 112, yPos: 35 } },
                    { id: 'a1301', room: 3, area: 45, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 176, height: 60, xPos: 112, yPos: 95 } },
                    { id: 'a1201', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 176, height: 60, xPos: 112, yPos: 155 } },
                    { id: 'a1101', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 176, height: 60, xPos: 112, yPos: 220 } },
                    { id: 'a1001', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 176, height: 60, xPos: 112, yPos: 280 } },
                    { id: 'a1402', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 246, height: 60, xPos: 298, yPos: 30 } },
                    { id: 'a1303', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 246, height: 60, xPos: 298, yPos: 95 } },
                    { id: 'a1203', room: 3, area: 56, price: 130500, fee: 6500, pdf: '#', status: 'available', rect: { width: 246, height: 60, xPos: 298, yPos: 155 } },
                    { id: 'a1103', room: 3, area: 78, price: 150500, fee: 3400, pdf: '#', status: 'sold', rect: { width: 246, height: 60, xPos: 298, yPos: 215 } },
                    { id: 'a1003', room: 2, area: 35, price: 110500, fee: 5500, pdf: '#', status: 'reserved', rect: { width: 220, height: 60, xPos: 323, yPos: 277 } }
                ]
            },
            {
                id: 'south-outer-k2',
                direction: 'south',
                rect: {
                    moveToX: 425,
                    moveToY: 242,
                    lines: [
                        { x: 506, y: 160 },
                        { x: 506, y: 162 },
                        { x: 500, y: 198 },
                        { x: 513, y: 201 },
                        { x: 521, y: 145 },
                        { x: 569, y: 99 },
                        { x: 547, y: 228 },
                        { x: 452, y: 353 },
                        { x: 429, y: 353 },
                        { x: 435, y: 288 },
                        { x: 420, y: 281 }
                    ]
                },
                apartmentData: [
                    { id: 'd1601', room: 4, area: 75, price: 160500, fee: 3400, pdf: '#', status: 'available', rect: { width: 140, height: 43, xPos: 10, yPos: 77 } },
                    { id: 'd1501', room: 3, area: 45, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 140, height: 35, xPos: 10, yPos: 120 } },
                    { id: 'd1401', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 140, height: 35, xPos: 10, yPos: 155 } },
                    { id: 'd1301', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 140, height: 35, xPos: 10, yPos: 190 } },
                    { id: 'd1201', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 140, height: 35, xPos: 10, yPos: 225 } },
                    { id: 'd1101', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 140, height: 35, xPos: 10, yPos: 260 } },
                    { id: 'd1001', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 110, height: 47, xPos: 10, yPos: 295 } },
                    { id: 'd1601', room: 4, area: 75, price: 160500, fee: 3400, pdf: '#', status: 'available', plan: 'plan1.png', rect: { width: 163, height: 43, xPos: 150, yPos: 77 } },
                    { id: 'd1502', room: 3, area: 45, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 163, height: 35, xPos: 150, yPos: 120 } },
                    { id: 'd1403', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 86, height: 35, xPos: 150, yPos: 155 } },
                    { id: 'd1305', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 86, height: 35, xPos: 150, yPos: 190 } },
                    { id: 'd1205', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 86, height: 35, xPos: 150, yPos: 225 } },
                    { id: 'd1105', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 86, height: 35, xPos: 150, yPos: 260 } },
                    { id: 'd1003', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 86, height: 47, xPos: 150, yPos: 295 } },
                    { id: 'd1402', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 82, height: 35, xPos: 236, yPos: 155 } },
                    { id: 'd1304', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 82, height: 35, xPos: 236, yPos: 190 } },
                    { id: 'd1204', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 82, height: 35, xPos: 236, yPos: 225 } },
                    { id: 'd1104', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 82, height: 35, xPos: 236, yPos: 260 } },
                    { id: 'd1001', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 82, height: 47, xPos: 236, yPos: 295 } },
                    
                    { id: 'c1701', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 116, height: 37, xPos: 315, yPos: 46 } },
                    { id: 'c1601', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 116, height: 35, xPos: 315, yPos: 83 } },
                    { id: 'c1501', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 116, height: 35, xPos: 315, yPos: 118 } },
                    { id: 'c1401', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 116, height: 36, xPos: 315, yPos: 153 } },
                    { id: 'c1301', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 116, height: 35, xPos: 315, yPos: 189 } },
                    { id: 'c1201', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 116, height: 35, xPos: 315, yPos: 224 } },
                    { id: 'c1101', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 116, height: 35, xPos: 315, yPos: 259 } },
                    { id: 'c1001', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 103, height: 46, xPos: 315, yPos: 295 } },
                
                    { id: 'c1703', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 116, height: 37, xPos: 448, yPos: 46 } },
                    { id: 'c1603', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 116, height: 35, xPos: 448, yPos: 83 } },
                    { id: 'c1503', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 116, height: 35, xPos: 448, yPos: 118 } },
                    { id: 'c1403', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 116, height: 36, xPos: 448, yPos: 153 } },
                    { id: 'c1303', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 116, height: 35, xPos: 448, yPos: 189 } },
                    { id: 'c1203', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 116, height: 35, xPos: 448, yPos: 224 } },
                    { id: 'c1103', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 116, height: 35, xPos: 448, yPos: 259 } },
                    { id: 'c1004', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 111, height: 46, xPos: 451, yPos: 295 } }
                ]
            }, {
                id: 'north-outer-k2',
                direction: 'north',
                rect: {
                    moveToX: 50,
                    moveToY: 65,
                    lines: [
                        { x: 101, y: 103 },
                        { x: 122, y: 240 },
                        { x: 148, y: 264 },
                        { x: 139, y: 197 },
                        { x: 219, y: 264 },
                        { x: 222, y: 333 },
                        { x: 79, y: 200 }
                    ]
                },
                apartmentData: [
                    { id: 'd1902', room: 4, area: 75, price: 160500, fee: 3400, pdf: '#', status: 'available', rect: { width: 63, height: 34, xPos: 34, yPos: 22 } },
                    { id: 'd1804', room: 3, area: 45, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 63, height: 31, xPos: 34, yPos: 56 } },
                    { id: 'b1706', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 63, height: 31, xPos: 34, yPos: 87 } },
                    { id: 'b1606', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 63, height: 31, xPos: 34, yPos: 118 } },
                    { id: 'b1506', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 63, height: 31, xPos: 34, yPos: 149 } },
                    { id: 'b1406', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 63, height: 31, xPos: 34, yPos: 180 } },
                    { id: 'b1306', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 63, height: 31, xPos: 34, yPos: 211 } },
                    { id: 'b1206', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 63, height: 31, xPos: 34, yPos: 245 } },
                    { id: 'b1106', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 63, height: 31, xPos: 34, yPos: 276 } },
                    { id: 'b1006', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 63, height: 31, xPos: 34, yPos: 307 } },
                    
                    { id: 'b1901', room: 4, area: 75, price: 160500, fee: 3400, pdf: '#', status: 'available', rect: { width: 81, height: 34, xPos: 127, yPos: 22 } },
                    { id: 'b1803', room: 3, area: 45, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 81, height: 31, xPos: 127, yPos: 56 } },
                    { id: 'b1705', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 81, height: 31, xPos: 127, yPos: 87 } },
                    { id: 'b1605', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 81, height: 31, xPos: 127, yPos: 118 } },
                    { id: 'b1505', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 81, height: 31, xPos: 127, yPos: 149 } },
                    { id: 'b1405', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 81, height: 31, xPos: 127, yPos: 180 } },
                    { id: 'b1305', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 81, height: 31, xPos: 127, yPos: 211 } },
                    { id: 'b1205', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 81, height: 31, xPos: 127, yPos: 245 } },
                    { id: 'b1105', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 81, height: 31, xPos: 127, yPos: 276 } },
                    { id: 'b1005', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 81, height: 31, xPos: 127, yPos: 307 } },
                
                    { id: 'a1402', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 97, height: 33, xPos: 282, yPos: 176 } },
                    { id: 'a1302', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 97, height: 31, xPos: 282, yPos: 209 } },
                    { id: 'a1202', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 97, height: 31, xPos: 282, yPos: 240 } },
                    { id: 'a1102', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 97, height: 31, xPos: 282, yPos: 271 } },
                    { id: 'a1003', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 57, height: 40, xPos: 324, yPos: 302 } },
                    
                    { id: 'a1401', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 85, height: 33, xPos: 408, yPos: 176 } },
                    { id: 'a1301', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 85, height: 31, xPos: 408, yPos: 209 } },
                    { id: 'a1201', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 85, height: 31, xPos: 408, yPos: 240 } },
                    { id: 'a1101', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 85, height: 31, xPos: 408, yPos: 271 } },
                    { id: 'a1002', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 85, height: 40, xPos: 408, yPos: 302 } }
                ]
            },
            {
                id: 'north-inner-k2',
                direction: 'north',
                rect: {
                    moveToX: 231,
                    moveToY: 29,
                    lines: [
                        { x: 263, y: 45 },
                        { x: 271, y: 42 },
                        { x: 302, y: 56 },
                        { x: 302, y: 70 },
                        { x: 406, y: 116 },
                        { x: 387, y: 206},
                        { x: 245, y: 130 },
                        { x: 243, y: 64 },
                        { x: 231, y: 58 }
                    ]
                },
                apartmentData: []
            }
            ];
        }

        function renderSection(section, clear) {
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

        function mouseoverBirdeye(ev) {
            var section = isInsideSection(ev);
            if (section) {
                renderSection(section);
            }
        };

        function clickBirdeye(ev) {
            clearApartments();
            var section = isInsideSection(ev);
            if (section) {
                currentActiveSection = section;
                renderSection(section);
                return section;
            }
        };

        function isInsideSection(ev) {
            var context = birdeyeCtx;
            var x = getMouseXPos(ev);
            var y = getMouseYPos(ev);

            for (var i = 0; i < sections.length; i++) {
                var s = sections[i];
                if (s.direction !== currentActiveSection.direction) {continue; }
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
                    renderSection(currentActiveSection);
                }

                if (isInsidePoly(s.rect.lines.length + 1, vertx, verty, x, y)) {
                    return s;
                }
            }
            return false;
        }

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
                    return 'Tillgänglig';
                case 'reserved':
                    return 'Reserverad';
                case 'sold':
                    return 'Såld';
                default:
                    return '';
            }
        }

        function mouseoverApt(ev) {
            var x = getMouseXPos(ev);
            var y = getMouseYPos(ev);
            var apartments = currentActiveSection.apartmentData;

            if (apartments) {
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
            }

            return null;
        };

        function getMouseXPos(ev) {
            var x;
            if (ev.offsetX || ev.offsetX == 0) {
                x = ev.offsetX;
            } else if (ev.layerX || ev.layerX == 0) {
                x = ev.layerX - this.offsetLeft;
            }
            document.getElementById("xPos").innerHTML = 'X: ' + x;
            return x;
        };

        function getMouseYPos(ev) {
            var y;
            if (ev.offsetY || ev.offsetY == 0) {
                y = ev.offsetY;
            } else if (ev.layerY || ev.layerY == 0) {
                y = ev.layerX - this.offsetLeft;
            }
            document.getElementById("yPos").innerHTML = 'Y: ' + y;
            return y;
        };

        function viewToggle(direction) {
            clearSections();
            if (direction === 'south') {
                currentActiveSection = sections[0];
            } else {
                currentActiveSection = sections[2];
            }
        }

        function clearApartments() {
            ctx.clearRect(0, 0, 570, 344);
        }

        function clearSections() {
            birdeyeCtx.clearRect(0, 0, 570, 354);
        }
    }
})();