// 🌗 Rejim yadda saxla
const modeSwitch = document.getElementById("modeSwitch");
const body = document.body;

if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark-mode");
  modeSwitch.checked = true;
}

modeSwitch.addEventListener("change", () => {
  if (modeSwitch.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
  }
});

// 📁 Profil şəkli yüklə
const imageUpload = document.getElementById("imageUpload");
const profileImg = document.getElementById("profileImg");

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImg.src = e.target.result;
      localStorage.setItem("profileImg", e.target.result);
    };
    reader.readAsDataURL(file);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedImage = localStorage.getItem("profileImg");
  if (savedImage) {
    profileImg.src = savedImage;
  }
});

// 📂 Accordion yalnız birini aç
document.querySelectorAll('.accordion input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      document.querySelectorAll('.accordion input[type="checkbox"]').forEach(cb => {
        if (cb !== this) cb.checked = false;
      });
    }
  });
});
