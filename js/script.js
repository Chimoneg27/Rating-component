let ul = document.querySelector('ul');
let selectedLi;
let submitBtn = document.getElementById('submitBtn');
let ratingsValue;

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
    ratingsValue = selectedLi.getAttribute('data-value')
}

const submitRating = () => {
    console.log(ratingsValue)
}

submitBtn.addEventListener('click', submitRating);