var phrases = [
  "Мій ти котик!",
  "Моя ти бідося!",
  "А щоб їм пусто було!",
  "А хай їм грець!",
  "Ходи обніму!",
  "Ай-ай-ай, шо ж вони паскуди роблять!",
  "Мій ти пінгвінчік!",
  "Мій ти горобчик!",
  "Не, ну вони дійсно неправі!",
  "Моє ти сонечко!",
  "Моя ти свинка!",
  "Це ж треба було таке утнути!",
  "Совісті у людей нема!",
  "Запам'ятай їхню адресу, вона ще знадобиться!",
  "Йооой...шо то сі коє!",
  "А най їх качка копне!",
  "Най їх шляк трафить!",
  "А добра б їм не було!"
];

var ouputText = document.querySelector(".output__sympathy-message"),
    btnGo = document.querySelector(".complaint__submit"),
    btnBack = document.querySelector(".output__go-back"),
    section1 = document.querySelector(".complaint"),
    alertText = document.querySelector(".complaint__alert");

btnGo.addEventListener("click", function() {
  choosePhrase(phrases);
  pasteText();
});

function choosePhrase(array) {
  var i = Math.floor(Math.random() * array.length);
  var selected = array[i];
  return selected;
}

function pasteText() {
  alertText.classList.remove("animation");
  ouputText.innerText = "";
  var phrase = choosePhrase(phrases);
  ouputText.innerText = phrase;
  section1.classList.add("margin-left");
}

btnBack.addEventListener("click", function() {
  section1.classList.remove("margin-left");
  alertText.classList.add("animation");
});