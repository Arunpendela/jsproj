const form = document.getElementById('reviewForm');
const reviewsDiv = document.getElementById('reviews');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const review = document.getElementById('review').value;

  const newReview = document.createElement('p');
  newReview.textContent = `${name} gave a rating of ${rating} with the following review: ${review}`;

  reviewsDiv.appendChild(newReview);

  // Clear the form
  form.reset();
});