let Physics = require('./lib/physics'),
    PhysBody = require('./lib/phys-body'),
    PhysPlane = require('./lib/phys-plane');

let physBodies = [];

function init(config) {
    Physics.init({
        onStep: () => physBodies.map(physBody => physBody.render())
    });

    physBodies.map(physBody => Physics.addPhysBody(physBody));

    Physics.addPhysBody(createPhysPlane({
        position: Physics.createVector(0,0,-config.height)
    }));
    Physics.start();
}

function createPhysPlane(config) {
    return new PhysPlane(config);
}

function createPhysBody(config) {
    let body = new PhysBody(config);
    physBodies.push(body);
    return body;
}

module.exports = {
    init: init,
    createPhysBody: createPhysBody
};
