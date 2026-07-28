// ========================================
// PERSONAL INFORMATION
// ========================================

// Đổi tên người bạn ở đây
const friendName = "Susan Jane";


// ========================================
// ELEMENTS
// ========================================

const fingerprintButton =
    document.getElementById(
        "fingerprintButton"
    );

const unlockStatus =
    document.getElementById(
        "unlockStatus"
    );

const progressContainer =
    document.getElementById(
        "progressContainer"
    );

const progressBar =
    document.getElementById(
        "progressBar"
    );

const unlockScreen =
    document.getElementById(
        "unlockScreen"
    );

const successScreen =
    document.getElementById(
        "successScreen"
    );

const birthdayScreen =
    document.getElementById(
        "birthdayScreen"
    );

const friendNameElement =
    document.getElementById(
        "friendName"
    );

const wishButton =
    document.getElementById(
        "wishButton"
    );

const wishPopup =
    document.getElementById(
        "wishPopup"
    );

const closePopup =
    document.getElementById(
        "closePopup"
    );

const celebrateButton =
    document.getElementById(
        "celebrateButton"
    );

const effectContainer =
    document.getElementById(
        "effectContainer"
    );


// ========================================
// SET FRIEND NAME
// ========================================

friendNameElement.textContent =
    friendName;


// ========================================
// FINGERPRINT UNLOCK
// ========================================

let holdTimer = null;

let progressTimer = null;

let progress = 0;

let isHolding = false;

let unlocked = false;


// ========================================
// START HOLD
// ========================================

function startHold(event) {

    if (unlocked) return;

    event.preventDefault();

    if (isHolding) return;

    isHolding = true;

    fingerprintButton.classList.add(
        "holding"
    );

    progressContainer.classList.add(
        "active"
    );

    unlockStatus.textContent =
        "Unlocking...";

    progress = 0;


    progressTimer = setInterval(
        () => {

            progress += 2;

            progressBar.style.width =
                progress + "%";


            if (progress >= 100) {

                clearInterval(
                    progressTimer
                );

                unlockSuccess();

            }

        },
        40
    );

}


// ========================================
// CANCEL HOLD
// ========================================

function cancelHold() {

    if (unlocked) return;

    isHolding = false;

    clearInterval(
        progressTimer
    );

    fingerprintButton.classList.remove(
        "holding"
    );

    progress = 0;

    progressBar.style.width =
        "0%";

    progressContainer.classList.remove(
        "active"
    );

    unlockStatus.textContent =
        "Touch & Hold";

}


// ========================================
// UNLOCK SUCCESS
// ========================================

function unlockSuccess() {

    if (unlocked) return;

    unlocked = true;

    fingerprintButton.classList.remove(
        "holding"
    );

    progressBar.style.width =
        "100%";

    unlockStatus.textContent =
        "ACCESS GRANTED ❤️";


    // Create transition particles

    createUnlockParticles();


    // Fade out unlock screen

    setTimeout(
        () => {

            unlockScreen.classList.remove(
                "active"
            );

            successScreen.classList.add(
                "active"
            );

        },
        600
    );


    // Go to birthday

    setTimeout(
        () => {

            successScreen.classList.remove(
                "active"
            );

            birthdayScreen.classList.add(
                "active"
            );

            createConfetti(60);

        },
        3000
    );

}


// ========================================
// MOUSE EVENTS
// ========================================

fingerprintButton.addEventListener(
    "mousedown",
    startHold
);

fingerprintButton.addEventListener(
    "mouseup",
    cancelHold
);

fingerprintButton.addEventListener(
    "mouseleave",
    cancelHold
);


// ========================================
// TOUCH EVENTS
// ========================================

fingerprintButton.addEventListener(
    "touchstart",
    startHold,
    {
        passive: false
    }
);

fingerprintButton.addEventListener(
    "touchend",
    cancelHold
);

fingerprintButton.addEventListener(
    "touchcancel",
    cancelHold
);


// ========================================
// UNLOCK PARTICLES
// ========================================

function createUnlockParticles() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );

        particle.className =
            "unlock-particle";

        particle.style.position =
            "fixed";

        particle.style.width =
            "6px";

        particle.style.height =
            "6px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            getRandomColor();

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.zIndex =
            "500";

        const angle =
            Math.random()
            * Math.PI
            * 2;

        const distance =
            100
            +
            Math.random()
            * 300;

        const x =
            Math.cos(angle)
            * distance;

        const y =
            Math.sin(angle)
            * distance;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%)",
                    opacity:
                        1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )`,
                    opacity:
                        0
                }

            ],

            {

                duration:
                    1200,

                easing:
                    "ease-out"

            }

        );


        effectContainer.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            1300
        );

    }

}


// ========================================
// OPEN WISH POPUP
// ========================================

wishButton.addEventListener(
    "click",
    () => {

        wishPopup.classList.add(
            "active"
        );

    }
);


// ========================================
// CLOSE POPUP
// ========================================

closePopup.addEventListener(
    "click",
    () => {

        wishPopup.classList.remove(
            "active"
        );

    }
);


// ========================================
// CLICK OUTSIDE
// ========================================

wishPopup.addEventListener(
    "click",
    (event) => {

        if (
            event.target === wishPopup
        ) {

            wishPopup.classList.remove(
                "active"
            );

        }

    }
);


// ========================================
// CELEBRATE
// ========================================

celebrateButton.addEventListener(
    "click",
    () => {

        wishPopup.classList.remove(
            "active"
        );

        createConfetti(
            200
        );

        createHeartExplosion();

    }
);


// ========================================
// CONFETTI
// ========================================

function createConfetti(
    amount
) {

    const colors = [

        "#c94f6d",

        "#ee9eae",

        "#f8dce2",

        "#ffffff",

        "#8f3048"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );

        confetti.className =
            "confetti";


        confetti.style.left =
            Math.random()
            * 100
            + "%";


        confetti.style.top =
            "-20px";


        confetti.style.background =
            colors[
                Math.floor(
                    Math.random()
                    * colors.length
                )
            ];


        confetti.style.animationDuration =

            2
            +
            Math.random()
            * 3
            +
            "s";


        confetti.style.animationDelay =

            Math.random()
            * 0.5
            +
            "s";


        effectContainer.appendChild(
            confetti
        );


        setTimeout(
            () => {

                confetti.remove();

            },
            5000
        );

    }

}


// ========================================
// HEART EXPLOSION
// ========================================

function createHeartExplosion() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );

        heart.innerHTML =
            "♡";


        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.color =
            getRandomColor();

        heart.style.fontSize =
            15
            +
            Math.random()
            * 20
            +
            "px";

        heart.style.zIndex =
            "500";


        const angle =
            Math.random()
            * Math.PI
            * 2;

        const distance =
            100
            +
            Math.random()
            * 250;

        const x =
            Math.cos(angle)
            * distance;

        const y =
            Math.sin(angle)
            * distance;


        heart.animate(

            [

                {

                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity:
                        1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.5)`,

                    opacity:
                        0

                }

            ],

            {

                duration:
                    1500,

                easing:
                    "ease-out"

            }

        );


        effectContainer.appendChild(
            heart
        );


        setTimeout(
            () => {

                heart.remove();

            },
            1600
        );

    }

}


// ========================================
// RANDOM COLORS
// ========================================

function getRandomColor() {

    const colors = [

        "#c94f6d",

        "#ee9eae",

        "#f8dce2",

        "#ffffff",

        "#8f3048"

    ];


    return colors[
        Math.floor(
            Math.random()
            * colors.length
        )
    ];

}