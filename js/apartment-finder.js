var AptFinder = function () {

    var ctx;
    var apartments = [];
    var aptTable;
    var highlightColor = {
        none: "rgba(255, 0, 255, 0.5)",
        available: "rgba(0, 153, 0, .5)",
        sold: "rgba(255, 9, 0, .5)",
        reserved: "rgba(255, 255, 0, .5)"
    };

    var render = function (canvasId, aptTableId, apartmentsObj) {
        var canvas = document.getElementById(canvasId);
        canvas.addEventListener('mousemove', mousemove);
        apartments = apartmentsObj;
        aptTable = document.getElementById(aptTableId);
        ctx = canvas.getContext('2d');
    };

    var mousemove = function(ev) {
        var x;
        var y;
        
        if (ev.offsetX || ev.offsetX == 0) {
            x = ev.offsetX;
            y = ev.offsetY;
        }else if (ev.layerX || ev.layerX == 0) {
            x = ev.layerX;
            y = ev.layerY;
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
            } else {
                renderApartment(a);
            }
        }
    };
    
    var renderApartment = function (apartment, hightlight) {;
        var r = apartment.rect;
        if (hightlight) {
            ctx.fillStyle = highlightColor[apartment.status];
            ctx.fillRect(r.xPos, r.yPos, r.width, r.height);
        } else {
            ctx.clearRect(r.xPos, r.yPos, r.width, r.height);
        }
    };

    return {
        render: render
    };
};


