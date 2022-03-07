function hitung(op) {
  let frm = document.getElementById("formulir");
  let a1 = parseInt(frm.a1.value);
  let a2 = parseInt(frm.a2.value);
  var hasil = 0;
  if (isNaN(a1) || a1 == "" || isNaN(a2) || a2 == "") {
    alert("Harap Isi Data Berupa Angka Dan Tidak Boleh Kosong!");
    hasil = 0;
  } else {
    if (op == "+") {
      hasil = a1 + a2;
    } else if (op == "-") {
      hasil = a1 - a2;
    } else if (op == "x") {
      hasil = a1 * a2;
    } else if (op == "/") {
      hasil = a1 / a2;
    } else if (op == "^") {
      hasil = a1 ** a2;
    }
  }
  document.getElementById("hasil").value = hasil;
}

function reset() {
  let frm = document.getElementById("formulir");
  frm.a1.value = "";
  frm.a2.value = "";
  frm.hasil.value = "";
}
