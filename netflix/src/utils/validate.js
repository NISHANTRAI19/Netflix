export const checkValidData=(email, password)=>{
const isEmailValid=    /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);


if(!isEmailValid) return "Invalid Email ID";
if(!isPasswordValid) return "Invalid Password ID";
return null;


}