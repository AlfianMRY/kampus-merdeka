class Gempa {
  constructor(lokasi, skala) {
    this.lokasi = lokasi;
    this.skala = skala;
  }
  dampak() {
    if (this.skala <= 2) {
      this.dampak = "dampaknya tidak terasa";
    } else if (this.skala <= 4) {
      this.dampak = "dampaknya bangunan retak-retak";
    } else if (this.skala <= 6) {
      this.dampak = "dampaknya bangunan roboh";
    } else if (this.skala > 6) {
      this.dampak = "dampaknya bangunan roboh dan berpotensi tsunami";
    }

    document.getElementById("daftarGempa").innerHTML += `
        <tr>
            <td>${this.lokasi}</td>
            <td>${this.skala}</td>
            <td>${this.dampak}</td>
        </tr>
    `;
  }
}

// Nilai Dari Form
function tambahList() {
  let frm = document.getElementById("formGempa");
  let lokasi = frm.lokasi.value;
  let skala = parseFloat(frm.skala.value);
  console.log(lokasi);
  console.log(skala);
  if ((skala = "" || lokasi == "" || isNaN(skala))) {
    alert("Semua data harus di isi dengan benar!");
  } else {
    let tambah = new Gempa(lokasi, skala);
    tambah.dampak();
  }
}

// Nilai Manual
let gempa1 = new Gempa("Indonesia", 1);
let gempa2 = new Gempa("Ukraina", 8);
let gempa3 = new Gempa("Rusia", 4);
let gempa4 = new Gempa("Brazil", 2);
let gempa5 = new Gempa("Amerika", 5);
let gempa6 = new Gempa("Jepang", 10);
let gempa7 = new Gempa("Singapura", 3);
let gempa8 = new Gempa("Korea", 7);
let gempa9 = new Gempa("Australia", 9);
let gempa10 = new Gempa("China", 6);
gempa1.dampak();
gempa2.dampak();
gempa3.dampak();
gempa4.dampak();
gempa5.dampak();
gempa6.dampak();
gempa7.dampak();
gempa8.dampak();
gempa9.dampak();
gempa10.dampak();
