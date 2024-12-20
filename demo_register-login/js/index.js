const userLogin = JSON.parse(localStorage.getItem("userLogin"));

const userLoginElemnent = document.getElementById("userLogin")


if (userLogin) {
    // hiển thị tên của user đag đăng nhập lên header
    userLoginElemnent.innerHTML = userLogin.userName; 
} else {
    userLoginElemnent.innerHTML = "";
}