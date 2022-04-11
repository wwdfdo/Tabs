let tabs = document.querySelectorAll('.tab-btn');
let contents = document.querySelectorAll('.content');
let about = document.querySelector('.about');

about.addEventListener('click', e =>{
    let id = e.target.dataset.id;
    console.log(id);

    if(id){
        for(let tab of tabs){
            tab.classList.remove('active');
        }
        e.target.classList.add('active');

        for(let content of contents) {
            content.classList.remove('active');
        }

        const element = document.getElementById(id);
        element.classList.add('active');
        
       
    }

    



})
