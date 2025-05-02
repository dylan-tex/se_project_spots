const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// Ties the first element with class profile__edit-btn to the the variable profileEditButton
const profileEditButton = document.querySelector(".profile__edit-btn");

// Ties the element with class profile__add-btn to the the variable newPostButton
// when this button is hit it should trigger the opening of the addCarmFormElement (a new modal)
const newPostButton = document.querySelector(".profile__add-btn");

// Creates a Modal variable and assigns it the first element with the ID edit-profile-modal
const editProfileModal = document.querySelector("#edit-profile-modal");

// Creates the elements of the modal (close button and two inputs) and assigns them their respective values in the HTML file
const editProfileModalCloseBtn =
  editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);

// From stage 4 part 2
const editProfileForm = editProfileModal.querySelector(".modal__form");

const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

// From Stage 4 New Post Submission
// Creates the elements of the New Post Button (close button and two inputs) and assigns them their respective values in the HTML file
//newPostModal is a new modal
const newPostModal = document.querySelector("#new-post-modal");
const nameInput = newPostModal.querySelector("#new-post-link-input");
const linkInput = newPostModal.querySelector("#new-post-caption-input");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal() {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;

  editProfileModal.classList.add("modal_is-opened");
}

function openNewPostModal() {
  newPostModal.classList.add("modal_is-opened");
}

function closeModal() {
  editProfileModal.classList.remove("modal_is-opened");
}

function closeNewPostModal() {
  newPostModal.classList.remove("modal_is-opened");
}

profileEditButton.addEventListener("click", openModal);
editProfileModalCloseBtn.addEventListener("click", closeModal);

newPostButton.addEventListener("click", openNewPostModal);
newPostCloseBtn.addEventListener("click", closeNewPostModal);

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  editProfileModal.classList.remove("modal_is-opened");
}

// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  /* this is useful to determine if the newPostModal is working properly*/

  console.log(nameInput.value);
  console.log(linkInput.value);
  closeNewPostModal();
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostModal.addEventListener("submit", handleAddCardSubmit);
