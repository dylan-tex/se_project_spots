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

// Selects the profile name and description elements from the HTML file
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Creates the elements of the Edit Profile Modal (close button and two inputs ) and assigns them the corresponding values in the first object with the class edit-profile-modal in the HTML file
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

// Creates the elements of the New Post Modal (close button and two inputs ) and assigns them the corresponding values in the first object with the class new-post-modal in the HTML file
const newPostModal = document.querySelector("#new-post-modal");
const captionInput = newPostModal.querySelector("#new-post-caption-input");
const linkInput = newPostModal.querySelector("#new-post-link-input");
const newPostButton = document.querySelector(".profile__add-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Selects the card template from the HTML file.
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Selects the container where the cards will be added.
const cardsList = document.querySelector(".cards__list");

// Function to create a card element from the template and populate it with data.
function getCardElement(data) {
  // Clone the card template.
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  // Populate the card with data.
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  return cardElement;
}

// Function to open a given modal.
function openModal(modal) {
  // Add a class to indicate the modal is opened.
  modal.classList.add("modal_is-opened");
}

// Function to open the edit profile modal and pre-fill the input fields with the current profile information.
function editProfile() {
  // Open the edit profile modal.
  openModal(editProfileModal);

  // Pre-fill the input fields with the current profile name and description.
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
}

// Function to close a given modal.
function closeModal(modal) {
  // Remove the class that indicates the modal is opened.
  modal.classList.remove("modal_is-opened");
}

// Event listeners for opening and closing the edit profile modal.
profileEditButton.addEventListener("click", editProfile);
editProfileModalCloseBtn.addEventListener("click", () =>
  closeModal(editProfileModal)
);

// Event listeners for opening and closing the new post modal.
newPostButton.addEventListener("click", () => openModal(newPostModal));
newPostCloseBtn.addEventListener("click", () => closeModal(newPostModal));

// Function to handle the submission of the edit profile form.
function handleEditProfileSubmit(evt) {
  evt.preventDefault();

  // Update the profile name and description with the input values.
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  // Close the edit profile modal.
  closeModal(editProfileModal);
}

// Function to handle the submission of the new post form.
function handleAddCardSubmit(evt) {
  // Prevent the default form submission behavior.
  evt.preventDefault();

  // Gather the input values into an object.
  const inputValues = {
    name: captionInput.value,
    link: linkInput.value,
  };

  // Create a card element using the getCardElement function.
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);

  closeModal(newPostModal);
}

// Attach the form submission handler to the edit profile form.
editProfileModal.addEventListener("submit", handleEditProfileSubmit);
newPostModal.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  // Creates a Card element for each item in the initialCards array.
  const cardElement = getCardElement(item);

  // Append the card element to the cards list.
  cardsList.append(cardElement);
});
