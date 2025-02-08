//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function submit(){
fName = document.getElementById('f-name')
lName = document.getElementById('l-name')
number = document.getElementById('number')
email = document.getElementById('email')
	alert(`First Name: ${fName.value} Last Name: ${lName.value} Phone Number: ${number.value} Email ID: ${email.value}`)
})
