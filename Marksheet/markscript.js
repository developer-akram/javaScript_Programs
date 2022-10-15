function msheet()
{
    let name,p,c,m,b,per,total,ben,dob,e,g,roll,th_math,th_beng,th_eng,th_che,th_bio,th_phy,lab_math,lab_beng,lab_eng,lab_che,lab_bio,lab_phy;
    name = document.getElementById('name').value;
    roll = document.getElementById('roll').value;
    dob = document.getElementById('dob').value;

    e = parseInt(document.getElementById('eng').value);
    ben = parseInt(document.getElementById('beng').value);
    m = parseInt(document.getElementById('math').value);
    p = parseInt(document.getElementById('phy').value);
    c = parseInt(document.getElementById('che').value);
    b = parseInt(document.getElementById('bio').value);

    lab_beng = Math.floor(ben*40 / 100);
    lab_math = Math.floor(m*40 / 100);
    lab_eng = Math.floor(e*40 / 100);
    lab_phy = Math.floor(p*40 / 100);
    lab_bio = Math.floor(b*40 / 100);
    lab_che = Math.floor(c*40 / 100);

    th_beng = ben - lab_beng;
    th_bio = b - lab_bio;
    th_che = c - lab_che;
    th_eng = e - lab_eng;
    th_math = m - lab_math;
    th_phy = p - lab_phy;

    // TOTAL MARKS
    document.getElementById('english').innerHTML = e;
    document.getElementById('physics').innerHTML = p;
    document.getElementById('chemistry').innerHTML = c;
    document.getElementById('biology').innerHTML = b;
    document.getElementById('mathematics').innerHTML = m;
    document.getElementById('bengali').innerHTML = ben;

    //LAB MARKS
    document.getElementById('lab_beng').innerHTML = lab_beng;
    document.getElementById('lab_math').innerHTML = lab_math;
    document.getElementById('lab_eng').innerHTML = lab_eng;
    document.getElementById('lab_phy').innerHTML = lab_phy;
    document.getElementById('lab_che').innerHTML = lab_che;
    document.getElementById('lab_bio').innerHTML = lab_bio;

    //THEORY MARKS
    document.getElementById('th_beng').innerHTML = th_beng;
    document.getElementById('th_math').innerHTML = th_math;
    document.getElementById('th_eng').innerHTML = th_eng;
    document.getElementById('th_phy').innerHTML = th_phy;
    document.getElementById('th_che').innerHTML = th_che;
    document.getElementById('th_bio').innerHTML = th_bio;

    document.getElementById('name-opt').innerHTML = 'Name : '+name;
    document.getElementById('roll-opt').innerHTML = 'Roll : '+roll;
    document.getElementById('dob-opt').innerHTML = 'Date of Birth : '+dob;

    //CALCULATON
    total = m + p + c + b + ben + e;
    per = total / 6;

    if (per >=80)
        g = 'AA';
    else if (per >=60)
        g = 'A';
    else if (per >=50)
        g = 'B';
    else if (per >=40)
        g = 'C';
    else if (per <40)
        g = 'D';
    
    document.getElementById('total-opt').innerHTML = 'Total : '+total;
    document.getElementById('per-opt').innerHTML = 'Percentage : '+per.toFixed(2)+' %';
    document.getElementById('grade-opt').innerHTML = 'Grade : '+g;
}