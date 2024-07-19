let ul = document.querySelector('ul');
let selectedLi;
let submitBtn = document.getElementById('submitBtn');
let ratingsValue;

const submitRating = () => {
    // console.log(ratings)
}

ul.onclick =  function(e) {
    if(e.target.tagName != 'LI') return;
    selected(e.target);
}

const selected = (li) => {
    if(selectedLi) {
        selectedLi.classList.remove('rated');
    }

    selectedLi = li;
    selectedLi.classList.add('rated');
}

submitBtn.addEventListener('click', submitRating);