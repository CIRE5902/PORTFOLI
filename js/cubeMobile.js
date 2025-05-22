    document.addEventListener("DOMContentLoaded", function () {
        const cube = document.querySelector(".cube");
        let touchStartX = 0;
        let touchEndX = 0;
        let currentFace = 1;

        const totalFaces = 6;

        function handleGesture() {
            if (touchEndX < touchStartX - 50) {
                // Swipe izquierda
                currentFace = (currentFace % totalFaces) + 1;
                updateCube();
            }

            if (touchEndX > touchStartX + 50) {
                // Swipe derecha
                currentFace = (currentFace - 2 + totalFaces) % totalFaces + 1;
                updateCube();
            }
        }

        function updateCube() {
            cube.className = "cube show-image-" + currentFace;
        }

        document.querySelector(".cube-container").addEventListener("touchstart", function (e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.querySelector(".cube-container").addEventListener("touchend", function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleGesture();
        });
    });
