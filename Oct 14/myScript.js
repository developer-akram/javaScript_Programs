function fact()
{
    let n,f,x;
    n = parseInt(document.getElementById('num').value);
    x = n;
    if (n>0)
    {
        f = 1;
        while(n>0)
        {
            f *= n;
            n -= 1;
        }
        document.getElementById('result').innerHTML = x+' ! &rarr; '+f;
    }
    else
        document.getElementById('result').innerHTML = 'Error! Number Should be Positive';
}
function table()
{
    let n,i,s;
    n = parseInt(document.getElementById('num').value);
    if (n>0)
    {
        i = 1;
        s = ''
        while(i <= 10)
        {
            s = s + n+' * '+i+' = '+(n * i)+'<br>';
            i += 1;
        }
        document.getElementById('result').innerHTML = s;
    }
    else
        document.getElementById('result').innerHTML = 'Error! Number Should be Positive';
}
function armstrong()
{
    let n,len,x,ans,r;
    n = parseInt(document.getElementById('num').value);
    len = n.toString().length;
    if (n>0)
    {
        x = n;
        ans = 0;
        while(n != 0)
        {
            r = n % 10;
            ans += Math.pow(r,len);
            n = Math.floor(n / 10);
        }
        if (x == ans)
            document.getElementById('result').innerHTML = x+' is an Armstrong Number';
        else
            document.getElementById('result').innerHTML = x+' is not an Armstrong Number';
    }
    else
        document.getElementById('result').innerHTML = 'Error! Number Should be Positive';
}
function reverse_no()
{
    let n,r,x,rev;
    n = parseInt(document.getElementById('num').value);
    if (n>0)
    {
        rev = '';
        x = n;
        while(n != 0)
        {
            r = n % 10;
            rev += r.toString();
            n = Math.floor(n / 10);
        }
        document.getElementById('result').innerHTML = 'Input : '+x+'<br>Output : '+rev;
    }
    else
        document.getElementById('result').innerHTML = 'Error! Number Should be Positive';
}