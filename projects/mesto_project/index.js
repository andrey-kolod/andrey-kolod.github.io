import {
  editProfileButton,
  closeProfilePopupButton,
  addPictureButton,
  closePicturesPopupButton,
  overLay,
  editProfilePopup,
  saveProfileButton,
  addPicturesPopup,
  savePicturesButton,
  closeFullScreenPicturePopupButton,
  avatarPopupOpenElement,
  avatarPopup,
  avatarPopupCloseButton,
  saveAvatarButton,
  avatarInput,
  profileUserName,
  profileUserAbout,
  profileUserAvatar,
  placeNameField,
  placeLinkField,
  fullScreenPicturePopup,
} from "./src/components/constants.js";

import {
  openPopup,
  closePopup,
  getProfileInfo,
  closePopupOnClick,
  closePopupOnEsc,
  saveProfileInfo,
  saveFormInfoOnEnter,
  popupOverlay,
  savingButtonText,
  savedButtonText,
  uploadAvatar,
} from "./src/components/modal.js";

import {
  deletePictureButton,
  addPlaceInArray,
  addPlacesInHtml,
  addLike,
} from "./src/components/card.js";

import {
  enableValidation,
  submitButtonValidation,
} from "./src/components/validate.js";

import {
  getServerProfile,
  getServerCards,
  setServerProfile,
  addServerCard,
  setServerAvatar,
} from "./src/components/api.js";

// Перемещаем асинхронный код в IIAFE
let profileData; // Объявляем переменную без export

(async () => {
  try {
    profileData = await getServerProfile(); // Загружаем данные профиля
    setLocalProfile(profileData); // Устанавливаем данные профиля
  } catch (err) {
    console.error(`Что-то пошло не так: ${err}`);
  }
})();

// Функция для установки данных профиля
function setLocalProfile(profile) {
  profileUserName.textContent = profile.name;
  profileUserAbout.textContent = profile.about;
  profileUserAvatar.setAttribute("src", profile.avatar);
  getProfileInfo();
}

// Загрузка карточек мест с сервера
try {
  (async () => {
    const cards = await getServerCards();
    setLocalCards(cards);
  })();
} catch (err) {
  console.error(`Что-то пошло не так: ${err}`);
}

function setLocalCards(cards) {
  cards.forEach((card) => {
    setLocalCard(card);
  });
}

function setLocalCard(card) {
  const userIsOwner = card.owner._id === profileData._id;
  const likeState = card.likes.some((item) => item._id === profileData._id);
  addPlaceInArray(
    card.name,
    card.link,
    userIsOwner,
    card._id,
    card.likes,
    likeState
  );
  addPlacesInHtml(card._id, likeState);
  deletePictureButton();
  popupOverlay();
  addLike();
}

// Остальной код остаётся без изменений
editProfileButton.addEventListener("click", () => openPopup(editProfilePopup));

async function saveProfileInfoOnServerAndHTML(evt) {
  try {
    evt.preventDefault();
    savingButtonText(saveProfileButton);
    saveProfileInfo();
    await setServerProfile(
      profileUserName.textContent,
      profileUserAbout.textContent
    );
    savedButtonText(saveProfileButton);
    closePopup(editProfilePopup);
  } catch (err) {
    console.error(`Что-то пошло не так: ${err}`);
  }
}

saveProfileButton.addEventListener("click", (evt) =>
  saveProfileInfoOnServerAndHTML(evt)
);

closeProfilePopupButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  closePopup(editProfilePopup);
  getProfileInfo();
});

getServerCards();

addPictureButton.addEventListener("click", () => {
  openPopup(addPicturesPopup);
});

closePicturesPopupButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  closePopup(addPicturesPopup);
});

deletePictureButton();

async function saveAddedPictureOnServerAndHTML(evt) {
  try {
    evt.preventDefault();
    savingButtonText(savePicturesButton);
    const newCard = await addServerCard(placeNameField.value, placeLinkField.value);
    setLocalCard(newCard);
    savedButtonText(savePicturesButton);
    closePopup(addPicturesPopup);
  } catch (err) {
    console.error(`Что-то пошло не так: ${err}`);
  }
}

savePicturesButton.addEventListener("click", (evt) => {
  saveAddedPictureOnServerAndHTML(evt);
});

closeFullScreenPicturePopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  closePopup(fullScreenPicturePopup);
});

avatarPopupOpenElement.addEventListener("click", (item) => {
  item.preventDefault();
  openPopup(avatarPopup);
});

avatarPopupCloseButton.addEventListener("click", (item) => {
  item.preventDefault();
  closePopup(avatarPopup);
});

async function saveNewAvatar() {
  try {
    const avatarLink = avatarInput.value;
    await setServerAvatar(avatarLink);
    uploadAvatar(avatarLink); // Исправлено: передаём avatarLink напрямую
    closePopup(avatarPopup);
  } catch (err) {
    console.error(`Что-то пошло не так: ${err}`);
  }
}

saveAvatarButton.addEventListener("click", (item) => {
  item.preventDefault();
  saveNewAvatar();
});

closePopupOnClick(overLay);
closePopupOnEsc(overLay);
saveFormInfoOnEnter();
enableValidation();
submitButtonValidation(editProfileButton);
submitButtonValidation(addPictureButton);