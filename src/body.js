define(['oimo', 'world'], function(OIMO, world) {

    function Body(element) {
        this.element = element;
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.offsetTop = this.element.offsetTop;
        this.offsetLeft = this.element.offsetLeft;
        this.shape = new OIMO.Body({
            type: 'box',
            size: [this.width, this.height, 100],
            pos: [this.offsetLeft + (this.width /2), this.offsetTop + (this.height / 2), 0],
            move: true,
            world: world.getWorld()
        });

        world.add(this);
    }

    Body.prototype.render = function render() {
        var matrix,
            m;

        if(this.shape.body.sleeping) {
            return;
        }

        matrix = this.shape.body.getMatrix();

        m =[matrix[0], matrix[1], matrix[2],  matrix[3],
            matrix[4], matrix[5], matrix[6],  matrix[7],
            matrix[8], matrix[9], matrix[10], matrix[11],
            matrix[12] - this.offsetLeft - (this.width / 2), matrix[13] - this.offsetTop - (this.height / 2), matrix[14], matrix[15] + 1];

        this.element.style.transform = 'matrix3d(' + m.toString() + ')';
    };

    return Body;
});