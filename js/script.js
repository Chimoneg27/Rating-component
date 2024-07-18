let ratings = document.getElementsByClassName('ratings');
let submitBtn = document.getElementById('submitBtn');

const submitRating = () => {
    console.log(ratings)
}

submitBtn.addEventListener('click', submitRating);