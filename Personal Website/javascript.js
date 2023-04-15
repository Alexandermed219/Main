var form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
})
var name = document.getElementById('name').value
var name2 =document.getElementById('name2').value
var email = document.getElementById('email').value
alert("Registered");