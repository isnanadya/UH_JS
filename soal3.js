function hitungLuas() {
    var alas = parseFloat(document.getElementById('alasInput').value);
    var tinggi = parseFloat(document.getElementById('tinggiInput').value);
    var hasilLuas = document.getElementById('hasilLuas');
  
    var luas = 0.5 * alas * tinggi;
  
    if (!isNaN(luas)) {
        hasilLuas.innerText = "Luas segitiga: " + luas;
    } else {
        hasilLuas.innerText = "Masukkan angka yang valid untuk alas dan tinggi.";
    }
  }