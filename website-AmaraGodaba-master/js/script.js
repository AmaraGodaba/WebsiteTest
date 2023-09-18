

function saveRequest() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("user-email").value;
  var message = document.getElementById("request-message").value;

  var request = {
      name: name,
      email: email,
      message: message
  };

  try {
    localStorage.setItem("request", JSON.stringify(request));
    alert("Request sent successfully!");
  } catch (error) {
    alert("An error occurred while saving the request: " + error.message);
  }
}


var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", saveRequest);