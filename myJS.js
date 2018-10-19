var btnsubmit = document.forms["register-form"]["btn-submit"];
btnsubmit.onclick = function (){
	var txtusername = document.forms["register-form"]["username"];
	var name = txtusername.nextElementSibling;
	if (txtusername == null || txtusername.value.length == 0) {
		name.innerHTML = "*Vui lòng nhập tên của bạn. ";
		name.classList.remove("hidden-text");
	}else if (txtusername.value.length < 5){
		name.innerHTML = "*Tên của bạn quá ngắn vui lòng nhập lại.";
		name.classList.remove("hidden-text");
	}else if (txtusername.value.length > 20){
		name.innerHTML = "*Tên của bạn quá dài vui lòng nhập lại.";
		name.classList.remove("hidden-text");
	}else {
		name.innerHTML = "*Tên hợp lệ.";
		name.classList.remove("hidden-text");
		name.classList.add("succes-text");
	}
	var txtpassword = document.forms["register-form"]["password"];
	var	pass = txtpassword.nextElementSibling;
	if (txtpassword == null || txtpassword.value.length == 0) {
		pass.innerHTML = "* Không được bỏ trông mật khẩu.";
		pass.classList.remove("hidden-text");
	}
	var txtfullname = document.forms["register-form"]["fullName"];
	var	fullname = txtfullname.nextElementSibling;
	if(txtfullname == null || txtfullname.value.length == 0){
		fullname.innerHTML = "* Không dược bỏ trông tên đầy đủ.";
		fullname.classList.remove("hidden-text");
	}else if(txtfullname.value.length > 30){
		fullname.innerHTML = "* Tên của bạn quá dài vui lòng nhập lại.";
		fullname.classList.remove("hidden-text");
	}else if (txtfullname.value.length < 10){
		fullname.innerHTML = "* Tên của bạn quá ngắn vui lòng nhập lại.";
		fullname.classList.remove("hidden-text");
	}
	var txtemail = document.forms["register-form"]["email"];
	var	mail = txtemail.nextElementSibling;
	if (txtemail == null || txtemail.value.length==0) {
		mail.innerHTML = "* Không được để trông email.";
		mail.classList.remove("hidden-text");
	}
}
