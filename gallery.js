(function(){

    const gallery = [...document.querySelectorAll('.gtig__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });


    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentGtig = document.querySelector('.gtig__body--show').dataset.id;
        value = Number(currentGtig);
        value+= add;

        gallery[Number(currentGtig)-1].classList.remove('gtig__body--show');
        if(value === gallery.length+1 || value === 0){
            value = value === 0 ? gallery.length : 1;
        }

        gallery[value-1].classList.add('gtig__body--show');
    }

})();