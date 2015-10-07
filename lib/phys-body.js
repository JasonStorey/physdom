let Physics = require('./physics');

let defaultArgs = {
    element: false,
    mass: 5,
    shape: Physics.createSphere(50),
    position: [0,0,0]
};

function PhysBody({element:element, mass:mass, shape:shape, position:position} = defaultArgs) {
    this.element = element || defaultArgs.element;

    let width = this.element.offsetWidth,
        height = this.element.offsetHeight,
        offsetTop = this.element.offsetTop,
        offsetLeft = this.element.offsetLeft;

    this.startDomPosition = Physics.createVector(offsetLeft + (width /2), offsetTop + (height / 2), 0);

    let bodyConfig = {
        position: Physics.createVector(this.startDomPosition.x, this.startDomPosition.y, this.startDomPosition.z),
        mass: mass !== undefined ? mass : defaultArgs.mass,
        shape: shape || defaultArgs.shape,
        allowSleep: true,
        sleepSpeedLimit: 0.5,
        sleepTimeLimit: 1
    };

    this._body = Physics.createBody(bodyConfig);
}

PhysBody.prototype.reset = function reset() {

};

PhysBody.prototype.addForce = function addForce(x, y, z) {

};

PhysBody.prototype.render = function render() {

    if(this._body.sleepState === 2) {
        return;
    }

    let transformString = 'translate3d(' +
        (this._body.position.x - this.startDomPosition.x) + 'px,' +
        (this._body.position.y - this.startDomPosition.y) + 'px,' +
        (this._body.position.z - this.startDomPosition.z) + 'px)';

    this.element.style.transform = transformString;

    console.log(this._body.position.toString());
    // hack to make chrome repaint elem
    let prevDisplayStyle = this.element.style.display;
    this.element.style.display = 'none';
    this.element.offsetHeight;
    this.element.style.display = prevDisplayStyle;
};

module.exports = PhysBody;
