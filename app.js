var typed = new Typed(".auto-type",{
    strings: ["Photographer","Videographer","Editor"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  })

const observer1 = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => { 
      console.log(entry)
       if (entry.isIntersecting) {
         entry.target.classList.add('show');
         } else {
           entry.target.classList.remove('show'); 
           }
       });
   });
   
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer1.observe(el));

// Function to be called when the element enters or leaves the viewport
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the CSS class to trigger the effect
        entry.target.classList.add('animate-effect');
      } else {
        // Remove the CSS class to revert the effect
        entry.target.classList.remove('animate-effect');
      }
    });
  }
  
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  
  // Observe the element you want to trigger the effect on
  const workElements = document.querySelectorAll('.work');
  workElements.forEach((element) => {
    observer.observe(element);
  });


  const observer2 = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => { 
      console.log("service entered")
       if (entry.isIntersecting) {
         entry.target.classList.add('service-animate');
         } else {
           entry.target.classList.remove('service-animate'); 
           }
       });
   });
   
const serviceElements = document.querySelectorAll('.service');
serviceElements.forEach((el) => observer2.observe(el));


  

  
  $("svg").click(function(){
  
  
    const linkElement = document.querySelector('link[href]');
    const csslyt = './stylelyt.css';
    const cssdark = './style.css';
  
    const logo = document.querySelector('nav img.logo');
    const newSrc = './images/lytlogo.png';
  
    const invy = document.querySelector('img[src="./images/Picsart_23-09-18_15-48-33-091.jpg"]');
    const invylyt = './images/Picsart_23-09-18_22-07-58-410.jpg';
  
    if (linkElement.getAttribute('href') === csslyt) {
      // Revert to the original state
      linkElement.setAttribute('href', cssdark);
      logo.setAttribute('src', './images/Add a heading.png');
      invy.setAttribute('src', './images/Picsart_23-09-18_15-48-33-091.jpg');
    } else {
      // Apply the changes
      linkElement.setAttribute('href', csslyt);
      logo.setAttribute('src', newSrc);
      invy.setAttribute('src', invylyt);
    }
  
  });
  
