const body = document.querySelector("body");
const main = document.querySelector("main");
const mainButton = document.querySelector(".content__button");

const modal = document.createElement("dialog");
modal.className = "modal";
modal.removeAttribute("open");
modal.innerHTML = `<form  class="login-form" method="dialog">
          <button class="login-form_close"><img src="img/x.png" alt="close window"></button>
          <h3 class="login-form_title">Войти в систему</h3>
          <div class="login-form__el-wrapper">
            <input class="login-form_input" type="text" placeholder="Email/Телефон">
            <input class="login-form_input" type="text" placeholder="Пароль">
          </div>
          <label for="checkbox" class="checkbox-label">
            <input type="checkbox" id="checkbox" class="checkbox">
            <span class="checkbox-view">
              <svg class="checkbox-icon" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 511.985 511.985">
                  <path fill="#fff" d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"/>
              </svg>
            </span>
            Запомнить пароль
          </label>
          <a class="login-form_repair" href="#">Восстановить</a>
          <div class="login-form__el-wrapper">
            <button class="login-form_button selected">Войти</button>
            <button class="login-form_button">Зарегестрироваться</button>
          </div>
        </form>`;
main.append(modal);

const closeModal = document.querySelector(".login-form_close");

mainButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.showModal();
});

closeModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.close();
});

const formButtons = document.querySelectorAll(".login-form_button");

formButtons.forEach((el) =>
  el.addEventListener("click", (e) => {
    formButtons.forEach((el) => {
      el.classList.remove("selected");
      e.target.classList.add("selected");
    });
    e.preventDefault();
  })
);

modal.addEventListener("click", closeOnBackDropClick);

function closeOnBackDropClick({ currentTarget, target }) {
  const modal = currentTarget;
  const isClickedOnBackDrop = target === modal;
  if (isClickedOnBackDrop) {
    modal.close();
  }
}
