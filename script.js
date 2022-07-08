const vh = document.querySelector('.sec-1').clientHeight;
 // card display functiom that animates the more button at the bottom of the page and displays the cards section
const firstArticle = document.querySelector('.article-more');
const moreButton = document.querySelector('#more-btn');
const moreButtonTag = document.querySelector('.more-sec-4-tag');
const wrapper = document.querySelector('.cards-wrapper');


const cardDisplay = () => {

  if (firstArticle.style.height == '0vh') {
    firstArticle.style.transform = "scale(1, 1)";
    firstArticle.style.height = '200vh';
    moreButton.classList.add('rev');
    moreButton.style.animationName = ('more-btn-rev');
    moreButtonTag.textContent = 'CLOSE';
  }
  else if (firstArticle.style.height == '200vh') {
    wrapper.style.opacity = '0';
    wrapper.style.transition = 'opacity 250ms linear';
    firstArticle.style.transform = "scale(1, 0)";
    firstArticle.style.height = '0';
    moreButton.classList.remove('rev');
    moreButton.classList.add('fa-solid');
    moreButton.style.animationName = ('more-btn-ani');
    moreButtonTag.textContent = 'MORE';
  }
  else {
    setTimeout(() => {
     wrapper.style.opacity = '1';
     wrapper.style.transition = 'opacity 2s'
    }, 1000)
    firstArticle.style.transform = "scale(1, 1)";
    firstArticle.style.height = '200vh';
    moreButton.classList.add('rev');
    moreButton.classList.remove('more-btn');
    moreButton.style.animationName = ('more-btn-rev');
    moreButtonTag.textContent = 'CLOSE';
    
    setTimeout(function() {
      firstArticle.scrollIntoView({block: 'start', inline: 'start', behavior: "smooth"});
    }, 600);
  }
}

// scroll effects//
const sectionElAnimations = () => {
  
  console.log(window.scrollY)
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
  
  //styles for variables
    secOneHeading.style.opacity = '1';
    secOneParagraph.style.opacity = '1';
    secOneParagraph.style.transform = 'translateX(0)';
    return;
};


//scroll into view function

const links = document.querySelectorAll("nav ul a");
const moreBtnLink = document.querySelector('.more-btn-link');

// card dynamics
const cards = document.querySelectorAll('#card');
let arrCards = Array.from(cards);

const cardBg = (e) => {
  
  for (let k = 0; k < cards.length; k++) {
    let cardClicked = e.target;
    
    if (cardClicked == cards[k]) {
      cards[k].classList.add('card-flip');
      cards[k].nextElementSibling.style.opacity = '1';
    } else if (cardClicked.classList.contains('card-flip')) {
      cards[k].classList.remove('card-flip');
      cards[k].nextElementSibling.style.opacity = '0';
    }
  }
};

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    card.classList.toggle('card-flip');
    cardBg(e);
  });
});

const cardBgBtn = document.querySelectorAll('.card-bg-btn');
let arrOfBgBtn = Array.from(cardBgBtn);

 const cardBtn = (e) => {
   
  for (let k = 0; k < cardBgBtn.length; k++) {
    cards[arrOfBgBtn.indexOf(e.target)].classList.remove('card-flip');
    cards[k].nextElementSibling.style.opacity = '0';
  }
};

