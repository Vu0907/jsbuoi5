// bai1
function Bai1() {
  var diemchuan = Number(document.getElementById("diemchuan").value);
  var khuvuc = Number(document.getElementById("khuvuc").value);
  var doituong = Number(document.getElementById("doituong").value);
  var diem1 = Number(document.getElementById("diem1").value);
  var diem2 = Number(document.getElementById("diem2").value);
  var diem3 = Number(document.getElementById("diem3").value);
  var result1 = "";
  var diemTB = 0;

  diemTB = tinhDiem(diem1, diem2, diem3, khuvuc, doituong);
  if (diemTB >= diemchuan) {
    result1 = "Bạn đã đậu. Tổng điểm: " + diemTB;
  } else {
    result1 = "Bạn đã rớt. Tổng điểm: " + diemTB;
  }
  if (diem1 <= 0 || diem2 <= 0 || diem3 <= 0) {
    result1 = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  }
  document.getElementById("infoDiem").innerHTML = result1;
}

function tinhDiem(a, b, c, d, e) {
  var tongdiem = a + b + c + d + e;
  return tongdiem;
}

// bai2
const kw50_1 = 500;
const kw50_2 = 650;
const kw100 = 850;
const kw150 = 1100;
const kwrest = 1300;

var tienkw_1 = 0;
var tienkw_2 = 0;
var tienkw_3 = 0;
var tienkw_4 = 0;
var tienkw_5 = 0;
var tongTien = 0;
function Bai2() {
  var hoTen = document.getElementById("hoten").value;
  var sokw = Number(document.getElementById("kw").value);
  var tongtienkw = tinhtienkw(sokw);
  if (sokw <= 0) {
    alert("Nhập sai số KW");
  }
  var result2 =
    "Họ tên: " +
    hoTen +
    "; Tiền điện: " +
    new Intl.NumberFormat("vn-VN").format(tongtienkw);
  document.getElementById("infoTinhtiendien").innerHTML = result2;
}

function tinhtienkw(sokw) {
  if (0 <= sokw && sokw <= 50) {
    tienkw_1 = tinhkw_1(sokw, kw50_1);
    tongTien = tienkw_1;
  } else if (50 < sokw && sokw <= 100) {
    tienkw_1 = tinhkw_1(50, kw50_1);
    tienkw_2 = tinhkw_2(sokw, kw50_2);
    tongTien = tienkw_1 + tienkw_2;
  } else if (100 < sokw && sokw <= 200) {
    tienkw_1 = tinhkw_1(50, kw50_1);
    tienkw_2 = tinhkw_2(100, kw50_2);
    tienkw_3 = tinhkw_3(sokw, kw100);
    tongTien = tienkw_1 + tienkw_2 + tienkw_3;
  } else if (200 < sokw && sokw <= 350) {
    tienkw_1 = tinhkw_1(50, kw50_1);
    tienkw_2 = tinhkw_2(100, kw50_2);
    tienkw_3 = tinhkw_3(200, kw100);
    tienkw_4 = tinhkw_4(sokw, kw150);
    tongTien = tienkw_1 + tienkw_2 + tienkw_3 + tienkw_4;
  } else if (350 < sokw) {
    tienkw_1 = tinhkw_1(50, kw50_1);
    tienkw_2 = tinhkw_2(100, kw50_2);
    tienkw_3 = tinhkw_3(200, kw100);
    tienkw_4 = tinhkw_4(350, kw150);
    tienkw_5 = tinhkwrest(sokw, kwrest);
    tongTien = tienkw_1 + tienkw_2 + tienkw_3 + tienkw_4 + tienkw_5;
  }
  return tongTien;
}

function tinhkw_1(sokw, giakw) {
  var result = sokw * giakw;
  return result;
}

function tinhkw_2(sokw, giakw) {
  var result = (sokw - 50) * giakw;
  return result;
}

function tinhkw_3(sokw, giakw) {
  var result = (sokw - 100) * giakw;
  return result;
}

function tinhkw_4(sokw, giakw) {
  var result = (sokw - 200) * giakw;
  return result;
}

function tinhkwrest(sokw, giakw) {
  var result = (sokw - 350) * giakw;
  return result;
}
