// Ambil parameter dari URL
function getNamaDariURL() {
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("nama");
    return nama ? decodeURIComponent(nama.replace(/\+/g, ' ')) : "Tamu Undangan";
}

// Tampilkan nama ke dalam span
window.addEventListener('DOMContentLoaded', () => {
    const namaSpan = document.getElementById("namaTamu");
    namaSpan.textContent = getNamaDariURL();
});
// https://namadomain.com/undangan.html?nama=Rina%20Saputri

// Blokir desktop
// if (!/Mobi|Android/i.test(navigator.userAgent)) {
//     document.body.className = "desktop-blocker";
//     document.body.innerHTML = `
//       <div class="desktop-message">
//         <h2>Maaf yaa 😊</h2>
//         <p>Website undangan ini hanya bisa dibuka melalui HP.</p>
//       </div>
//     `;
//   }
  
  