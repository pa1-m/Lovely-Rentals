function signup(){
  alert("Registered Successfully!")
}

function login(){
  alert("Login Successful!")
}

function logout(){
  confirm("Logout Successful!")
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