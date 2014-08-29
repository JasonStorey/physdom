define(['cannon', 'world'], function(CANNON, world){
    function Body(element) {
        this.element = element;
        this.mass = 1;
        this.shape = new CANNON.Box(new CANNON.Vec3(100,100,100));
        this.rigidBody = new CANNON.RigidBody(this.mass, this.shape);
        this.rigidBody.position.set(0,0,0);
        world.add(this);
    }

    Body.prototype.render = function render() {
        var pos = this.rigidBody.position,
            rot = this.rigidBody.quaternion;

        this.element.style.transform = getCSSString(pos, rot);
//        console.log(this.rigidBody.position);
//        console.log(this.rigidBody.quaternion);
    };

    function getCSSString(pos, rot) {
        return 'translate3d(' + pos.x + 'px,' + (pos.z * -1) + 'px,' + pos.y + 'px)' +
               'rotate3d(' + rot.x + ',' + rot.y + ',' + rot.z + ',' + rot.w + 'rad)';
    }

    return Body;
});