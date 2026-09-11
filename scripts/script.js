// HERO IMAGES
// GRABBING THE HERO ELEMENT AND ITS CHILDREN
const hero = document.querySelector(".hero");
const items = hero.querySelectorAll("li");

// GOING THROUGH EACH ITEM AND RANDOMLY POSITIONING IT WITHIN THE HERO ELEMENT, WHILE AVOIDING THE CENTER AREA
items.forEach(item => {
    let x, y;
    // CALCULATING THE WIDTH AND HEIGHT OF THE ITEM IN PERCENTAGE OF THE HERO ELEMENT
    const itemWidth = item.offsetWidth / hero.clientWidth * 100;
    const itemHeight = item.offsetHeight / hero.clientHeight * 100;

    // HOW FAR ITEMS ARE ALLOWED TO SPILL PAST THE HERO EDGES (IN %)
    const overflowAmount = 15;

    // RANGE NOW GOES FROM NEGATIVE (past left/top edge) TO PAST THE RIGHT/BOTTOM EDGE
    x = -overflowAmount + Math.random() * (100 + overflowAmount * 2 - itemWidth);
    y = -overflowAmount + Math.random() * (100 + overflowAmount * 2 - itemHeight);

    // GENERATING RANDOM ROTATION AND SCALE TO EACH ITEM
    const rotation = Math.random() * 360;
    const scale = Math.random() * (1.2 - 0.9) + 0.9;

    // GENERATION RADNOM DURATION AND DELAY
    const delay = Math.random() * (3 - 0.3) + 0.3;
    const duration = Math.random() * (3 - 0.5) + 0.5;
    
    // APPLYING
    item.style.transition = `left ${duration}s ease ${delay}s, top ${duration}s ease ${delay}s`;
    item.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    item.style.left = `${x}%`;
    item.style.top = `${y}%`;
});

items.forEach(item => {

});


// END HERO IMAGES