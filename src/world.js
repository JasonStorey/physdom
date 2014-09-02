define(['cannon'], function(CANNON) {
    var _world,
        bodies = [];

    _world = new CANNON.World();
    _world.gravity.set(0,0,-100);
    _world.broadphase = new CANNON.NaiveBroadphase();

    function add(body) {
        bodies.push(body);
        _world.add(body.rigidBody);
    }

    function step(dt) {
        _world.step(dt);
        bodies.forEach(function(body){
            body.render();
        });
    }

    function addBoundary(y) {
        var boundaryShape,
            boundaryBody;
        boundaryShape = new CANNON.Plane();
        boundaryBody = new CANNON.RigidBody(0, boundaryShape);
        boundaryBody.position.set(0,0,y * -1);
        _world.add(boundaryBody);
    }

    return {
        step: step,
        add: add,
        addBoundary: addBoundary
    };
});