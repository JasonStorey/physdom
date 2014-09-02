define(['oimo'], function(OIMO) {
    var _world,
        bodies = [],
        boundaries = [];

    _world = new OIMO.World(1.0/60.0);
    _world.gravity = new OIMO.Vec3(0, 9.80665, 0);

    function add(body) {
        bodies.push(body);
    }

    function step(timeStep) {
        _world.step(timeStep);
        bodies.forEach(function(body){
            body.render();
        });
    }

    function addBoundary(y) {
        var boundary = new OIMO.Body({
            size: [100000000, 100, 100000000000000],
            pos: [0, y + 50, 0],
            world: _world,
            move: false
        });
        boundaries.push(boundary);
    }

    function getWorld() {
        return _world;
    }

    return {
        step: step,
        add: add,
        addBoundary: addBoundary,
        getWorld: getWorld
    };
});