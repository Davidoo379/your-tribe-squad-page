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



// START CARROUSEL SCALING AND SPACING
// GRABBING CARROUSEL UL AND CARROUSEL LI 
const carrousel = document.querySelector('.profile-cards ul');
const carrouselItems = document.querySelectorAll('.profile-cards ul li');

console.log('carrousel element:', carrousel);
console.log('carrouselItems found:', carrouselItems.length);


function updateActiveItem() {
  const carrouselRect = carrousel.getBoundingClientRect();
  const carrouselCenter = carrouselRect.left + carrouselRect.width / 2;

  console.log('--- updateActiveItem fired ---');
  console.log('carrousel rect:', carrouselRect);
  console.log('carrousel center:', carrouselCenter);

  let closest = null;
  let closestDistance = Infinity;

  carrouselItems.forEach((item, i) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const distance = Math.abs(itemCenter - carrouselCenter);

    console.log(`item ${i}: center=${itemCenter.toFixed(1)}, distance=${distance.toFixed(1)}`);

    if (distance < closestDistance) {
      closestDistance = distance;
      closest = item;
    }
  });

  console.log('closest item:', closest);

  carrouselItems.forEach((item) => item.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

carrousel.addEventListener('scroll', () => {
  updateActiveItem();
});
window.addEventListener('resize', updateActiveItem);
updateActiveItem();
// END CAROUSEL AND SCALING AND SPACING

// GRID AND CARROUSEL SWITCH
// GRABBING BUTTONS
const carrouselButton = document.querySelector(".carrousel-button");
const gridButton = document.querySelector(".grid-button")

