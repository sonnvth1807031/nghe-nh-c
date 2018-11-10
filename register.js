var REGISTER_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFirstName = document.forms['register-form']['firstName'];
        var txtLastName = document.forms['register-form']['lastName'];
        var pwdPassword = document.forms['register-form']['password'];
        var txtAddress = document.forms['register-form']['address'];
        var txtPhone = document.forms['register-form']['phone'];
        var txtAvatar = document.forms['register-form']['avatar'];
        var selectGender = document.forms['register-form']['gender'];
        var txtEmail = document.forms['register-form']['email'];
        var dateBirthday = document.forms['register-form']['birthday'];
        var d = new Date(dateBirthday.value);
        var myDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-'
            + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        if (txtFirstName != null && txtLastName != null) {
            var firstName = txtFirstName.value;
            var lastName = txtLastName.value;
            var password = pwdPassword.value;
            var address = txtAddress.value;
            var phone = txtPhone.value;
            var avatar = txtAvatar.value;
            var gender = selectGender.value;
            var email = txtEmail.value;
            var birthday = dateBirthday.value;
            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                address: address,
                phone: phone,
                avatar: avatar,
                gender: gender,
                email: email,
                birthday: birthday,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }

    }
}

function postRegisterData(jsonData) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var member = JSON.parse(this.responseText);
            window.location.href = "login.html";
        }
    }
    xmlHttpRequest.open('POST', REGISTER_API, true);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.send(jsonData);
}
