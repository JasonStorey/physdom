define(['cannon'], function(CANNON){
    function Body() {

    }

    Body.prototype.test = function test() {
        return 'hello, world'
    };

    return Body;
});