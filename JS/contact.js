function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

const questions = document.querySelectorAll('.questions');
const icon = document.querySelectorAll('.check');

questions.forEach(function(question){
    question.addEventListener('click',()=>{
        questions.forEach(function(check){
            check.classList.remove('active')
        })
        question.classList.add('active')
    })
});