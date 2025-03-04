const SHAREspan = document.getElementById("share");

SHAREspan.textContent = SHAREspan.textContent.toUpperCase();

SHAREspan.style.color = "hsl(210, 46%, 95%)";

const footers = Array.from(document.querySelectorAll("footer"));

const shareButtons = Array.from(document.getElementsByClassName("icon-share"));

function toggleFooters() {

    footers.forEach(footer => {

        if(footer.classList.contains("active")) footer.classList.remove("active");

        else footer.classList.add("active");
    });
}

shareButtons.forEach(shareButton => shareButton.addEventListener("click", toggleFooters));

const svg = Array.from(document.getElementsByClassName("icon-svg"));

svg.forEach(element => {

    element.addEventListener("click", () => {

        const newWindow = window.open("https://github.com/Guilherme-Porto-Silva", "_blank");

if (newWindow) newWindow.opener = null; // Ensures "noopener" rel in practice

    });    
    
});
