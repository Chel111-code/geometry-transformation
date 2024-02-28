function toggleNavbar() {
  var sidebar = document.getElementById('sidebar');
  var toggleButton = document.getElementById('sidebarToggle');
  var homeButton = document.getElementById('home');
  var judul = document.getElementById('judul');

  sidebar.classList.toggle('translate-x-full');
  sidebar.classList.toggle('translate-x-0');

  // Menggunakan kelas 'translate' yang telah didefinisikan
  toggleButton.classList.toggle('translate-x-full');
  homeButton.classList.toggle('translate-x-full');

  judul.classList.toggle('hidden');
}

setTimeout(function () {
  gsap.to('#treeSmall', { duration: 2, scale: 1.5, opacity: 0 });
  gsap.to('#treeLarge', {
    duration: 3,
    scale: 1.3,
    ease: 'elastic.out',
    opacity: 1,
    delay: 1,
  });
}, 5000);

// event muncul tanda tanya
function toggleElements() {
  var tanya1Element = document.getElementById('tanya1');
  var perubahanElement = document.getElementById('perubahan');

  // Toggle visibility
  tanya1Element.classList.add('hidden');
  perubahanElement.classList.remove('hidden');
}

// // animasi 3d
gsap.to('.pyramid', {
  rotationY: 360,
  rotationX: 360,
  duration: 5,
  repeat: -1,
  ease: 'linear',
});

// titik, garis, bidang
document.querySelectorAll('.tooltip').forEach((item) => {
  item.addEventListener('click', function () {
    var tooltipText = this.querySelector('.tooltiptext');
    tooltipText.classList.toggle('invisible');
    tooltipText.classList.toggle('opacity-100');
  });
});
document.querySelectorAll('.tooltip').forEach((tooltip) => {
  tooltip.addEventListener('click', function () {
    this.style.borderBottomWidth = this.style.borderBottomWidth === '0px' ? '4px' : '0px';
  });
});
window.onclick = function (event) {
  if (!event.target.matches('.tooltip')) {
    var tooltips = document.getElementsByClassName('tooltiptext');
    for (var i = 0; i < tooltips.length; i++) {
      var openTooltip = tooltips[i];
      if (openTooltip.classList.contains('opacity-100')) {
        openTooltip.classList.remove('opacity-100');
        openTooltip.classList.add('invisible');
      }
    }
  }
};

// jajar genjang
gsap
  .timeline()
  .to('#top-border', { opacity: 1, duration: 1, delay: 24 })
  .to('#left-border', { opacity: 1, duration: 1, delay: 1 })
  .to('#bottom-border', { opacity: 1, duration: 1, delay: 1 })
  .to('#right-border', { opacity: 1, duration: 1, delay: 1 });

gsap.from('#top-left, #top-right, #bottom-left, #bottom-right', {
  opacity: 0,
  duration: 1,
  stagger: 1, // Adjust the delay between each span
  delay: 20,
});

document.getElementById('slider1').addEventListener('input', function () {
  var value = this.value;
  var image = document.getElementById('image-to-translate');
  image.style.transform = 'translateX(' + value + 'px)';
});

document.getElementById('slider2').addEventListener('input', function () {
  var scaleValue = this.value;
  var scaledElement = document.getElementById('image-to-dilate');

  // Mengatur skala elemen berdasarkan nilai slider
  scaledElement.style.transform = 'scale(' + scaleValue + ')';
});

interact('#shape')
  .draggable({
    onmove: dragMoveListener,
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true,
      }),
    ],
  })
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move(event) {
        let { x, y } = event.target.dataset;

        x = (parseFloat(x) || 0) + event.deltaRect.left;
        y = (parseFloat(y) || 0) + event.deltaRect.top;

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate(${x}px, ${y}px)`,
        });

        Object.assign(event.target.dataset, { x, y });
      },
    },
  });

function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

window.dragMoveListener = dragMoveListener;

document.addEventListener('DOMContentLoaded', (event) => {
  const kotak1 = document.getElementById('kotak1');
  const kotak2 = document.getElementById('kotak2');

  kotak1.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'kotak1');
  });

  kotak2.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  kotak2.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'kotak1') {
      const kotak1Clone = kotak1.cloneNode(true);
      kotak1Clone.querySelectorAll('span').forEach((span) => {
        span.textContent += "'"; // Menambahkan karakter ' pada setiap elemen span
      });
      kotak1Clone.style.backgroundColor = '#86efac'; // Mengubah warna klon kotak1 menjadi hijau
      kotak2.innerHTML = ''; // Bersihkan isi kotak2 jika ada
      kotak2.appendChild(kotak1Clone); // Tambahkan klon kotak1 yang telah diubah ke dalam kotak2
      kotak1.style.opacity = '0'; // Membuat kotak1 asli menjadi tidak terlihat
      kotak2.style.border = 'none';
    }
  });
});

document.getElementById('playButton').addEventListener('click', function () {
  // Tampilkan container SVG
  document.getElementById('svgContainer').classList.remove('blur-xl');

  // Tambahkan kelas animasi pada kedua SVG
  setTimeout(function () {
    document.getElementById('tes_pengetahuan_1').classList.add('animasi_cermin_tes');
  }, 0); // Menambahkan animasi secara langsung atau setelah delay sesuai kebutuhan

  setTimeout(function () {
    document.getElementById('tes_pengetahuan_2').classList.add('animasi_cermin_tes2');
  }, 500); // Menambahkan animasi pada SVG kedua setelah delay

  setTimeout(function () {
    document.getElementById('playButton').classList.add('hidden');
  }, 0); // Menambahkan animasi pada SVG kedua setelah delay
});

function changeBorderColor() {
  var spanElement = document.getElementById('posisi_benar');
  spanElement.classList.remove('border-gray-300');
  spanElement.classList.add('green-border');
}

function changeBorderAgain() {
  var spanElement = document.getElementById('ukuran_salah');
  spanElement.classList.remove('border-gray-300');
  spanElement.classList.add('red-border');
}

function tesPengetahuan5() {
  var spanElement = document.getElementById('border_tespengetahuan5');
  spanElement.classList.remove('border-gray-300');
  spanElement.classList.add('green-border');
}

function tesPengetahuan3() {
  var spanElement = document.getElementById('border_tespengetahuan3');
  spanElement.classList.remove('border-gray-300');
  spanElement.classList.add('red-border');
}

function tesPengetahuan4() {
  var spanElement = document.getElementById('border_tespengetahuan4');
  spanElement.classList.remove('border-gray-300');
  spanElement.classList.add('red-border');
}

setTimeout(function () {
  gsap.to('#tes_pengetahuan5', {
    duration: 3,
    scale: 1.7, // Skala elemen menjadi 1.7
    ease: 'power1.inOut',
    opacity: 1,
    repeat: -1,
    yoyo: true, // Mengizinkan animasi mundur
  });

  gsap.to('#tes_pengetahuan5', {
    duration: 6,
    scale: 0.8, // Skala elemen menjadi 0.8
    ease: 'power1.inOut',
    opacity: 1,
    repeat: -1,
    yoyo: true, // Mengizinkan animasi mundur
    delay: 3, // Menunda animasi agar dimulai setelah animasi sebelumnya selesai
  });
}, 0);

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