cardBgBtn.forEach(btn => {
  btn.addEventListener('click', cardBtn)
  });
  
  //sample slider
  const sampleContainer = document.querySelector('.sample-product-container');
  const sampleSlider = document.querySelector('.sample-product-holder');
  const sampleProduct = document.querySelectorAll('.sample-product');
  const sampleDots = document.querySelectorAll('.sample-dots div');
  
  const move = (e) => {
    e.preventDefault();
    let left = e.pageX;
    let leftO = -2 * (206 - e.pageX) + 206;
    
    if (left > 100 && left < 300) {
      sampleDots[0].style.opacity = '.4';
      sampleDots[1].style.opacity = '1';
      sampleDots[2].style.opacity = '.4';
    }
    if (left > 300) {
      sampleDots[0].style.opacity = '1';
      sampleDots[1].style.opacity = '.4';
      sampleDots[2].style.opacity = '.4';
    }
    if (left < 100) {
      sampleDots[0].style.opacity = '.4';
      sampleDots[1].style.opacity = '.4';
      sampleDots[2].style.opacity = '1';
    }
    
    sampleSlider.style.left = left + 'px';
    sampleSlider.style.transition = 'none';
      
    if (left > 206) {
      sampleSlider.style.left = left * 2 + 'px';
      sampleProduct.forEach(item => {
        item.style.transform = 'translateX(-78%)'
    });
    }
      
    if (left < 206) {
      sampleSlider.style.left = leftO + 'px';
      sampleProduct.forEach(item => {
        item.style.transform = 'translateX(0)'
    });
    }
  }
  
  sampleContainer.addEventListener('pointermove', move);
  
  
  
  
  
  //switching between bodies
  //body 1
  const featuresBtn = document.querySelector('.intro-btn');
  const productBtn = document.querySelector('.products-btn');
  const aboutBtn = document.querySelector('.about-btn');
  const allBodies = document.querySelectorAll('#bodies');
  const bodyOne = document.querySelector('.body-1');
  const bodyTwo = document.querySelector('.body-2');
  const bodyThree = document.querySelector('.body-3');
  const bodyFour = document.querySelector('.body-4');
  
  allBodies.forEach(body => {
    body.style.transition = '750ms';
  });
  

  productBtn.addEventListener('click', () => {
    bodyThree.style.display = 'block';
    window.scrollTo(0, 0);
    bodyThree.style.top = '0vh';
    setTimeout(() => {
      bodyThree.style.right = '0';
      bodyOne.style.transform = 'translateX(100vw)';
    }, 750);
    setTimeout(() => {
      bodyOne.style.display = 'none';
    }, 1500);
    
    navListThree()
  });
  
  featuresBtn.addEventListener('click', () => {
    bodyTwo.style.display = 'block';
    setTimeout(() => {
      bodyTwo.style.right = '0';
      bodyOne.style.transform = 'translateX(-100vw)';
    }, 750);
    setTimeout(() => {
      bodyOne.style.display = 'none';
    }, 1500)
    
    navListTwo();
  });
  
  aboutBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyFour.style.display = 'block';
    setTimeout(() => {
      bodyFour.style.right = '0';
      bodyOne.style.transform = 'translateX(-100vw)';
    }, 750);
    setTimeout(() => {
      bodyOne.style.display = 'none';
    }, 1500)
    
    navListTwo();
  });
  
 
  
  //body 2
  const goBackToMainFrom2 = document.querySelector('.back-to-main-from-2');
  const goBackToMainFrom3 =
  document.querySelector('.back-to-main-from-3');
  const goBackToMainFrom4 = document.querySelector('.back-to-main-from-4');
  
  goBackToMainFrom2.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyOne.style.display = 'block';
    setTimeout(() => {
      bodyTwo.style.right = '-100vw';
      bodyOne.style.transform = 'translateX(0)';
    }, 750);
    setTimeout(() => {
      bodyTwo.style.display = 'none';
    }, 1500)
    
    navListMain();
  });
  
  goBackToMainFrom3.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyOne.style.display = 'block';
    setTimeout(() => {
      bodyThree.style.right = '100vw';
      bodyOne.style.transform = 'translateX(0)';
    }, 750);
    setTimeout(() => {
      window.scrollTo(0, vh );
      bodyThree.style.display = 'none';
    }, 1500)
    
    navListMain();
  });
  
  goBackToMainFrom4.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyOne.style.display = 'block';
    setTimeout(() => {
      bodyFour.style.right = '-100vw';
      bodyOne.style.transform = 'translateX(0)';
    }, 750);
    setTimeout(() => {
      window.scrollTo(0, vh * 2);
      bodyFour.style.display = 'none';
    }, 1500)
    
    navListMain();
  });
  
  
  
  //switching between nav list items
  const allNavItems = document.querySelectorAll('nav ul li');
  
  const navListMain = () => {
    allNavItems[0].firstChild.href = '#products';
    allNavItems[1].firstChild.href = '#about';
    allNavItems[2].firstChild.href = '#contact';
    allNavItems.forEach(link => {
      link.style.opacity = '0';
    });
    setTimeout(() => {
      allNavItems.forEach(link => {
        link.style.opacity = '1';
      });
      allNavItems[0].firstChild.innerHTML = 'Products';
      allNavItems[1].firstChild.innerHTML = 'About';
      allNavItems[1].firstChild.style.padding = '1em 1.3em';
      allNavItems[2].firstChild.innerHTML = 'Contact';
    }, 375);
  }
  
  
  const navListTwo = () => {
    allNavItems[0].firstChild.href = '#Subscribe';
    allNavItems[1].firstChild.href = '#YouTube';
    allNavItems[2].firstChild.href = '#Samples';
    
    allNavItems.forEach(link => {
      link.style.opacity = '0';
    });
    setTimeout(() => {
      allNavItems.forEach(link => {
        link.style.opacity = '1';
      });
      allNavItems[0].firstChild.innerHTML = 'Subscribe';
      allNavItems[1].firstChild.innerHTML = 'YouTube';
      allNavItems[1].firstChild.style.padding = '1em .5em'
      allNavItems[2].firstChild.innerHTML = 'Samples';
    }, 375);
  };
  
  const navListThree = () => {
    allNavItems[0].firstChild.href = '#main';
    allNavItems[1].firstChild.href = '#product-1';
    allNavItems[2].firstChild.href = '#product-2';
    
    allNavItems.forEach(link => {
      link.style.opacity = '0';
    });
    setTimeout(() => {
      allNavItems.forEach(link => {
        link.style.opacity = '1';
      });
      allNavItems[0].firstChild.innerHTML = 'Main';
      allNavItems[1].firstChild.innerHTML = 'One';
      allNavItems[2].firstChild.innerHTML = 'Two';
    }, 375);
  }