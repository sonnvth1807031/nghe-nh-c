var LOGIN_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication';
var btnLogin = document.forms['register-form']['btn-login'];
if (btnLogin != null) {
    btnLogin.onclick = function () {
        var pwdPassword = document.forms['register-form']['pass'];
        var txtEmail = document.forms['register-form']['email'];
        var jsLog = {
            password: pwdPassword.value,
            email: txtEmail.value,
        }
        var jsonDataLogin = JSON.stringify(jsLog);
        postLoginData(jsonDataLogin);
    }
}

function postLoginData(jsonDataLogin) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var member = JSON.parse(this.responseText);
            // alert("token:" + member.token + "secretToken:" + member.secretToken);
            if (member.token && member.secretToken) {
                localStorage.setItem('tocken',member.token + member.secretToken);
                console.log(localStorage.getItem('tocken'));
                window.location.href = "home.html";
            }
        } else {
            return false;
        }
    }
    xmlHttpRequest.open('POST', LOGIN_API, true);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.send(jsonDataLogin);
}


