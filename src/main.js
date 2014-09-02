define(['oimo', 'world', 'body'], function(OIMO, world, Body) {
    function init(config) {
        world.addBoundary(config.height);

        setInterval(function(){
            world.step();
        }, 1000.0/60.0);
    }

    return {
        Body: Body,
        init: init
    };
});