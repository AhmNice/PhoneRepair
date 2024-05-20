const navlist = document.querySelector('.navlist'),
menu_icon = document.getElementById('menu'),
close = document.getElementById('close'),
signBtn = document.querySelector('.signBtn'),
user_icon = document.querySelector('.user')

menu_icon.addEventListener('click', ()=>{
   if(navlist.classList.contains('close_nav')){
    navlist.classList.remove('close_nav');
    menu_icon.src="images/icons8-multiply-30.png";
    signBtn.classList.remove('active')
   }else{
    navlist.classList.add('close_nav')
    menu_icon.src="images/icons8-menu-30.png"
   }
});
user_icon.addEventListener('click', ()=>{
    if(signBtn.classList.contains('signBtn')){
        signBtn.classList.add('active')
        navlist.classList.add('close_nav');
        menu_icon.src="images/icons8-menu-30.png"
    }else{
        signBtn.classList.remove('active')
    }
});
close.addEventListener('click', ()=>{
    signBtn.classList.remove('active')
})

const container = document.querySelector('.testimonials');
	const slide_items = document.querySelectorAll('.testimony_item');
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	 let scroll_index = 0

	 function scrollimage(n){
	 	scroll_index += n;

	 	if (scroll_index < 1){
	 		scroll_index = 0;
	 	}
	 	if(scroll_index >= slide_items.length){
	 		scroll_index= slide_items.length - 1;
	 	}

	 	container.scrollTo({
	 		left:slide_items[scroll_index].offsetLeft,
	 		behavior:'smooth'
	 	})

	 }