
//Toggle Menu Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');


window.onscroll = function() {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offSet=sec.offsetTop-100;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id')
        
        if(top>=offSet && top<offSet+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector(' header nav a[href*='+ id+']').classList.add('active');               
            })
            
        }
          

    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);  
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
