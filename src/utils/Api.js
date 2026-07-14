class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "c774c627-8028-4f95-b060-1d47e3577177",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

export default Api;
