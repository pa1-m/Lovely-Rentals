function validate() {
  var password = document.getElementById('password').value;

  if (password.length < 6) {
      alert('Password should be at least 6 characters long');
      return false;
    }
    else if (password.length > 20) {
      alert("Password should be at less than 20 Characters")
      return false;
  }
  else {
    alert ("Successfull!")
    return true;
  }
}

function logout(){
  alert("Logout Successful!")
}

function rent(){
  let confirm1 = prompt("Type `YES` to confirm your booking")
  if (confirm1 == "yes" || confirm1 == "Yes" || confirm1 == "YES") {
    confirm("Car has been booked successfully!")
  }
  else {
    alert("Booking cancelled")
  }
}