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

/*console.log(initialCards);*/

// Ties the first element with class profile__edit-btn to the the variable profileEditButton
const profileEditButton = document.querySelector(".profile__edit-btn");

// Ties the element with class profile__add-btn to the the variable newPostButton
const newPostButton = document.querySelector(".profile__add-btn");

// Ties the first element with class profile__name to the the variable profileName
const profileName = document.querySelector(".profile__name");

// Ties the first element with class profile__description to the the variable profileDescription
const profileDescription = document.querySelector(".profile__description");

// Creates a Modal variable and assigns it the first element with the ID edit-profile-modal
const editModal = document.querySelector("#edit-profile-modal");

// Creates the elements of the modal (close button and two inputs) and assigns them their respective values in the HTML file
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

// From stage 4 part 2
const editProfileForm = editModal.querySelector(".modal__form");

const editProfileNameInput = editModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

// From Stage 4 New Post Submission
// Creates the elements of the New Post Button (close button and two inputs) and assigns them their respective values in the HTML file
const newPostCloseBtn = newPostButton.querySelector("modal__close-btn");
const addCardFormElement = document.querySelector("#new-post-modal");
const nameInput = addCardFormElement.querySelector("#new-post-link-input");
const linkInput = addCardFormElement.querySelector("#new-post-caption-input");

console.log(profileName);
console.log(editModalNameInput);

const ProfileNameEl = document.querySelector(".profile__name");
const ProfileDescriptionEl = document.querySelector(".profile__description");

function openModal() {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;

  editModal.classList.add("modal_opened");
}

function openNewPostModal() {
  addCardFormElement.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function closeNewPostModal() {
  addCardFormElement.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", openModal);
editModalCloseBtn.addEventListener("click", closeModal);

newPostButton.addEventListener("click", openNewPostModal);
//newPostCloseBtn.addEventListener("click", closeNewPostModal);

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  ProfileNameEl.textContent = editProfileNameInput.value;
  ProfileDescriptionEl.textContent = editProfileDescriptionInput.value;

  editModal.classList.remove("modal_opened");
}

// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  console.log(nameInput.textContent);
  console.log(linkInput.textContent);

  closeNewPostModal();
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);
