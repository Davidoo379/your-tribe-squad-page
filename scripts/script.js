// HERO IMAGES
// GRABBING THE HERO ELEMENT AND ITS CHILDREN
const hero = document.querySelector(".hero");
const items = hero.querySelectorAll("li");

// PARAMETERS FOR AVOIDING THE CENTER SO THAT THE TILE HAS SPACE
const avoidWidth = 10;
const avoidHeight = 10;

// PADDING TO THE TOP SO THE CARDS DON'T MOVE TO FAR
const paddingTop = 10;
const paddingBottom = 10;
const paddingLeft = -20;
const paddingRight = -20;

// DIVINING THE AREA TO AVOID IN PERCENTAGE OF THE HERO ELEMENT
const avoidArea = {
    left: (100 - avoidWidth) / 2,
    right: (100 + avoidWidth) / 2,
    top: (100 - avoidHeight) / 2,
    bottom: (100 + avoidHeight) / 2
};

// GOING THROUGH EACH ITEM AND RANDOMLY POSITIONING IT WITHIN THE HERO ELEMENT, WHILE AVOIDING THE CENTER AREA
items.forEach(item => {
    let x, y;
    // CALCULATING THE WIDTH AND HEIGHT OF THE ITEM IN PERCENTAGE OF THE HERO ELEMENT
    const itemWidth = item.offsetWidth / hero.clientWidth * 100;
    const itemHeight = item.offsetHeight / hero.clientHeight * 100;

    // GENERATING RANDOM X AND Y COORDINATES UNTIL THEY ARE OUTSIDE THE AVOID AREA
    do {
        // KEEP GENERATING RANDOM X AND Y COORDINATES UNTIL THEY ARE OUTSIDE THE AVOID AREA
        x = paddingLeft + Math.random() * (
            100 - paddingLeft - paddingRight - itemWidth
        );

        y = paddingTop + Math.random() * (
            100 - paddingTop - paddingBottom - itemHeight
        );

    } while (
        // CHECKING IF THE ITEM IS WITHIN THE AVOID AREA IF SO KEEP GENERATING NEW COORDINATES
        x < avoidArea.right &&
        x + itemWidth > avoidArea.left &&
        y < avoidArea.bottom &&
        y + itemHeight > avoidArea.top
    );

    // GENERATING RANDOM ROTATION AND SCALE TO EACH ITEM
    const rotation = Math.random() * 360;
    const scale = Math.random() * (1.2 - 0.9) + 0.9;

    // APPLYING THE RANDOM ROTATION, SCALE, AND POSITION TO EACH ITEM
    item.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    item.style.left = `${x}%`;
    item.style.top = `${y}%`;
});
// END HERO IMAGES