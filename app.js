const svgContainer = document.querySelector("#svgContainer");

svgContainer.addEventListener("click", () => {
    console.log("it worked");
  document.body.classList.contains("lightMode")
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("lightMode");
  document.body.classList.add("darkMode");
}

function enableLightMode() {
  document.body.classList.remove("darkMode");
  document.body.classList.add("lightMode");
}
