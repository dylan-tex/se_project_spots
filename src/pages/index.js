import "./index.css";
import Api from "../utils/Api.js";
import cardImagePlaceholder from "../images/card-image-placeholder.svg";
import {
  enableValidation,
  resetValidation,
  settings,
  toggleButtonState,
} from "../scripts/validation.js";

/* commenting out the initialCards array since we are now fetching the cards from the API instead of using hardcoded data
const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
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
*/

// Initialize the API instance
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "c774c627-8028-4f95-b060-1d47e3577177",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([userInfo, cards]) => {
    // Update the profile name and description with the fetched user info.
    profileNameEl.textContent = userInfo.name;
    profileDescriptionEl.textContent = userInfo.about;
    profileAvatarEl.src = userInfo.avatar;
    profileAvatarEl.alt = userInfo.name;

    // Create and append card elements for each item in the fetched cards array.
    cards.forEach(function (item) {
      const cardElement = getCardElement(item);
      cardsList.append(cardElement);
    });
  })
  .catch(console.error); // Log any errors that occur during the fetch operation

// Selects the profile name and description elements from the HTML file
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const profileAvatarEl = document.querySelector(".profile__avatar");
const avatarModalBtn = document.querySelector(".profile__avatar-edit-btn");
const avatarModal = document.querySelector("#avatar-modal");
const avatarForm = avatarModal.querySelector(".modal__form");
const avatarSubmitBtn = avatarModal.querySelector(".modal__submit-btn");
const avatarModalCloseBtn = avatarModal.querySelector(".modal__close-btn");
const avatarInput = avatarModal.querySelector("#profile-avatar-input");

// Creates the elements of the Edit Profile Modal (close button and two inputs ) and assigns them the corresponding values in the first object with the class edit-profile-modal in the HTML file
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);

const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);
const profileEditButton = document.querySelector(".profile__edit-btn");
const editProfileSubmitBtn = editProfileModal.querySelector(
  ".modal__submit-btn",
);
const editProfileModalCloseBtn =
  editProfileModal.querySelector(".modal__close-btn");

// Creates the elements of the New Post Modal (close button and two inputs ) and assigns them the corresponding values in the first object with the class new-post-modal in the HTML file
const newPostModal = document.querySelector("#new-post-modal");
const captionInput = newPostModal.querySelector("#new-post-caption-input");
const linkInput = newPostModal.querySelector("#new-post-link-input");
const newPostButton = document.querySelector(".profile__add-btn");
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostInputs = [captionInput, linkInput];

// Creates the elements of the Preview Modal (close button, image and caption) and assigns them the corresponding values in the first object with the class preview-modal in the HTML file
const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

// Selects the delete confirmation modal elements.
const deleteCardModal = document.querySelector("#delete-card-modal");
const deleteCardForm = deleteCardModal.querySelector(".modal__form");
const deleteCardModalCloseBtn = deleteCardModal.querySelector(
  ".modal__close-btn",
);
const deleteCardCancelBtn = deleteCardModal.querySelector(
  ".modal__cancel-btn",
);
const deleteCardSubmitBtn = deleteCardModal.querySelector(
  ".modal__submit-btn",
);

// Selects the card template from the HTML file.
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Selects the container where the cards will be added.
const cardsList = document.querySelector(".cards__list");
const modals = document.querySelectorAll(".modal");

let selectedCard = null;
let selectedCardId = null;

