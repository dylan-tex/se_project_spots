// Function to show input error messages
const showInputError = (formEl, inputElement, errorMessage) => {
  const errorMsgEl = formEl.querySelector(`#${inputElement.id}-error`);

  // If no error message element is found, exit the function
  if (!errorMsgEl) return;

  // Set the error message text
  errorMsgEl.textContent = errorMessage;

  // Ensure the error message is visible
  errorMsgEl.style.display = ""; // ensure it shows if previously hidden

  inputElement.classList.add("modal__input_type_error");
};

// Function to hide input error messages
const hideInputError = (formEl, inputElement) => {
  const errorMsgEl = formEl.querySelector(`#${inputElement.id}-error`);

  // If no error message element is found, exit the function
  if (!errorMsgEl) return;

  // Clear the error message text & hide the error message element
  errorMsgEl.textContent = "";
  errorMsgEl.style.display = "none";

  inputElement.classList.remove("modal__input_type_error");
};

// Function to check the validity of an input element
const checkInputValidity = (formEl, inputElement) => {
  //  Check if the input element is valid. If it is not valid, show the error message.
  //  If it is valid, hide any existing error message.
  if (!inputElement.validity.valid) {
    showInputError(formEl, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formEl, inputElement);
  }
};

// Function to determine if any input in the list is invalid
const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

// Function to toggle the state of the submit button
const toggleButtonState = (inputList, buttonEl) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonEl.disabled = true;
    buttonEl.classList.add("modal__submit-btn_disabled");
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.remove("modal__submit-btn_disabled");
  }
};

// Function to set event listeners on form inputs
const setEventListeners = (formEl) => {
  // Log the form element for debugging, which was passed as an argument
  console.log("Form element:", formEl);

  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));

  // Log the found input elements for debugging, which were declared above
  console.log("Found inputs:", inputList);

  const buttonElement = formEl.querySelector(".modal__submit-btn");

  // Log the button element for debugging
  console.log(buttonElement);

  // To - Do: Implement toggleButtonState function
  toggleButtonState(inputList, buttonElement);

  // Add input event listeners to each input element
  inputList.forEach((inputElement) => {
    // Log the "target" for debugging
    console.log("target");

    // Add the input event listener and its callback function and check validity of each input element
    inputElement.addEventListener("input", function () {
      // Log the input event for debugging
      console.log("input event");

      // Check the validity of the input element
      checkInputValidity(formEl, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// Form Validation Script
const enableValidation = () => {
  const formlist = document.querySelectorAll(".modal__form");

  formlist.forEach((formEl) => {
    setEventListeners(formEl);
  });
};

enableValidation();
