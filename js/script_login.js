// login validate
let id = document.querySelector('#input-id')
let pwd = document.querySelector("#input-pwd")
let errorMessage = document.querySelector(".errorMessage");
let ok_btn = document.querySelector(".ok-btn");

let test_pwd = /(?=.*[a-z])(?=.*[\d])(?=.*[@#$%^&*!?])[a-z\d@#$%^&*!?]+/;

let userInfo = { id:'korea', pwd:'asdf1234@@'}

ok_btn.addEventListener("click", function () {
    let idValue = id.value;
    let pwdValue = pwd.value;

    if (idValue == '' && pwdValue == '') {
        errorMessage.innerHTML = "ID와 비밀번호를 입력해주세요"
    } else if (idValue == '') {
        errorMessage.innerHTML = "ID를 입력해주세요"
    } else if (pwdValue == '') {
        errorMessage.innerHTML = "비밀번호를 입력해주세요"
    } else if (idValue.length < 4 || id.length > 12) {
        errorMessage.innerHTML = "ID는 4 ~ 12 글자 입니다"
    } else if (!test_pwd.test(pwdValue)) {
        errorMessage.innerHTML = "비밀번호 형식이 맞지 않습니다"
    } else {
        if (idValue == userInfo.id && pwdValue == userInfo.pwd) {
            errorMessage.innerHTML = "";
            alert('로그인 테스트 성공');
        } else {
            errorMessage.innerHTML = "ID 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요";
        }
        
    }

})