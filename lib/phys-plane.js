let Physics = require('./physics');

function PhysPlane({position:position}) {
    let bodyConfig = {
        mass: 0,
        shape: Physics.createPlane(),
        position: position
    };

    this._body = Physics.createBody(bodyConfig);
}

module.exports = PhysPlane;
