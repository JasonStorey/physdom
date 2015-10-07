let Physics = require('./physics');

function PhysPlane({position:position}) {
    let bodyConfig = {
        mass: 0,
        shape: Physics.createPlane(),
        position: position
    };

    this._body = Physics.createBody(bodyConfig);
    this._body.quaternion.setFromAxisAngle(Physics.createVector(1,0,0), Math.PI / 2);
}

module.exports = PhysPlane;
