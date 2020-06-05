function View(canvas) {
    this.canvas = canvas;
    this.clicks = [];
}

View.prototype.handleClick = function(e) {
    var view = this;
    var x = e.offsetX;
    var y = e.offsetY;
    var pos = view.clicks.push({x: x, y: y, radius: 100})
}

View.prototype.updateDisplay = function() {
    var view = this;
    var context = view.canvas.getContext("2d");
    context.clearRect(0, 0, view.canvas.width, view.canvas.height);
    context.fillStyle = 'black';
    context.fillRect(0, 0, view.canvas.width, view.canvas.height);

    for (var i=0; i < view.clicks.length; i++) {
        var circle = view.clicks[i];
        view.drawCircle(context, 150, 150, 100, 1);
    }
};

View.prototype.drawCircle = function(context, x, y, radius, alpha) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = "rgba(" + x%256 + ", " + y%256  + ", " + (x * y % 256)+ " ," + alpha + ")";
    context.fill();
}