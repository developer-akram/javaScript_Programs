function clickMe()
{
    let a = document.forms['frm']['state'];
    if(a[0].selected == false){
        console.log("Error");
    }
    else
    {
        console.log(a);
    }
}
