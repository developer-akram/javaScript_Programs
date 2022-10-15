function gross() {
    var gs, hra, bs, da;
    bs = parseInt(document.getElementById('bsal').value);
    hra = bs * 0.2;
    da = bs * 0.4;
    gs = bs + da + hra;
    document.getElementById('ans').innerHTML = 'Gross Salary = ' + gs;
}
function km_convert() {
    var k, m, c, f, i;
    k = parseInt(document.getElementById('km').value);
    m = k * 1000;
    c = k * 100000;
    f = k * 3280.839895;
    i = k * 39370.07874;
    document.getElementById('mtr').innerHTML = k + ' KM : ' + m + ' Meters';
    document.getElementById('cm').innerHTML = k + ' KM : ' + c + ' Centimeters';
    document.getElementById('feet').innerHTML = k + ' KM : ' + f + ' Feets';
    document.getElementById('inch').innerHTML = k + ' KM : ' + i + ' Inchs';
}
function total_percentage() {
    var s1, s2, s3, s4, s5, total, per;
    s1 = parseInt(document.getElementById('sub1').value);
    s2 = parseInt(document.getElementById('sub2').value);
    s3 = parseInt(document.getElementById('sub3').value);
    s4 = parseInt(document.getElementById('sub4').value);
    s5 = parseInt(document.getElementById('sub5').value);
    total = s1 + s2 + s3 + s4 + s5;
    per = total / 5;
    document.getElementById('total').innerHTML = 'Total : ' + total;
    document.getElementById('per').innerHTML = 'Percentage : ' + per;
}
function to_centigrade() {
    var f, c;
    f = parseInt(document.getElementById('far').value);
    c = (f - 32) * (5 / 9);
    document.getElementById('celcius').innerHTML = 'Result = ' + c.toFixed(2) + ' &#8451;';
}
function rec_cir_formulae() {
    var l, b, a_r, a_c, p_r, c_c, r, pi;
    pi = 22 / 7;
    l = parseInt(document.getElementById('len').value);
    b = parseInt(document.getElementById('bth').value);
    r = parseInt(document.getElementById('rad').value);
    a_r = l * b;
    p_r = 2 * (l + b);
    a_c = pi * (r * r);
    c_c = 2 * pi * r;
    document.getElementById('area_r').innerHTML = 'Rectangle<br><br>Area : ' + a_r;
    document.getElementById('peri_r').innerHTML = 'Perimeter : ' + p_r;
    document.getElementById('area_c').innerHTML = 'Circle<br><br>Area : ' + a_c.toFixed(2);
    document.getElementById('cir_c').innerHTML = 'Circumference : ' + c_c.toFixed(2);
}
function swap_two() {
    var a, b, temp;
    a = parseInt(document.getElementById('num1').value);
    b = parseInt(document.getElementById('num2').value);
    document.getElementById('before').innerHTML = 'BEFORE<br><br>First Number : ' + a + '<br><br>Second Number : ' + b;
    temp = a;
    a = b;
    b = temp;
    document.getElementById('after').innerHTML = 'AFTER<br><br>First Number : ' + a + '<br><br>Second Number : ' + b;
}
function sum_two() {
    var a, b;
    a = parseInt(document.getElementById('num1').value);
    b = parseInt(document.getElementById('num2').value);
    document.getElementById('sum_ans').innerHTML = a + ' + ' + b + ' = ' + (a + b);
}
function all_arithmetic() {
    var a, b;
    a = parseInt(document.getElementById('num1').value);
    b = parseInt(document.getElementById('num2').value);
    document.getElementById('ans_sum').innerHTML = 'Addition : ' + a + ' + ' + b + ' = ' + (a + b);
    document.getElementById('ans_sub').innerHTML = 'Substraction : ' + a + ' - ' + b + ' = ' + (a - b);
    document.getElementById('ans_mul').innerHTML = 'Multipliction : ' + a + ' * ' + b + ' = ' + (a * b);
    document.getElementById('ans_div').innerHTML = 'Division : ' + a + ' / ' + b + ' = ' + (a / b).toFixed(2);
    document.getElementById('ans_floor').innerHTML = 'Floor Division : ' + a + ' // ' + b + ' = ' + (Math.floor(a / b));
    document.getElementById('ans_module').innerHTML = 'Modulus : ' + a + ' % ' + b + ' = ' + (a % b);
    document.getElementById('ans_power').innerHTML = 'Power : ' + a + ' * ' + b + ' = ' + (Math.pow(a, b));
}
function cm_convert() {
    var k, m, c;
    c = parseInt(document.getElementById('cm').value);
    m = c / 100;
    k = c / 100000;
    document.getElementById('mtr').innerHTML = c + ' CMs : ' + m + ' Meters';
    document.getElementById('km').innerHTML = c + ' CMs : ' + k + ' Kilometers';
}
function to_fahrenheit() {
    var c, f;
    c = parseInt(document.getElementById('cen').value);
    f = (c * (9 / 5)) + 32;
    document.getElementById('fahrenheit').innerHTML = 'Result = ' + f.toFixed(2) + '&#8457;';
}
function days_to_other() {
    var d, w, m, y;
    d = parseInt(document.getElementById('days').value);
    w = Math.floor(d / 7);
    m = Math.floor(d / 30);
    y = Math.floor(d / 365);
    document.getElementById('weeks').innerHTML = d + ' Days &rarr;' + w + ' Weeks';
    document.getElementById('months').innerHTML = d + ' Days &rarr; ' + m + ' Months';
    document.getElementById('years').innerHTML = d + ' Days &rarr; ' + y + ' Year';
}
function power() {
    var a, b, power;
    a = parseInt(document.getElementById('num').value);
    b = parseInt(document.getElementById('power').value);
    power = Math.pow(a, b);
    document.getElementById('ans_power').innerHTML = a + ' * ' + b + ' = ' + power;

}
function square_root() {
    var a, sroot;
    a = parseInt(document.getElementById('num').value);
    sroot = Math.sqrt(a);
    document.getElementById('ans_sroot').innerHTML = '&radic;' + a + ' = ' + sroot;

}
function third_angle() {
    var f, s, t;
    f = parseInt(document.getElementById('first').value);
    s = parseInt(document.getElementById('second').value);
    t = 180 - (f + s)
    document.getElementById('angle_3').innerHTML = 'Third Angle = ' + t;

}
function triangle_area() {
    var b, h, a;
    b = parseInt(document.getElementById('base').value);
    h = parseInt(document.getElementById('height').value);
    a = (h * b) / 2;
    document.getElementById('area_triangle').innerHTML = 'Area = ' + a;
}
function triangle_area_eq() {
    var s, a;
    s = parseInt(document.getElementById('side').value);
    a = (Math.sqrt(3) / 4) * (s * s)
    document.getElementById('area_triangle').innerHTML = 'Area = ' + a.toFixed(2);
}
function simple_interest() {
    var p, r, t, si, total;
    p = parseInt(document.getElementById('p_amount').value);
    r = parseInt(document.getElementById('inter').value);
    t = parseInt(document.getElementById('year').value);
    si = (p * r * t) / 100;
    total = si + p;
    document.getElementById('si').innerHTML = 'Simple Interest = ' + si.toFixed(2) + '&#8377;<br><br>Final Amount = ' + total.toFixed(2) + '&#8377;';
}
function compound_interest() {
    var p, r, t, ci, n;
    p = parseInt(document.getElementById('p_amount').value);
    r = parseInt(document.getElementById('inter').value);
    t = parseInt(document.getElementById('year').value);
    n = parseInt(document.getElementById('com').value);
    r = 1 + ((r / 100) / n);
    ci = p * Math.pow(r, n + t);
    document.getElementById('ci').innerHTML = 'Final Amount = ' + ci.toFixed(2) + '&#8377;';
}
function even_odd() {
    var n;
    n = parseInt(document.getElementById('num').value);
    if (n % 2 == 0) {
        document.getElementById('even_odd').innerHTML = n + " is Even Number";
    }
    else {
        document.getElementById('even_odd').innerHTML = n + " is Odd Number";

    }

}
