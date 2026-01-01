const checkInputValidity = (formEl, inputElement) => {
  console.log(inputElement.validity);
};

const setEventListeners = (formEl) => {
  console.log("Form element:", formEl);
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  console.log("Found inputs:", inputList);
  const buttonElement = formEl.querySelector(".modal__submit-btn");

  console.log(inputList);
  console.log(buttonElement);
  // To - Do: Implement toggleButtonState function
  //toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    console.log("target");
    inputElement.addEventListener("input", function () {
      console.log("input event");
      checkInputValidity(formEl, inputElement);
      //toggleButtonState(inputList, buttonElement);
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
