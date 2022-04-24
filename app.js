const selectElement = (element) => document.querySelector(element);

selectElement(".mobile-menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});

const dropper = document.getElementsByClassName("dropper");
let i;

for (i = 0; i < dropper.length; i++) {
  dropper[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (
      dropdownContent.style.maxHeight &&
      dropdownContent.style.maxHeight != "0px"
    ) {
      dropdownContent.style.maxHeight = 0;
    } else {
      dropdownContent.style.maxHeight = `${dropdownContent.scrollHeight}px`;
    }
  });
}