window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup').classList.add('active');
    }, 3000);

    document.getElementById('close-popup').onclick = function() {
        document.getElementById('popup').classList.remove('active');
    };

    document.getElementById("open-invitation").onclick = function () {
        window.location.href = "Halaman Undangan/BukaUndangan.html";
    };
};

