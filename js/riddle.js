document.addEventListener("DOMContentLoaded", () => {
    let speed, swing, rotation = 0,
        time, gravity = 1,
        length = 250,
        startAngle = 0;

    function startLampSwing() {
        time = 0;
        speed = 1;
        lampSwing();
    }

    function stopLampSwing() {
        clearTimeout(swing);
        document.getElementById("lamp").style.transition = "none";
        document.getElementById("lamp").style.transform = `rotate(${rotation}deg)`;
    }

    function lampSwing() {
        time += 1;
        if (Math.abs(startAngle) > 0.5) {
            rotation = Math.cos(Math.sqrt(gravity / length) * time) * startAngle;
            document.getElementById("lamp").style.transform = `rotate(${rotation}deg)`;

            startAngle *= 0.996;
            swing = setTimeout(lampSwing, 1000 / 60);
        } else {
            rotation = 0;
            document.getElementById("lamp").style.transform = `rotate(${rotation}deg)`;
        }
    }

    let mousedown = false,
        startDegree;
    document.querySelectorAll("#lamp .dragable").forEach((element) => {
        element.addEventListener("mousedown", (e) => {
            document.body.classList.add("dragging");

            const deltaX = window.innerWidth / 2 - e.pageX;
            const deltaY = 0 - e.pageY;
            const degree = Math.atan(deltaX / deltaY) * (180 / Math.PI);
            startDegree = rotation;

            mousedown = {
                start: {
                    x: e.pageX,
                    y: e.pageY,
                    deltaX,
                    deltaY,
                    degree
                },
                event: e
            };
            stopLampSwing();
        });
    });

    document.addEventListener("mousemove", (e) => {
        if (mousedown) {
            const deltaX = window.innerWidth / 2 - e.pageX;
            const deltaY = 0 - e.pageY;
            let degree = Math.atan(deltaX / deltaY) * (180 / Math.PI);

            degree = Math.min(Math.max(startDegree + (mousedown.start.degree - degree), -75), 75);
            document.getElementById("lamp").style.transform = `rotate(${degree}deg)`;
            startAngle = degree;

            checkLampPosition();
        }
    });

    document.addEventListener("mouseup", () => {
        if (mousedown) {
            document.body.classList.remove("dragging");
            mousedown = false;
            startLampSwing();
        }
    });

    function flicker() {
        toggleLamp();
        setTimeout(() => {
            toggleLamp();
        }, Math.round(Math.random() * 150 + 100));

        setTimeout(flicker, Math.round(Math.random() * 4000 + 100));
    }

    flicker();

    function toggleLamp() {
        document.getElementById("lamp").classList.toggle("off");
    }

    const bulbWrapper = document.querySelector('#lamp .bulb_wrapper');
    const info = document.querySelector('#secret-info');
    const trackRight = document.querySelector('#secret-track-right');
    const trackLeft = document.querySelector('#secret-track-left');

    function checkLampPosition() {
        const bulbRect = bulbWrapper.getBoundingClientRect();
        const infoRect = info.getBoundingClientRect();
        const trackRightRect = trackRight.getBoundingClientRect();
        const trackLeftRect = trackLeft.getBoundingClientRect();

        console.log(bulbRect);

        checkOverlap(bulbRect, infoRect, info);
        checkOverlap(bulbRect, trackRightRect, trackRight);
        checkOverlap(bulbRect, trackLeftRect, trackLeft);
    }

    function checkOverlap(bulbRect, elementRect, element) {
        const bulbBottom = Math.max(bulbRect.bottom, 0);
        const bulbTop = Math.max(bulbRect.top, 0);
        const bulbLeft = Math.max(bulbRect.left, 0);
        const bulbRight = Math.max(bulbRect.right, 0);

        const isOverlapping = !(bulbRight < elementRect.left || 
                                bulbLeft > elementRect.right || 
                                bulbBottom < elementRect.top || 
                                bulbTop > elementRect.bottom);

        if (isOverlapping) {
            element.classList.add('revealed');
        } else {
        }
    }

    document.addEventListener('mousemove', checkLampPosition);
});

document.addEventListener("DOMContentLoaded", () => {
    const cloudMessage = document.getElementById("message-cloud");
    const dog = document.querySelector('.main-dog');
    const curtainsTrigger = document.querySelector('#curtainsTrigger');

    dog.addEventListener('click', () => {
        cloudMessage.classList.add('show');
        curtainsTrigger.checked = !curtainsTrigger.checked;

        // setTimeout(() => {
        //     cloudMessage.classList.remove('show');
        // }, 3000); 
        
    });
});
