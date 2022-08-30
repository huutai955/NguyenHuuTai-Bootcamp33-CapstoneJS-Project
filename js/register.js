import {userForm} from '../user/user.js';
import {kiemTraRong, kiemTraEmail, kiemTraPasswordConfirm, kiemTraSoDienThoai} from '../js/validate.js';



document.querySelector("#registerForm").onsubmit = (event) => {
    event.preventDefault();

    // Lấy giá trị từ input 
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let phone = document.getElementById("phone");
    let passwordConfirm = document.getElementById("passwordConfirm");
    let gender = document.getElementById("gender");

    if (gender.checked == true) {
        gender.value = true;
    }else {
        gender.value = false;
    }

    console.log(gender.value);


    // Validate check
    let valid = true;
    valid = kiemTraRong(email.value, 'errorEmail', 'Email')
        & kiemTraRong(name.value, 'errorName', 'Name')
        & kiemTraRong(password.value, 'errorPassword', 'Password')
        & kiemTraRong(phone.value, 'errorPhone', 'Phone Number')
        & kiemTraRong(passwordConfirm.value, 'errorPasswordConfirm', 'Password confirm')
        & kiemTraRong(gender.value, 'errorPasswordConfirm', 'Password confirm')
        
        
    if (kiemTraRong(email.value, 'errorEmail', 'Email')) {
        kiemTraEmail(email.value);
    }

    if (kiemTraRong(passwordConfirm.value, 'errorPasswordConfirm', 'Password confirm')) {
        kiemTraPasswordConfirm(passwordConfirm.value);
    }

    if (kiemTraRong(phone.value, 'errorPhone', 'Phone')) {
        kiemTraSoDienThoai(phone.value);
    }

    if (valid == false) {
        return;
    }

    var user = new userForm (
        email.value,
        password.value,
        name.value,
        gender.value,
        phone.value
    );



    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user
    });

    promise.then(function (result) {
        console.log(result.data);
        alert(result.data.message);
    })

    promise.catch(function (error) {
        console.log(error);
    })

    

}

