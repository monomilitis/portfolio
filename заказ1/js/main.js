//range
function outputUpdate(vol) {
    const output = document.querySelector('#volume');
    output.value = vol;
    output.style.left = vol - 20 + 'px';
    if(output.value > 15) {
				output.style.left = vol - 35 + 'px';
			}
			if(output.value > 80) {
				output.style.left = vol - 50 + 'px';
			}
			if(output.value > 110) {
				output.style.left = vol - 65 + 'px';
			}
			if(output.value > 180) {
				output.style.left = vol - 80 + 'px';
			}
			if(output.value > 230) {
				output.style.left = vol - 100 + 'px';
			}
            if(output.value > 310) {
				output.style.left = vol - 120 + 'px';
			}
            if(output.value > 400) {
				output.style.left = vol - 140 + 'px';
			}
            if(output.value > 480) {
				output.style.left = vol - 160 + 'px';
			}
}


//number
document.addEventListener('DOMContentLoaded', function () {

    if (document.querySelector('.but')) {


        let arrNuberCalc = document.querySelectorAll('.but');

        for (let i = 0; i < arrNuberCalc.length; i++) {
            mycalc(arrNuberCalc[i]);
        }

        function mycalc(nuberCalc) {
            let numberDown = nuberCalc.querySelector('.minus'),
                numberUp = nuberCalc.querySelector('.plus'),
                numberInp = nuberCalc.querySelector('[type="text"]'),
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

//visible
function toggle1() {
    const div = document.getElementById('light');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'

}
document.getElementById('option_1').onchange = toggle1;


function toggle2() {
    const div = document.getElementById('curtains');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('option_2').onchange = toggle2;


function toggle3() {
    const div = document.getElementById('climate');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('option_3').onchange = toggle3;


function toggle4() {
    const div = document.getElementById('safety');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'

}
document.getElementById('option_4').onchange = toggle4;


function toggle5() {
    const div = document.getElementById('video');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('option_5').onchange = toggle5;


function toggle6() {
    const div = document.getElementById('control');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('option_6').onchange = toggle6;


function toggle7() {
    const div = document.getElementById('but_l1');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('light_1').onchange = toggle7;

function toggle8() {
    const div = document.getElementById('but_l2');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('light_2').onchange = toggle8;

function toggle9() {
    const div = document.getElementById('but_c1');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('curtains_1').onchange = toggle9;

function toggle10() {
    const div = document.getElementById('but_c2');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('curtains_2').onchange = toggle10;

function toggle11() {
    const div = document.getElementById('but_s1');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('safety_1').onchange = toggle11;

function toggle12() {
    const div = document.getElementById('but_s2');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('safety_2').onchange = toggle12;

function toggle13() {
    const div = document.getElementById('but_s3');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('safety_3').onchange = toggle13;

function toggle14() {
    const div = document.getElementById('but_s4');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('safety_4').onchange = toggle14;

function toggle15() {
    const div = document.getElementById('but_v1');
    if (this.checked)
        div.style.visibility = 'visible';
    else
        div.style.visibility = 'hidden'
}
document.getElementById('video_1').onchange = toggle15;

//calcul
payment()

function payment() {
    let btn = document.querySelector('#btn'),
        out = document.querySelector('#out'),
        light_1 = document.querySelector('#light_1'),
        light_2 = document.querySelector('#light_2'),
        curtains_1 = document.querySelector('#curtains_1'),
        curtains_2 = document.querySelector('#curtains_2'),
        climate_1 = document.querySelector('#climate_1'),
        climate_2 = document.querySelector('#climate_2'),
        climate_3 = document.querySelector('#climate_3'),
        climate_4 = document.querySelector('#climate_4'),
        safety_1 = document.querySelector('#safety_1'),
        safety_2 = document.querySelector('#safety_2'),
        safety_3 = document.querySelector('#safety_3'),
        safety_4 = document.querySelector('#safety_4'),
        video_1 = document.querySelector('#video_1'),
        video_2 = document.querySelector('#video_2'),
        video_3 = document.querySelector('#video_3'),
        video_4 = document.querySelector('#video_4'),
        control_1 = document.querySelector('#control_1'),
        control_2 = document.querySelector('#control_2'),
        control_3 = document.querySelector('#control_3'),
        qty_l1 = document.querySelector('#qty_l1'),
        qty_l2 = document.querySelector('#qty_l2'),
        qty_c1 = document.querySelector('#qty_c1'),
        qty_c2 = document.querySelector('#qty_c2'),
        qty_s1 = document.querySelector('#qty_s1'),
        qty_s2 = document.querySelector('#qty_s2'),
        qty_s3 = document.querySelector('#qty_s3'),
        qty_s4 = document.querySelector('#qty_s4'),
        qty_v1 = document.querySelector('#qty_v1'),
        option_1 = document.querySelector('#option_1'),
        option_2 = document.querySelector('#option_2'),
        option_3 = document.querySelector('#option_3'),
        option_4 = document.querySelector('#option_4'),
        option_5 = document.querySelector('#option_5'),
        option_6 = document.querySelector('#option_6'),
        sum = 0;
    btn.onclick = function () {
        if (light_1.checked) {
            light_1.value = 3000;
        } else {
            light_1.value = 0;
        }
        if (light_2.checked) {
            light_2.value = 6000;
        } else {
            light_2.value = 0;
        }
        if (curtains_1.checked) {
            curtains_1.value = 40000;
        } else {
            curtains_1.value = 0;
        }
        if (curtains_2.checked) {
            curtains_2.value = 40000;
        } else {
            curtains_2.value = 0;
        }
        if (climate_1.checked) {
            climate_1.value = 10000;
        } else {
            climate_1.value = 0;
        }
        if (climate_2.checked) {
            climate_2.value = 50000;
        } else {
            climate_2.value = 0;
        }
        if (climate_3.checked) {
            climate_3.value = 5000;
        } else {
            climate_3.value = 0;
        }
        if (climate_4.checked) {
            climate_4.value = 5000;
        } else {
            climate_4.value = 0;
        }
        if (safety_1.checked) {
            safety_1.value = 15000;
        } else {
            safety_1.value = 0;
        }
        if (safety_2.checked) {
            safety_2.value = 20000;
        } else {
            safety_2.value = 0;
        }
        if (safety_3.checked) {
            safety_3.value = 4000;
        } else {
            safety_3.value = 0;
        }
        if (safety_4.checked) {
            safety_4.value = 4000;
        } else {
            safety_4.value = 0;
        }
        if (video_1.checked) {
            video_1.value = 12000;
        } else {
            video_1.value = 0;
        }
        if (video_2.checked) {
            video_2.value = 7000;
        } else {
            video_2.value = 0;
        }
        if (video_3.checked) {
            video_3.value = 10000;
        } else {
            video_3.value = 0;
        }
        if (video_4.checked) {
            video_4.value = 20000;
        } else {
            video_4.value = 0;
        }
        if (control_1.checked) {
            control_1.value = 10000;
        } else {
            control_1.value = 0;
        }
        if (control_2.checked) {
            control_2.value = 25000;
        } else {
            control_2.value = 0;
        }
        if (control_3.checked) {
            control_3.value = 150000;
        } else {
            control_3.value = 0;
        }
        if (option_1.checked) {

        } else {
            light_1.value = 0;
            light_2.value = 0;
            
        }if (option_2.checked) {

        } else {
            curtains_1.value = 0;
            curtains_2.value = 0;
            
        }if (option_3.checked) {

        } else {
            climate_1.value = 0;
            climate_2.value = 0;
            climate_3.value = 0;
            climate_4.value = 0;
            
        }if (option_4.checked) {

        } else {
            safety_1.value = 0;
            safety_2.value = 0;
            safety_3.value = 0;
            safety_4.value = 0;
            
        }if (option_5.checked) {

        } else {
            video_1.value = 0;
            video_2.value = 0;
            video_3.value = 0;
            video_4.value = 0;
            
        }if (option_6.checked) {

        } else {
            control_1.value = 0;
            control_2.value = 0;
            control_3.value = 0;
            
        }if (option_1.checked) {

} else {
    light_1.value = 0;
    light_2.value = 0;

}
        let sum = (light_1.value * qty_l1.value) + (light_2.value * qty_l2.value) + (curtains_1.value * qty_c1.value) + (curtains_2.value * qty_c2.value) + Number(climate_1.value) + Number(climate_2.value) + Number(climate_3.value) + Number(climate_4.value) + (safety_1.value * qty_s1.value) + (safety_2.value * qty_s2.value) + (safety_3.value * qty_s3.value) + (safety_4.value * qty_s4.value) + (video_1.value * qty_v1.value) + Number(video_2.value) + Number(video_3.value) + Number(video_4.value) + Number(control_1.value) + Number(control_2.value) + Number(control_3.value);
        if (isNaN(sum)) {
            alert('Введите числовое значение');
        } else {
            out.innerHTML = sum;
        }
    }

}


$(document).ready(function () {

    $('#CTA').click(function () {
        $('html, body').animate({
            scrollDown: $(document).height()
        }, 'slow');
        return false;
    });

});


$(document).ready(function () {

    $('#up').click(function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
        return false;
    });

});
