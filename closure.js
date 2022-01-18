var createTimer = function() {
    var time = 10;

    return function timeDown() { // return the timeDown function object
        time -= 1;
        console.log(time);
    };
};
var timer = createTimer();
timer();
timer();
timer();