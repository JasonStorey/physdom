define(['cannon'], function(CANNON) {
    var _world,
        bodies = [];

    _world = new CANNON.World();
    _world.gravity.set(0,0,-90.82);
    _world.broadphase = new CANNON.NaiveBroadphase();

//    var groundShape = new CANNON.Plane();
//    var groundBody = new CANNON.RigidBody(0, groundShape);
//    _world.add(groundBody);

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

    return {
        step: step,
        add: add
    };
});