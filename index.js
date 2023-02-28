function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_tl65poi",
      "template_5zn5nfo",
      event.target,
      "eTzuZdfxIfX6r6HK7"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on michaelngcen@yahoo.com"
      );
    });
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

let contrastToggle = false;
function toggleContrast() {
  console.log("toggleContrast");
  contrastToggle = !contrastToggle;
  contrastToggle
    ? (document.body.classList += " dark-theme")
    : document.body.classList.remove("dark-theme");
}
