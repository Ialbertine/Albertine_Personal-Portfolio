document.addEventListener("DOMContentLoaded", function() {
    const bar = document.querySelector(".fa-bars");
    const menucont = document.getElementById("menuItems");

    bar.addEventListener("click", () => {
        menucont.classList.toggle("active");
    });

    const menuLinks = document.querySelectorAll("#menuItems li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menucont.classList.remove("active");
        });
    });
});
