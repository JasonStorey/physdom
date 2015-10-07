let CANNON = require('CANNON');
let world;
let onStep;

function init(config) {
    onStep = config.onStep;
    world = new CANNON.World();
    world.gravity.set(0, 1000, 0);
    world.allowSleep = true;
}

function createSphere(radius) {
    return new CANNON.Sphere(radius);
}

function createPlane() {
    return new CANNON.Plane();
}

function createBody(config) {
    return new CANNON.Body(config);
}

function addPhysBody(physBody) {
    world.add(physBody._body);
}

function start() {
    let fixedTimeStep = 1.0 / 60.0; // seconds
    let maxSubSteps = 3;

    let lastTime;
    (function simloop(time){
        requestAnimationFrame(simloop);
        if(lastTime !== undefined){
            var dt = (time - lastTime) / 1000;
            world.step(fixedTimeStep, dt, maxSubSteps);
        }
        lastTime = time;
        onStep();
    })();
}

module.exports = {
    init: init,
    start: start,
    createBody: createBody,
    createSphere: createSphere,
    createPlane: createPlane,
    addPhysBody: addPhysBody,
    createVector: (x,y,z) => new CANNON.Vec3(x,y,z),
    createQuaternion: (x,y,z,w) => new CANNON.Quaternion(x,y,z,w)
};