function handleDeleteCard(cardElement, data) {
  selectedCard = cardElement;
  selectedCardId = data._id;
  openModal(deleteCardModal);
}

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

  // Fall back to a local placeholder if the card image fails to load (e.g. broken link).
  cardImageEl.addEventListener("error", () => {
    cardImageEl.src = cardImagePlaceholder;
  });

  // Add event listener for the like button.
  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  cardLikeBtnEl.classList.toggle("card__like-btn_liked", data.isLiked);
  cardLikeBtnEl.addEventListener("click", () => {
    const isLiked = cardLikeBtnEl.classList.contains("card__like-btn_liked");
    const likeRequest = isLiked
      ? api.removeLike(data._id)
      : api.addLike(data._id);

    likeRequest
      .then((updatedCard) => {
        cardLikeBtnEl.classList.toggle(
          "card__like-btn_liked",
          updatedCard.isLiked,
        );
      })
      .catch(console.error);
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtnEl.addEventListener("click", () => {
    handleDeleteCard(cardElement, data);
  });

  // Add event listener for opening the preview modal when the card image is clicked.
  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = cardImageEl.src;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

// Function to open a given modal.
function openModal(modal) {
  // Add a class to indicate the modal is opened.
  modal.classList.add("modal_is-opened");
  // Add the Escape key listener when modal opens
  document.addEventListener("keydown", handleEscape);
}

// Function to open the edit profile modal and pre-fill the input fields with the current profile information.
function editProfile() {
  // Open the edit profile modal.
  openModal(editProfileModal);

  // Reset validation state for the edit profile modal.
  resetValidation(
    editProfileModal,
    [editProfileNameInput, editProfileDescriptionInput],
    settings,
  );

  // Pre-fill the input fields with the current profile name and description.
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
}

// Function to close a given modal.
function closeModal(modal) {
  // Remove the class that indicates the modal is opened.
  modal.classList.remove("modal_is-opened");
  // Remove the Escape key listener when modal closes
  document.removeEventListener("keydown", handleEscape);
}

function resetNewPostFormState() {
  resetValidation(newPostModal, newPostInputs, settings);
  toggleButtonState(newPostInputs, newPostSubmitBtn, settings);
}

function renderLoading(isLoading, button, defaultText, loadingText) {
  button.textContent = isLoading ? loadingText : defaultText;
}

// Event listeners for opening and closing the edit profile modal.
profileEditButton.addEventListener("click", editProfile);
editProfileModalCloseBtn.addEventListener("click", () =>
  closeModal(editProfileModal),
);

// Event listeners for opening and closing the preview modal.
previewModalCloseBtn.addEventListener("click", () => closeModal(previewModal));

// Event listeners for opening and closing the new post modal.
newPostButton.addEventListener("click", () => {
  //resetNewPostFormState(); this line was commented out so the form state would persist
  openModal(newPostModal);
});
newPostCloseBtn.addEventListener("click", () => closeModal(newPostModal));

// Event listeners for opening and closing the avatar modal.
avatarModalBtn.addEventListener("click", () => {
  //resetNewPostFormState(); this line was commented out so the form state would persist
  openModal(avatarModal);
});
avatarModalCloseBtn.addEventListener("click", () => closeModal(avatarModal));

// Event listeners for closing the delete confirmation modal.
deleteCardModalCloseBtn.addEventListener("click", () =>
  closeModal(deleteCardModal),
);
deleteCardCancelBtn.addEventListener("click", () =>
  closeModal(deleteCardModal),
);

// Close modal when clicking on the overlay background.
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
});

// Close the currently open modal when Escape is pressed
function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

// Function to handle the submission of the edit profile form.
function handleEditProfileSubmit(evt) {
  evt.preventDefault();

  const profileData = {
    name: editProfileNameInput.value,
    about: editProfileDescriptionInput.value,
  };

  renderLoading(true, editProfileSubmitBtn, "Save", "Saving...");
  api
    .editUserInfo(profileData)
    .then((userInfo) => {
      profileNameEl.textContent = userInfo.name;
      profileDescriptionEl.textContent = userInfo.about;
      closeModal(editProfileModal);
    })
    .catch(console.error)
    .finally(() => {
      renderLoading(false, editProfileSubmitBtn, "Save", "Saving...");
    });
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();

  renderLoading(true, avatarSubmitBtn, "Save", "Saving...");
  api
    .editAvatarInfo(avatarInput.value)
    .then((data) => {
      profileAvatarEl.src = data.avatar;
      closeModal(avatarModal);
    })
    .catch(console.error)
    .finally(() => {
      renderLoading(false, avatarSubmitBtn, "Save", "Saving...");
    });
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

  renderLoading(true, newPostSubmitBtn, "Save", "Saving...");
  api
    .addCard(inputValues)
    .then((cardData) => {
      const cardElement = getCardElement(cardData);
      cardsList.prepend(cardElement);
      closeModal(newPostModal);

      // Clear the new post form inputs after the card is saved.
      evt.target.reset();
      resetNewPostFormState();
    })
    .catch(console.error)
    .finally(() => {
      renderLoading(false, newPostSubmitBtn, "Save", "Saving...");
    });
}

function handleDeleteCardSubmit(evt) {
  evt.preventDefault();

  renderLoading(true, deleteCardSubmitBtn, "Delete", "Deleting...");
  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteCardModal);
      selectedCard = null;
      selectedCardId = null;
    })
    .catch(console.error)
    .finally(() => {
      renderLoading(false, deleteCardSubmitBtn, "Delete", "Deleting...");
    });
}

// Attach the form submission handler to the edit profile form.
editProfileModal.addEventListener("submit", handleEditProfileSubmit);
newPostModal.addEventListener("submit", handleAddCardSubmit);
avatarForm.addEventListener("submit", handleAvatarSubmit);
deleteCardForm.addEventListener("submit", handleDeleteCardSubmit);

enableValidation(settings);
