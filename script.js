const download_url = "https://github.com/havker02/Movies-Hub/releases/download/MoviesHub/MOVIES.HUB_2.1.5.apk"

const telegram = document.querySelector(".fa-telegram").addEventListener("click", function() {
  window.open("https://telegram.me/thunder_modz");
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const btn = document.querySelector(".download").addEventListener("click", function(){
  window.open("download_url","_blank");
});
