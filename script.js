//your JS code here. If required.
fName = document.getElementById('f-name')
lName = document.getElementById('l-name')
number = document.getElementById('number')
email = document.getElementById('email')
document.getElementById('submit').addEventListener('click', submit)
function submit(){
	alert(`First Name: ${fName.value} Last Name: ${lName.value} Phone Number: ${number.value} Email ID: ${email.value}`)
}
