var form=document.getElementById('form');
var username=document.getElementById('username');
var email=document.getElementById('email');
var password=document.getElementById('password');
var password2=document.getElementById('password2');

//Error Message
function showError(input,message)
{
  var formControl=input.parentElement;
  formControl.className='form-control error';
  var  small=formControl.querySelector('small');
  small.innerText=message;
}

//Success function
function showSuccess(input,message)
{
  var formControl=input.parentElement;
  formControl.className='form-control success';
}

//Check all required fields
function checkRequired(inputarr){
  inputarr.forEach(function(input){
    if(input.value.trim()==='')
    showError(input,`${getFieldName(input)} is required`);
    else
    showSuccess(input);
  });
}

//check length
function checkLength(input,min,max)
{
  if(input.value.length<min)
  showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
  else if(input.value.length>max)
  showError(input,`${getFieldName(input)} must be less than ${max} characters`);
  else
  showSuccess(input);
}

//get field Name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//valid email
function isValidEmail(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim()))
    showSuccess(input)
    else
    showError(input,'Email is not valid');
}
//check password match
function checkPasswordMatch(input,input2)
{
  if(input.value!==input2.value)
  showError(input2,'Passwords do not match');
}

//Event Listener
form.addEventListener("submit",function(e){
  e.preventDefault();

checkRequired([username,email,password,password2])
checkLength(username,3,15);
checkLength(password,6,20);
isValidEmail(email);
checkPasswordMatch(password,password2);
});