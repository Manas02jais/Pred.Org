// Get the button and popup container
const filterBtn = document.getElementById("openFilter");
const popupContainer = document.getElementById("filterContainer");
const closeBtn = document.getElementById("closeBtn");

function handleWindowSizeChange() {
  // Check the window width
  if (window.innerWidth <= 768) {
    // Open the popup
    filterBtn.style.display = "block";
    filterBtn.addEventListener("click", function () {
      popupContainer.style.display = "flex";
      popupContainer.style.width = "80%";
    });

    // Close the popup
    closeBtn.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });

    //   Close the popup when clicking outside the content
    window.addEventListener("click", function (event) {
      if (event.target === popupContainer) {
        popupContainer.style.display = "none";
      }
    });
  }
}
// Initial call
handleWindowSizeChange();

// Event listener for window resize
window.addEventListener("resize", handleWindowSizeChange);

const loginContainer = document.getElementById("login-section");
const navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", function () {
  loginContainer.style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

// Close the popup
closeBtn.addEventListener("click", function () {
  loginContainer.style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

//   Close the popup when clicking outside the content
window.addEventListener("click", function (event) {
  if (event.target === loginContainer) {
    loginContainer.style.display = "none";
  }
});
