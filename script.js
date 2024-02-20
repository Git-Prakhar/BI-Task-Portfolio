let navbuttons = document.querySelectorAll('.navbuttons');
let navbar = document.querySelector('#navbar');
let value = 0;
let sec2buttons = document.querySelectorAll('.lines');
let sec2text = document.querySelectorAll('.sec2text');
let curtext = 0;

sec2buttons[0].style.opacity = '1';
sec2buttons[0].style.width = '47px';

document.addEventListener('scroll',()=>{
    value = scrollY;
    changeBold();
});

function changeBold(){
    if(value < 795){
        //Home
        navbuttons.forEach((ele) =>{
            ele.classList.remove('active')
        });
        navbuttons[0].classList.add('active');
        navbar.style.backgroundColor = 'var(--white)';
    }
    else if(value >= 795 && value < 1625){
        //About Me
        navbuttons.forEach((ele) =>{
            ele.classList.remove('active')
        });
        navbuttons[1].classList.add('active');
        navbar.style.backgroundColor = 'var(--lblue)';

    }else if(value >= 1625 && value < 2455){
        //Projects
        navbuttons.forEach((ele) =>{
            ele.classList.remove('active')
        });
        navbuttons[2].classList.add('active');
        navbar.style.backgroundColor = 'var(--white)';
    }else{
        //Contact
        navbuttons.forEach((ele) =>{
            ele.classList.remove('active')
        });
        navbuttons[3].classList.add('active');
        navbar.style.backgroundColor = 'var(--lblue)';
    }
}

function selection(id){
    if(id == 0){
        sec2buttons.forEach((ele) =>{
            ele.style.opacity = '0';
            ele.style.width = '0px';
        });
        sec2buttons[0].style.opacity = '1';
        sec2buttons[0].style.width = '47px';

        sec2text[curtext].style.left = '-700px';
        sec2text[curtext].style.opacity = '0';

        sec2text[0].style.left = '0px';
        sec2text[0].style.opacity = '1';
        
        curtext = 0;
    }else if(id == 1){
        sec2buttons.forEach((ele) =>{
            ele.style.opacity = '0';
            ele.style.width = '0px';
        });
        sec2buttons[1].style.opacity = '1';
        sec2buttons[1].style.width = '206px';
        sec2text[curtext].style.opacity = '0';
        sec2text[curtext].style.left = '-700px';
        sec2text[1].style.left = '0px';
        sec2text[1].style.opacity = '1';
        curtext = 1;
    }else if(id == 2){
        sec2buttons.forEach((ele) =>{
            ele.style.opacity = '0';
            ele.style.width = '0px';
        });
        sec2buttons[2].style.opacity = '1';
        sec2buttons[2].style.width = '126px';
        sec2text[curtext].style.left = '-700px';
        sec2text[curtext].style.opacity = '0';
        sec2text[2].style.left = '0px';
        sec2text[2].style.opacity = '1';
        curtext = 2;
    }
}