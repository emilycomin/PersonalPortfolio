let wave100 = document.getElementById("wave100");
let wave70 = document.getElementById("wave70");
let wave40 = document.getElementById("wave40");
let saudation = document.getElementById("saudation");
let emilyComin = document.getElementById("emilyComin");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    saudation.style.marginTop = value * 1.5 + 'px';
    emilyComin.style.right = value * -1.0 + 'px';
    // emilyComin.style.top = value * -1.0 + 'px';
    // wave40.style.bottom = value * 0.5 + 'px';
    wave40.style.bottom = value * -.5 + 'px'
})

var modalReviva = document.getElementById("modalReviva");
var modalAgromari = document.getElementById("modalAgromari");
var modalDhouse = document.getElementById("modalDhouse");

    // O botão Update abre uma Dialog
    document.getElementById("openButton").onclick = (e) => {
        e.preventDefault();
        modalReviva.showModal();
    }
    document.getElementById("closeButton").onclick = (e) =>{
        e.preventDefault();
        modalReviva.close();
    }
    document.getElementById("openButtonAgromari").onclick = (e) => {
        e.preventDefault();
        modalAgromari.showModal();
    }
    document.getElementById("closeButtonAgromari").onclick = (e) =>{
        e.preventDefault();
        modalAgromari.close();
    }
    document.getElementById("openModalDhouse").onclick = (e) => {
        e.preventDefault();
        modalDhouse.showModal();
    }
    document.getElementById("closeButtonDhouse").onclick = (e) => {
        e.preventDefault();
        modalDhouse.close();
    }

    