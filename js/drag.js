function setUpDragDemo() {
    var tool = new paper.Tool();

    //draw the squares
    var blueRect = new paper.Path.Rectangle( new paper.Point(0 , 0) , new paper.Size(400, 400));
    blueRect.fillColor = "blue";

    var greenRect = new paper.Path.Rectangle( new paper.Point(0 , 0) , new paper.Size(200, 200));
    greenRect.fillColor = "green";

    var lockDrag = new paper.Path.Rectangle( new paper.Point(250, 20) , new paper.Size(50, 50));
    lockDrag.fillColor = "red";

    var conventionalDrag = new paper.Path.Rectangle( new paper.Point(20 , 250) , new paper.Size(50, 50));
    conventionalDrag.fillColor = "orange";

    //set the background listeners
    greenRect.onMouseEnter = function(event) {
        greenRect.fillColor = "black";
    }

    greenRect.onMouseLeave = function(event) {
        greenRect.fillColor = "green";
    }

    blueRect.onMouseEnter = function(event) {
        blueRect.fillColor = "black";
    }

    blueRect.onMouseLeave = function(event) {
        blueRect.fillColor = "blue";
    }

    conventionalDrag.onMouseEnter = function(event) {
        conventionalDrag.fillColor = "black";
    }

    conventionalDrag.onMouseLeave = function(event) {
        conventionalDrag.fillColor = "orange";
    }

    lockDrag.onMouseEnter = function(event) {
        lockDrag.fillColor = "black";
    }

    lockDrag.onMouseLeave = function(event) {
        lockDrag.fillColor = "red";
    }

    //conventional dragging, here to demonstrate the difference between conventional dragging and lock dragging.
    conventionalDrag.onMouseDrag = function(event) {
        conventionalDrag.position = conventionalDrag.position.add(event.delta);
    }

    /**
     * Enables the rectangle to be moved by dragging.
     * The rectangle is "locked" for the time it is being dragged.
     * This enables the mouse listeners of the items behind the dragged item to be invoked.
     * This method overrides the global listeners, save them at the start and restore at the end if necessary.
     */
    lockDrag.onMouseDown = function(event) {
        console.log("down");
        var dragged = this;

        tool.onMouseMove = function(event){
            console.log("moved");
            if(dragged != null)
                dragged.position = dragged.position.add(event.delta);
        }

        tool.onMouseUp = function(event){
            console.log("up");
            dragged.locked = false;
            dragged = null;
            tool.off("mousemove");
            tool.off("mouseup");
        }
        this.locked = true;
    }

 
};