/* Show Menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav= document.getElementById(navId);

    if (toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

const closeMenu = (closeId, navId) => {
    const close = document.getElementById(closeId);
    const nav= document.getElementById(navId);
    if(close && nav){
        close.addEventListener('click', () => {
            nav.classList.toggle('close')
        })

    }

}


showMenu('nav-toggle','top-nav')
closeMenu('nav-close', 'top-nav')


/* Remove Menu */
const navLink = document.querySelectorAll('.navLink');
const navMenu = document.getElementById('top-nav');

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll selector */
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('topNav a[href*=' + sectionId + ']').classList.add('active')
        }
        else{
            document.querySelector('topNav a[href*=' + sectionId + ']').classList.remove('active')

        }
    })
}

function testFunction(){
    return "./product.html"
}
