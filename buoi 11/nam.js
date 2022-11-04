function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;
     var button = document.getElementById
    if(u== "") {
  
    }
    if(p1 == "") {
    alert("");
    return false;
    }
    if(p2 == "") {
    alert("Vui lòng xác minh mật khẩu!");
    return false;
    }
     
    alert("Xin hãy điền đúng thông tin!")
     
    return true;
    }