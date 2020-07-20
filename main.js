$(document).ready(function(){
  
  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false    
  }); 
  
});

const onepoll = document.querySelector('#onepoll');
const twopoll = document.querySelector('#twopoll');
const a = document.querySelector('#firstpoll');
const b = document.querySelector('#secondpoll');


onepoll.onclick = function(){
    a.style.display = 'block';
    b.style.display = 'none';
}

twopoll.onclick = function(){
    a.style.display = 'none';
    b.style.display = 'block';
}
