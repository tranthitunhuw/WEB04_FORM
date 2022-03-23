function KiemTra()
{
	var ht= f.HoTen.value;
	var dt= f.DienThoai.value;
	var e= f.Email.value;
	var dc= f.DiaChi.value;
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	if (ht == '')
	{
		alert('Họ tên không được bỏ trống!');
		return false;
	}
	if (dt == '')
	{
		alert('Điện thoại không được bỏ trống!');
		return false;
	}
	if (e == '')
	{
		alert('Email không được bỏ trống!');
		return false;
	}
	if (dc == '')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
	
	if(!emailPattern.t(e)) <!--e là  biến email-->
	{
		alert('Địa c');
		return false;
	}
	return true;
	
}