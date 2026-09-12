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
const carrousel = document.querySelector('.profile-cards ul');
let carrouselItems = document.querySelectorAll('.profile-cards ul li');

// --- 1. Clone first & last items for seamless looping ---
const firstClone = carrouselItems[0].cloneNode(true);
const lastClone = carrouselItems[carrouselItems.length - 1].cloneNode(true);

carrousel.appendChild(firstClone);           // clone of first goes at the end
carrousel.insertBefore(lastClone, carrouselItems[0]); // clone of last goes at the start

// refresh the list now that clones exist
carrouselItems = document.querySelectorAll('.profile-cards ul li');

// --- 2. Start scrolled to the first REAL item (skip the prepended clone) ---
function scrollToItem(item, behavior = 'instant') {
  const itemLeft = item.offsetLeft - (carrousel.clientWidth - item.clientWidth) / 2;
  carrousel.scrollTo({ left: itemLeft, behavior });
}

// wait a tick so layout is calculated
requestAnimationFrame(() => scrollToItem(carrouselItems[1]));

// --- 3. Center-detection (same as before) ---
function updateActiveItem() {
  const carrouselRect = carrousel.getBoundingClientRect();
  const carrouselCenter = carrouselRect.left + carrouselRect.width / 2;

  let closest = null;
  let closestDistance = Infinity;

  carrouselItems.forEach((item) => {
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

  return closest;
}

// --- 4. Detect when we've scrolled onto a CLONE, then silently jump ---
let isJumping = false;

carrousel.addEventListener('scroll', () => {
  if (isJumping) return;

  const active = updateActiveItem();
  if (!active) return;

  const isFirstClone = active === carrouselItems[carrouselItems.length - 1]; // clone of first, appended at end
  const isLastClone = active === carrouselItems[0]; // clone of last, prepended at start

  if (isFirstClone) {
    isJumping = true;
    // jump to the REAL first item, no animation
    scrollToItem(carrouselItems[1], 'instant');
    setTimeout(() => { isJumping = false; }, 50);
  } else if (isLastClone) {
    isJumping = true;
    // jump to the REAL last item, no animation
    scrollToItem(carrouselItems[carrouselItems.length - 2], 'instant');
    setTimeout(() => { isJumping = false; }, 50);
  }
});

window.addEventListener('resize', updateActiveItem);