const header = document.querySelector('#main-header');
const logo = document.querySelector('.logo');
const darkLogo = document.querySelector('.dark-logo');
const accordianButtons = document.getElementsByClassName('accordian__button');
const signUp = document.getElementById('sign-up');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close');

window.onscroll = function(){
    fixedHeader();
}

function fixedHeader(){
    if(document.body.scrollTop >=720 || document.documentElement.scrollTop >= 720)
    {
        header.classList.add('header__colored');
        logo.classList.add('remove-logo');
        darkLogo.classList.add('show-logo');
    }   
    else{
        header.classList.remove('header__colored');
        darkLogo.classList.remove('show-logo');
        logo.classList.remove('remove-logo');
    } 
}


// accordian
for(let i=0; i<accordianButtons.length;i++)
{

    accordianButtons[i].addEventListener('click',function(){

        for(let j = 0; j < accordianButtons.length; j++) {
            
            if(j!=i)
            {
                accordianButtons[j].nextElementSibling.style.maxHeight = null;
                accordianButtons[j].classList.remove('active');
            }
    
        }
       
        this.classList.toggle('active');

        let panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// modal
signUp.addEventListener('click',function(){
    let emailInputValue = document.getElementById('email').value;
    if(emailInputValue)
    {
        document.getElementById('emailId').innerHTML = emailInputValue;
        modal.style.display = 'block';    
        document.getElementById('email').value = '';
        document.body.style.overflow = 'hidden';
    }

});
    
closeModal.addEventListener('click',function(){
       modal.style.display = 'none';
       document.body.style.overflow = '';
})


// carousel
let width = 340;
let count = 3;

const carouselContent = document.getElementById('carousel__content');
const list = carouselContent.querySelector('ul');
const listElements = carouselContent.querySelectorAll('li');
let position = 0;

carouselContent.querySelector('.prev').onclick = function(){
    position += width*count;
    position = Math.min(position,0);
    list.style.marginLeft = position+'px'; 
}

carouselContent.querySelector('.next').onclick = function(){
    position -= width * count;
    position = Math.max(position, -width * (listElements.length - count));
    list.style.marginLeft = position + 'px'; 
}