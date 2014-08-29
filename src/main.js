define(['cannon', 'world', 'body'], function(CANNON, world, Body) {
    function init() {
        setInterval(function(){
            world.step(1.0/60.0);
        }, 1000.0/60.0);
    }

    return {
        Body: Body,
        init: init
    };
});