const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0,
        finalpos = 300;

    const id = setInterval(frame, 5);
    function frame() {
        // for (let pos = 0; pos == clearInterval(id); pos--) {
            if (pos == finalpos) {
                clearInterval(id);
                // if (pos == finalpos) {
                //     clearInterval(id);
                // } else {
                //     pos++;
                //     elem.style.bottom = pos + 'px';
                //     elem.style.right = pos + 'px';
                // }
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        // }
    }
}

btn.addEventListener('click', myAnimation);

    // function logger () {
    //     if (i === 3) {
    //         clearInterval(timerId);
    //     }
    //     console.log('lol');
    //     i++;
    // }

    // let id = setTimeout(function log () {
    //     console.log('Hello');
    //     id = setTimeout(log, 1000);
    // }, 1000);