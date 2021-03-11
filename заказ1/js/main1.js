$('.slider').slick({
    infinite: false,
    draggable: false
});

document.addEventListener('DOMContentLoaded', function () {
 
    if (document.querySelector('.number__but')) {
 
 
        let arrNuberCalc = document.querySelectorAll('.number__but');
 
        for(let i = 0; i < arrNuberCalc.length; i++) {
            mycalc(arrNuberCalc[i]);
        }
 
        function mycalc(nuberCalc) {
            let numberDown = nuberCalc.querySelector('.number__down'),
                numberUp = nuberCalc.querySelector('.number__up'),
                numberInp = nuberCalc.querySelector('[type="number"]'),
                min = +numberInp.getAttribute('min'),
                max = +numberInp.getAttribute('max'),
                step = +numberInp.getAttribute('step');
                numberInp.value = min
 
            numberDown.addEventListener('click', function (e) {
 
                e = e || event;
                e.preventDefault();
 
                numberInp.focus();
 
                valueInp = +numberInp.value || max;
 
                if (!(min >= valueInp - step)) {
                    numberInp.value = valueInp - step;
                } else {
                    numberInp.value = min;
                }
            })
 
            numberUp.addEventListener('click', function (e) {
 
                e = e || event;
                e.preventDefault();
 
                numberInp.focus();
 
                valueInp = +numberInp.value || min;
 
                if (!(max <= valueInp + step)) {
                    numberInp.value = valueInp + step;
                } else {
                    numberInp.value = max;
                }
            })
        }
    }
})

