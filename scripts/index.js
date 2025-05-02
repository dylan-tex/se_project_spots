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

// Creates a Modal variable and assigns it the first element with the ID edit-profile-modal
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const profileEditButton = document.querySelector(".profile__edit-btn");
const editProfileModalCloseBtn =
  editProfileModal.querySelector(".modal__close-btn");

// Creates the elements of the New Post Button (close button and two inputs) and assigns them their respective values in the HTML file
//newPostModal is a new modal
const newPostModal = document.querySelector("#new-post-modal");
const nameInput = newPostModal.querySelector("#new-post-link-input");
const linkInput = newPostModal.querySelector("#new-post-caption-input");
const newPostButton = document.querySelector(".profile__add-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function editProfile() {
  openModal(editProfileModal);
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

profileEditButton.addEventListener("click", editProfile);
editProfileModalCloseBtn.addEventListener("click", () =>
  closeModal(editProfileModal)
);

newPostButton.addEventListener("click", () => openModal(newPostModal));
newPostCloseBtn.addEventListener("click", () => closeModal(newPostModal));

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  closeModal(editProfileModal);
}

// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  /* this is useful to determine if the newPostModal is working properly*/

  console.log(nameInput.value);
  console.log(linkInput.value);
  closeModal(newPostModal);
}

editProfileModal.addEventListener("submit", handleEditProfileSubmit);
newPostModal.addEventListener("submit", handleAddCardSubmit);
