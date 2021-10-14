'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// What we did above is store all of those HTML classes inside Javascript variables for easy access.

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// A function that would remove the hidden class from the modal and overlay, basically displaying both the modal and
// the overlay.

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// A function that would add the hidden class to the modal and the overlay, basically going back to how things were.

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// A loop that would execute a code upon clicking 3 different buttons, and the code in this case is opening the Modal.
// The reason loop was used is precisely because we're pressing 3 different buttons.

btnClosedModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close modal when the X is clicked, and close the modal when the overlay is clicked.

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Add an event listener to the entire page for when a key is pressed down, and if that key is escape, then close the
// modal.
