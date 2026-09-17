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
  item.style.setProperty('--duration', duration);
  item.style.setProperty('--delay', delay);
  item.style.setProperty('--rotation', `${rotation}deg`);
  item.style.setProperty('--scale', scale);
  item.style.setProperty('--x', `${x}%`);
  item.style.setProperty('--y', `${y}%`);
});

items.forEach(item => {

});
// END HERO IMAGES



// START CARROUSEL SCALING AND SPACING
// GRABBING CARROUSEL UL AND CARROUSEL LI 
const carrousel = document.querySelector('.profile-cards ul');
const carrouselItems = document.querySelectorAll('.profile-cards ul li');

function updateActiveItem() {
  const carrouselRect = carrousel.getBoundingClientRect();
  if (window.matchMedia('(max-width: 40rem)').matches) {
    const carrouselCenter = carrouselRect.top + carrouselRect.height / 2;

    let closest = null;
    let closestDistance = Infinity;

    carrouselItems.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(itemCenter - carrouselCenter);


      if (distance < closestDistance) {
        closestDistance = distance;
        closest = item;
      }
    });
    carrouselItems.forEach((item) => item.classList.remove('active'));
    if (closest) closest.classList.add('active');

  } else {
    const carrouselCenter = carrouselRect.left + carrouselRect.width / 2;

    let closest = null;
    let closestDistance = Infinity;

    carrouselItems.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const distance = Math.abs(itemCenter - carrouselCenter);


      if (distance < closestDistance) {
        closestDistance = distance;
        closest = item;
      }
    });
    carrouselItems.forEach((item) => item.classList.remove('active'));
    if (closest) closest.classList.add('active');
  }
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

carrouselButton.addEventListener("click", enableCarrousel);
gridButton.addEventListener("click", enableGrid);

function enableGrid() {
  console.log("Turn on Grid")
  if (!carrousel.classList.contains('carrousel.classList')) {
    carrousel.classList.add('profile-cards-grid')
  }
}
function enableCarrousel() {
  console.log("Turn on Carrousel")
  carrousel.classList.remove('profile-cards-grid')
}