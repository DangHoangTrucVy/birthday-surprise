/* =========================================
   PARTICLES
========================================= */

const particleContainer =
    document.getElementById(
        "particles"
    );


function createParticle() {

    const particle =
        document.createElement(
            "div"
        );

    particle.className =
        "particle";


    const size =
        Math.random() * 5 + 2;


    particle.style.width =
        `${size}px`;


    particle.style.height =
        `${size}px`;


    particle.style.left =
        `${Math.random() * 100}%`;


    particle.style.animationDuration =
        `${Math.random() * 10 + 8}s`;


    particle.style.animationDelay =
        `${Math.random() * 5}s`;


    particleContainer.appendChild(
        particle
    );

}


for (
    let i = 0;
    i < 45;
    i++
) {

    createParticle();

}


/* =========================================
   WISH MODAL
========================================= */

const wishButton =
    document.getElementById(
        "wishButton"
    );


const wishOverlay =
    document.getElementById(
        "wishOverlay"
    );


const closeButton =
    document.getElementById(
        "closeButton"
    );


const celebrateButton =
    document.getElementById(
        "celebrateButton"
    );


const celebration =
    document.getElementById(
        "celebration"
    );


const backButton =
    document.getElementById(
        "backButton"
    );


/* OPEN MODAL */

wishButton.addEventListener(
    "click",
    () => {

        wishOverlay.classList.add(
            "active"
        );

    }
);


/* CLOSE MODAL */

closeButton.addEventListener(
    "click",
    () => {

        wishOverlay.classList.remove(
            "active"
        );

    }
);


/* CLICK OUTSIDE */

wishOverlay.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            wishOverlay
        ) {

            wishOverlay.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================
   CELEBRATE
========================================= */

celebrateButton.addEventListener(
    "click",
    () => {

        wishOverlay.classList.remove(
            "active"
        );


        setTimeout(
            () => {

                celebration.classList.add(
                    "active"
                );


                createCelebrationParticles();

            },
            400
        );

    }
);


/* =========================================
   CELEBRATION PARTICLES
========================================= */

function createCelebrationParticles() {

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${Math.random() * 4 + 3}s`;


        particle.style.animationDelay =
            `${Math.random() * 2}s`;


        particleContainer.appendChild(
            particle
        );

    }

}


/* =========================================
   BACK
========================================= */

backButton.addEventListener(
    "click",
    () => {

        celebration.classList.remove(
            "active"
        );

    }
);


/* =========================================
   PHOTO PARALLAX
========================================= */

const photos =
    document.querySelectorAll(
        ".memory-photo"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        const mouseX =
            (
                event.clientX /
                window.innerWidth
            ) - 0.5;


        const mouseY =
            (
                event.clientY /
                window.innerHeight
            ) - 0.5;


        photos.forEach(
            (
                photo,
                index
            ) => {

                const movement =
                    8 +
                    (
                        index % 3
                    ) * 5;


                photo.style.marginLeft =
                    `${mouseX * movement}px`;


                photo.style.marginTop =
                    `${mouseY * movement}px`;

            }
        );

    }
);


/* =========================================
   RANDOM PHOTO FLOAT DELAYS
========================================= */

photos.forEach(
    (
        photo,
        index
    ) => {

        photo.style.animationDelay =
            `${index * 0.25}s`;

    }
);