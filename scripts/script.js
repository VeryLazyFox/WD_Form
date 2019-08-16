buttonRegistration.addEventListener("click", () => {
  if (email.validity.valid && password.validity.valid && email.value != ''){
    firstForm.classList.add("display-none");
    secondForm.classList.remove("display-none");
  }
  if (email.value == ""){
    email.classList.add("error");
  }
  if (password.value == ""){
    password.classList.add("error");
  }
})
  
buttonSave.addEventListener("click", () => {
  if (selectHouse.value == ""){
    wrapperSelectHouse.classList.add("error");
  }
  if (username.value == ""){
    username.classList.add("error");
  }
})

email.addEventListener("click", removeError);
password.addEventListener("click", removeError);
username.addEventListener("click", removeError);
selectHouse.addEventListener("click", removeErrorParrent);
email.addEventListener("blur", firstValidation);
password.addEventListener("blur", firstValidation);
username.addEventListener("blur", firstValidation);

function firstValidation(event) {
  const elem = document.getElementById(event.target.id);
  elem.removeEventListener("blur", firstValidation);
  elem.classList.add("validation");
}

function removeError(event) {
  const elem = document.getElementById(event.target.id);
  elem.classList.remove("error");
}

function removeErrorParrent(event) {
  const elem = document.getElementById(event.target.id);
  elem.parentNode.classList.remove("error");
}