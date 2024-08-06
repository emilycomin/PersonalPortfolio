let wave70 = document.getElementById("wave70");
let wave40 = document.getElementById("wave40");
let saudation = document.getElementById("saudation");
let emilyComin = document.getElementById("emilyComin");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    saudation.style.marginBottom = - value * 1.5 + 'px';    
    emilyComin.style.marginBottom =  value * - 0.6 + 'px';
    wave70.style.bottom = - value * 0.5 + 'px';
    wave40.style.bottom = - value * 1 + 'px';
})