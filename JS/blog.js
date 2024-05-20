// window.addEventListener('scroll', ()=>{
//     const head = document.querySelector('.head');
//     const position = window.scrollY;

//     if(position > 0){
//         head.style.position = 'fixed'
//     }else{
//         head.style.position='static'
//     }
// });
const elementTarget = document.getElementById('input');
const titles = document.querySelectorAll('.postTitle');
const reportContainer = document.querySelector('.report')
const search_icon =document.getElementById('search');



search_icon.addEventListener('click', () => {
    if (elementTarget.value.trim() !== '') { 
        // Check if the input value is not empty
        // Loop through titles
        titles.forEach(title => {
            if (title.textContent.toLowerCase().includes
            (elementTarget.value.toLowerCase())) {
                // const report = document.createElement('div');
                // const text = document.createElement('h3');
                // text.textContent = title.textContent;
                // reportContainer.appendChild(report);
                // report.appendChild(text);
                title.parentElement.style.display='block';
            }else{
                title.parentNode.parentNode.style.display = 'none'
            }
        });
    }
});
elementTarget.addEventListener('keyup', e =>{
    titles.forEach(title =>{
        if(title.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
            title.parentNode.style.display = 'block';
        }else{
            title.parentNode.parentNode.style.display = 'none'
        }
    })
})
elementTarget.addEventListener('keyup', e=>{
    if(e.key === "Backspace"){
        titles.forEach(title =>{
            if(title.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                title.parentNode.style.display = 'block';
            }else{
                title.parentNode.style.display = 'none'
            }
        })
    }
})