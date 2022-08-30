// Kiểm tra rỗng
export let kiemTraRong = (value, selectError, name) => {
    if (value == '') {
        document.getElementById(selectError).innerHTML =
            `${name} can not be empty`;
        return false;
    }

    document.getElementById(selectError).innerHTML = "";
    return true;
}


// Kiểm tra email hợp lệ
export let kiemTraEmail = (email) => {
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(mailformat)) {
        document.getElementById("errorEmail").innerHTML = "";
        return true;
    }
    document.getElementById("errorEmail").innerHTML = "Your email is incorrect format!!";
    return false;
}


// Kiểm tra xác nhận mật khẩu
export let kiemTraPasswordConfirm = (password) => {
    let yourPassword = document.getElementById("password");

    if (yourPassword.value != password) {
        document.getElementById("errorPasswordConfirm").innerHTML = 'Your password confirm is incorrect'
        return false;
    }

    document.getElementById("errorPasswordConfirm").innerHTML = ''
    return true;
}


/*
    Viettel: 09, 03
    MobiFone: 09, 07
    VinaPhone: 09, 08
    Vietnamobile và Gmobile: 09, 05

*/

export let kiemTraSoDienThoai = (phone) => {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(phone) == false) {
        document.getElementById("errorPhone").innerHTML = 'Your phone number is incorrect VietNam phone number format!!';
        return false;
    }

    document.getElementById("errorPhone").innerHTML = '';
    return true;

};


