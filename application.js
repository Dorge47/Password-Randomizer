function makePwd() {
    var length = parseInt(prompt('Enter desired password length'));
    if (isNaN(length)) {
        alert('Not a number');
        throw "Given length is not a number";
    }
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById('pwdSpot').innerText = result;
}