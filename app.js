// mobile navbar dropdown

const selectElement = (element) => document.querySelector(element);

selectElement(".mobile-menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});

// end of mobile navbar dropdown

// mobile footer content dropdown

const dropper = document.getElementsByClassName("dropper");
let i;

for (i = 0; i < dropper.length; i++) {
  dropper[i].addEventListener("click", function () {
    // loops over each dropper and adds the click event
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling; // nextElementSibling is the elements with the 'dropdown-content' class...
    if (
      dropdownContent.style.maxHeight && // prevents double click issue
      dropdownContent.style.maxHeight != "0px"
    ) {
      dropdownContent.style.maxHeight = 0;
    } else {
      dropdownContent.style.maxHeight = `${dropdownContent.scrollHeight}px`;
    }
  });
}

// end of mobile footer content dropdown
