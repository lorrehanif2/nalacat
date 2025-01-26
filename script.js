window.onload = function() {
    let progressBar = document.getElementById("progress-bar");
    let loader = document.getElementById("loader");
    let mainContent = document.getElementById("main-content");

    let progress = 0;
    let interval = setInterval(function() {
        progress += 2;
        progressBar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            loader.style.display = "none";
            mainContent.style.display = "block";
        }
    }, 100);

    // Menambahkan event listener untuk menu scroll
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Mencegah default behavior
            const targetId = link.getAttribute('href').substring(1);  // Mengambil target id
            const targetSection = document.getElementById(targetId);

            // Scroll ke bagian yang dipilih
            window.scrollTo({
                top: targetSection.offsetTop - 50,  // Menambahkan sedikit margin atas
                behavior: 'smooth'  // Animasi smooth scroll
            });
        });
    });
};
