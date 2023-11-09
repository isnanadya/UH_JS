function tampilkanHasil() {
    var inputNilai = document.getElementById("nilai").value;
    var hasil = document.getElementById("hasil");
  
    if (inputNilai > 80) {
      hasil.textContent = "SANGAT MEMUASKAN";
    } else if (inputNilai >= 60 && inputNilai <= 80) {
      hasil.textContent = "MEMUASKAN";
    } else {
      hasil.textContent = "JANGAN MENYERAH, COBA LAGI !";
    }
  }