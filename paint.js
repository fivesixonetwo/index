var paint = function () {
    this.canvas = null;
    this.context = null;
    this.width = 500;
    this.height = 400;

    this.color = '#0000000';
    this.linesize = 2;

    this.drawing=false;

    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);
        this.drawLine(10,10,100,100);

        this.listenEvent();
    }
    this.listenEvent = function () {
        this.canvas.addEventListener('mousedown', self.processMouseDown);
        this.canvas.addEventListener('mouseup', self.processMouseUp);
        this.canvas.addEventListener('mousemove', self.processMouseMove);
    }
    this.processMouseDown = function (event) {
        this.drawing = true;
    }
    this.processMouseUp = function (event) {
        this.drawing = false;
    }
    this.processMouseMove = function (event) {

    }
    this.drawLine = function (startX, startY, endX, endY) {
        this.context.beginPath();
        this.context.moveTo(startX, startY);
        this.context.lineTo(endX, endY);
        this.context.linesize=this.linesize;
        this.context.strokeStyle=this.color;
        this.context.stroke();
    }
}
var p = new paint();