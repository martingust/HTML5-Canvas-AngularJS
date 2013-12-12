(function () {
    'use strict';

    var serviceId = 'datacontext';
    
    angular.module('aptFinderApp').factory(serviceId, ['$http', datacontext]);

    function datacontext($http) {
        
        var service = {
            getData: getData
        };

        return service;

        function getData() {
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
                        { x: 387, y: 206 },
                        { x: 245, y: 130 },
                        { x: 243, y: 64 },
                        { x: 231, y: 58 }
                    ]
                },
                apartmentData: [
                    { id: 'c1702', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 145, height: 35, xPos: 3, yPos: 42 } },
                    { id: 'c1602', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 145, height: 35, xPos: 3, yPos: 77 } },
                    { id: 'c1502', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 145, height: 36, xPos: 3, yPos: 112 } },
                    { id: 'c1402', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 145, height: 36, xPos: 3, yPos: 148 } },
                    { id: 'c1302', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 145, height: 36, xPos: 3, yPos: 184 } },
                    { id: 'c1202', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 145, height: 36, xPos: 3, yPos: 220 } },
                    { id: 'c1102', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 145, height: 36, xPos: 3, yPos: 256 } },
                    { id: 'c1002', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 97, height: 36, xPos: 3, yPos: 292 } },

                    { id: 'c1601', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 87, height: 35, xPos: 151, yPos: 77 } },
                    { id: 'c1501', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 87, height: 36, xPos: 151, yPos: 112 } },
                    { id: 'c1401', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 87, height: 36, xPos: 151, yPos: 149 } },
                    { id: 'c1301', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 87, height: 36, xPos: 151, yPos: 185 } },
                    { id: 'c1201', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 87, height: 36, xPos: 151, yPos: 220 } },
                    { id: 'c1101', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 87, height: 36, xPos: 151, yPos: 256 } },
                    { id: 'c1002', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 87, height: 36, xPos: 151, yPos: 292 } },

                    { id: 'd1601', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 67, height: 35, xPos: 256, yPos: 77 } },
                    { id: 'd1801', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 67, height: 36, xPos: 256, yPos: 112 } },
                    { id: 'd1404', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 67, height: 36, xPos: 256, yPos: 149 } },
                    { id: 'd1304', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 67, height: 36, xPos: 256, yPos: 185 } },
                    { id: 'd1204', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 67, height: 36, xPos: 256, yPos: 220 } },
                    { id: 'd1104', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 67, height: 36, xPos: 256, yPos: 256 } },
                    { id: 'd1001', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 67, height: 36, xPos: 256, yPos: 292 } },

                    { id: 'd1402', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 110, height: 36, xPos: 323, yPos: 112 } },
                    { id: 'd1304', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 110, height: 36, xPos: 323, yPos: 149 } },
                    { id: 'd1204', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 110, height: 36, xPos: 323, yPos: 185 } },
                    { id: 'd1104', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 110, height: 36, xPos: 323, yPos: 220 } },
                    { id: 'd1004', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 110, height: 36, xPos: 323, yPos: 256 } },
                    { id: 'd1004', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 110, height: 36, xPos: 323, yPos: 292 } },

                    { id: 'd1602', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 124, height: 35, xPos: 441, yPos: 77 } },
                    { id: 'd1502', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 124, height: 36, xPos: 441, yPos: 112 } },
                    { id: 'd1402', room: 4, area: 98, price: 170500, fee: 4500, pdf: '#', status: 'sold', rect: { width: 124, height: 36, xPos: 441, yPos: 149 } },
                    { id: 'd1302', room: 4, area: 67, price: 190500, fee: 5400, pdf: '#', status: 'available', rect: { width: 124, height: 36, xPos: 441, yPos: 185 } },
                    { id: 'd1202', room: 3, area: 87, price: 180500, fee: 3400, pdf: '#', status: 'reserved', rect: { width: 124, height: 36, xPos: 441, yPos: 220 } },
                    { id: 'd1102', room: 3, area: 67, price: 140500, fee: 3380, pdf: '#', status: 'reserved', rect: { width: 124, height: 36, xPos: 441, yPos: 256 } },
                    { id: 'd1002', room: 3, area: 56, price: 150500, fee: 6500, pdf: '#', status: 'sold', rect: { width: 113, height: 36, xPos: 452, yPos: 292 } }
                ]
            }
            ];

        }
    }
})();