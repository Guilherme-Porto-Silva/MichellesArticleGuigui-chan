const footerConst = document.footer;

const state = Array.from(footerConst.div);

const shareButton = document.getElementById("icon-share");

function stateToggle() {

    state.forEach(element => {

        element.classList.toggle('hidden');
    });

    footerConst.classList.toggle('grayBackground');
}

shareButton.addEventListener("click", stateToggle);

const svg = Array.from(document.getElementsByClassName("icon-svg"));

svg.forEach(element => {

    element.addEventListener("click", () => {

        const newWindow = window.open("https://github.com/Guilherme-Porto-Silva", "_blank");

if (newWindow) newWindow.opener = null; // Ensures "noopener" rel in practice

    });    
    
});