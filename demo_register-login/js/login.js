// Element của trang

const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email")
const passwordElement = document.getElementById("password")
const alertError = document.getElementById("alertError")



const userLocal = JSON.parse(localStorage.getItem("users")) || [];
console.log('>>>', userLocal)

// Lắng nghe sự kiện submit form dăng nhập tài khoản 
formLogin.addEventListener("submit", function(e){
    // Ngăn chặn sự kiện loà trang 
    e.preventDefault();

    // validate dữ liệu vào 
    
    // lấy dữ liệu từ local về 
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];
    console.log('>>>', userLocal)


    //  Tìm kiếm email và mật khẩu người dùng nhập vào có tồn tại trên local hay không ?
    const findUser = userLocal.find(
        (user) => 
        user.email === emailElement.value && 
        user.password === passwordElement.value
    ); 
    if(!findUser) {
        alertError.style.display = "block";
    } else {
        window.location.href = "index-sucess.html";

        // lưu thông tin của user đăng nhập trên local

        localStorage.setItem("userLogin", JSON.stringify(findUser));

    }
     

    // Nếu có thì đăng nhập thành công về trang chủ 

    // Nếu không thì thông báo cho người dùng nhập dữ liệu 

});