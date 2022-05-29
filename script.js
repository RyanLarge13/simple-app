 
 // card display functiom that animates the more button at the bottom of the page and displays the cards section
 const firstArticle = document.querySelector('.article-more');
 const moreButton = document.querySelector('#more-btn');
 
 
const moreButtonTag = document.querySelector('.more-sec-4-tag');


const cardDisplay = () => {

  if (firstArticle.style.height == '0vh') {
    firstArticle.style.transform = "scale(1, 1)";
    firstArticle.style.height = '200vh';
    moreButton.classList.add('rev');
    moreButton.style.animationName = ('more-btn-rev');
    moreButtonTag.textContent = 'CLOSE';
  }
  else if (firstArticle.style.height == '200vh') {
    firstArticle.style.transform = "scale(1, 0)";
    firstArticle.style.height = '0';
    moreButton.classList.remove('rev');
    moreButton.classList.add('fa-solid');
    moreButton.style.animationName = ('more-btn-ani');
    moreButtonTag.textContent = 'MORE';
  }
  else {
    firstArticle.style.transform = "scale(1, 1)";
    firstArticle.style.height = '200vh';
    moreButton.classList.add('rev');
    moreButton.classList.remove('more-btn');
    moreButton.style.animationName = ('more-btn-rev');
    moreButtonTag.textContent = 'CLOSE';
  }
}

// scroll effects//
const sectionElAnimations = () => {
  //nav variables
  const nav = document.querySelector('nav');

  //sec 2 variables 
  const secTwoHeading = document.querySelector('.sec-2 h2');
  const secTwoParagraph = document.querySelector('.sec-2 p');
  //section 3 variables
  const secThreeHeading = document.querySelector('.sec-3 h2');
  const secThreeParagraph = document.querySelector('.sec-3 p');
  //section 4 variables
  const secFourHeading = document.querySelector('.sec-4 h2');
  const secFourParagraph = document.querySelector('.sec-4-para');
  // nav link variables
  const nav1 = document.querySelector('.nav-list-1')
  const nav2 = document.querySelector('.nav-list-2')
  const nav3 = document.querySelector('.nav-list-3')
  //declairing scroll position Y
  let scrollPos = window.scrollY;
  
  if (scrollPos <= 500) {
    nav1.style.boxShadow = 'none';
  }

  if (scrollPos >= 500) {
   secTwoHeading.style.opacity = '1';
   secTwoParagraph.style.opacity = '1';
   secTwoParagraph.style.transform = 'translateX(0)';
   nav1.style.boxShadow = '0 0 .3em 0 rgba(0, 0, 0, .3)';
  }
  
  if (scrollPos <= 1200) {
    nav2.style.boxShadow = 'none';
  }
  
  if (scrollPos >= 1200) {
    secThreeHeading.style.opacity = '1';
    secThreeParagraph.style.opacity = '1';
    secThreeParagraph.style.transform = 'translateX(0)';
    nav1.style.boxShadow = 'none';
    nav2.style.boxShadow = '0 0 .3em 0 rgba(0, 0, 0, .3)';
  }
  
  if (scrollPos <= 2000) {
    nav3.style.boxShadow = 'none';
  }
  
  if (scrollPos >= 2000) {
    secFourHeading.style.opacity = '1';
    secFourParagraph.style.opacity = '1';
    secFourParagraph.style.transform = 'translateX(0)';
    nav2.style.boxShadow = 'none';
    nav3.style.boxShadow = '0 0 .3em 0 rgba(0, 0, 0, .3)';
  }
  
  if (scrollPos >= 3200) {
    nav3.style.boxShadow = 'none';
  }
  
  if (scrollPos <= 3474) {
    nav.style.backgroundColor = 'rgba(255, 255, 255, .2'
  }
  
  if (scrollPos >= 3475) {
    nav.style.backgroundColor = 'rgba(255, 255, 255, .6)';
  }
};

window.addEventListener("scroll", sectionElAnimations);


//onload animations and transitions
window.onload = secOneAppear = () => {
  //declairing sec 1 variables
  const secOneHeading = document.querySelector('.sec-1 h1');
  const secOneParagraph = document.querySelector('.sec-1 p');
  const secOneButton = document.querySelector('.intro-btn');
  
  //styles for variables
    secOneHeading.style.opacity = '1';
    secOneParagraph.style.opacity = '1';
    secOneParagraph.style.transform = 'translateX(0)';
    return;
};


//scroll into view function

const links = document.querySelectorAll("nav ul a");
const moreBtnLink = document.querySelector('.more-btn-link');

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}











// card dynamics
const cards = document.querySelectorAll('#card');
const eachCardHeading = document.querySelectorAll('#card h3');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('card-flip');
  });
});