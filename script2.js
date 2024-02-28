gsap.delayedCall(6, function () {
  animateElement();
});

// Fungsi untuk menganimasikan elemen
function animateElement() {
  gsap.to('.contohTranslasi1_after', {
    opacity: 1,
    duration: 1,

    onComplete: function () {
      // Setelah animasi selesai, atur kembali opacity ke 0
      gsap.set('.contohTranslasi1_after', { delay: 3.95, opacity: 0 });
      // Panggil kembali fungsi animateElement setelah 4 detik
      gsap.delayedCall(7, animateElement);
    },
  });
}
gsap.to('.contohTranslasi3', {
  x: 39,
  duration: 4,
  ease: 'power1.inOut',
  repeat: -1,
  repeatDelay: 2.5,
});

gsap.to('.contohTranslasi4', {
  y: 123,
  duration: 4,
  ease: 'power1.inOut',
  repeat: -1,
  repeatDelay: 2.5,
});

gsap.to('.after_tesTranslasi4', {
  opacity: 1,
  duration: 0.1,
  delay: 4.99,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut',
  repeatDelay: 4.99,
});

document.getElementById('TesTranslasi1').addEventListener('click', function () {
  this.style.borderColor = 'red'; //
});

document.getElementById('TesTranslasi2').addEventListener('click', function () {
  this.style.borderColor = 'red'; // Mengubah warna border menjadi merah saat diklik
});

document.getElementById('TesTranslasi3').addEventListener('click', function () {
  this.style.borderColor = '#05FF00'; // Mengubah warna border menjadi merah saat diklik
});

document.getElementById('tesTranslasi4').addEventListener('click', function () {
  this.style.borderColor = '#05FF00'; //
});

document.getElementById('tesTranslasi5').addEventListener('click', function () {
  this.style.borderColor = 'red'; // Mengubah warna border menjadi merah saat diklik
});

document.getElementById('tesTranslasi6').addEventListener('click', function () {
  this.style.borderColor = 'red'; // Mengubah warna border menjadi merah saat diklik
});

document.addEventListener('aos:in', ({ detail }) => {
  const garisTranslasi = detail.querySelectorAll('.garis-translasi');
  const titikMuncul = detail.querySelector('.titikMuncul_Translasi');

  // Jalankan animasi garis
  garisTranslasi.forEach((garis) => {
    garis.style.animationName = 'garis1Translasi';
  });

  // Jalankan animasi titik
  titikMuncul.style.animationName = 'titikMuncul_Translasi';
});

document.addEventListener('aos:in', ({ detail }) => {
  const garis3Translasi = detail.querySelector('#garis3Translasi');

  // Tambahkan kelas untuk animasi dengan penundaan
  garis3Translasi.classList.add('delayed-animation');
});

// Menangani peristiwa klik pada tombol
// Menangani peristiwa klik pada tombol
document.getElementById('toggleDivBaru').addEventListener('click', function () {
  var divBaru = document.getElementById('divBaru');
  if (divBaru.classList.contains('hidden')) {
    divBaru.classList.remove('hidden');
  } else {
    divBaru.classList.add('hidden');
  }

  var divLama = document.getElementById('divLama');
  if (divLama.classList.contains('hidden')) {
    divLama.classList.remove('hidden');
  } else {
    divLama.classList.add('hidden');
  }
});

document.getElementById('mulaiAnimasi').addEventListener('click', function () {
  var elemenAnak = document.getElementById('translasi_anak_pulang');
  elemenAnak.classList.remove('animate-translasiAnakPulang');
  void elemenAnak.offsetWidth;
  elemenAnak.classList.add('animate-translasiAnakPulang');
});

function showSpan(optionText) {
  // Sembunyikan dropdown
  document.getElementById('tanya2').classList.add('hidden');

  if (optionText === 'Posisi') {
    // Ganti teks pada #panggil2_tanya dengan teks opsi yang dipilih
    document.querySelector('#panggil2_tanya').childNodes[0].nodeValue = optionText + ' ';

    // Hapus event listener pada #panggil2_tanya agar dropdown tidak muncul lagi
    document.getElementById('panggil2_tanya').removeEventListener('click', toggleDropdown);
  } else if (optionText === 'Ukuran') {
    // Jika opsi "Ukuran" dipilih, ubah border menjadi merah dan tidak menghapus event listener
    var ukuranOption = document.querySelectorAll('#tanya2 div')[1]; // asumsikan elemen kedua adalah "Ukuran"
    ukuranOption.style.border = '2px solid red';
  }
}

// Fungsi untuk menangani klik pada #panggil2_tanya
function toggleDropdown() {
  document.getElementById('tanya2').classList.toggle('hidden');
}

// Tambahkan event listener dengan fungsi toggleDropdown
document.getElementById('panggil2_tanya').addEventListener('click', toggleDropdown);

function toggleTabs(selectedTab) {
  // Identifikasi elemen-elemen tab dan kotak
  const translasiTab = document.getElementById('translasi');
  const bukanTranslasiTab = document.getElementById('bukanTranslasi');
  const kotakBiru = document.getElementById('kotakBiru');
  const kotakOrange = document.getElementById('kotakOrange');

  // Cek tab mana yang dipilih dan terapkan kelas yang sesuai
  if (selectedTab === 'translasi') {
    translasiTab.className =
      'text-teal-600  bg-white w-2/5 h-8 rounded-xl ml-1  flex justify-center items-center cursor-pointer';
    bukanTranslasiTab.className =
      'w-3/5 h-8 rounded-xl flex justify-center items-center cursor-pointer';

    kotakBiru.classList.remove('hidden');
    kotakOrange.classList.add('hidden');
  } else {
    bukanTranslasiTab.className =
      'text-teal-600  bg-white w-3/5 h-8 rounded-xl  flex justify-center items-center cursor-pointer';
    translasiTab.className =
      'w-2/5 h-8 rounded-xl ml-1 flex justify-center items-center cursor-pointer';

    kotakBiru.classList.add('hidden');
    kotakOrange.classList.remove('hidden');
  }
}
