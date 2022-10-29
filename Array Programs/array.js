let i, a = [], rev = [], da = [32, 11, 34, 55, 39], scr,temp,sort = [];
// i = 0;
function element() {
    i = parseInt(document.getElementById('element').value);
    a.push(i);
    da.push(i);
    alert("Element " + i + " added Successfully")
    document.getElementById('element').value = '';
}

function array_main() {
    document.getElementById('input_array').innerHTML = a;
}

function array_reverse() {
    for (j = a.length - 1; j >= 0; j--) {
        rev.push(a[j])
    }
    document.getElementById('reverse_array').innerHTML = rev;
}
function display_array() {
    document.getElementById('display_array').innerHTML = da;
}
function search() {
    find: 
    {
        scr = parseInt(document.getElementById('search').value);
        for (i = 0; i < da.length; i++) {
            if (scr == da[i]) {
                document.getElementById('pos_array').innerHTML = scr + ' Found in Position : ' + (i + 1);
                break find;
            }
        }
        document.getElementById('pos_array').innerHTML = scr + ' is not Present in the Array';
    }
}
function sort_a()
{
    for (i=0;i<da.length;i++)
    {
        for(j=i+1;j<da.length;j++)
        {
            if (da[i] > da[j])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    document.getElementById('sort_array').innerHTML = da;
}