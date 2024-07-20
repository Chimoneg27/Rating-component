let ul = document.querySelector('ul');
let selectedLi;
let submitBtn = document.getElementById('submitBtn');
let ratingsValue;
let thankYouCard = document.getElementById('thankYou')
let ratingCard = document.getElementsByClassName('container')

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
        ratingCard[0].style.display = 'none'
        thankYouCard.style.display = 'flex'
}

submitBtn.addEventListener('click', submitRating);