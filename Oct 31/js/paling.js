function pal()
{
    let input = document.getElementById('input1').value;
    input = input.split(' ');
    let newInput = [];
    let output = [];
    for (let i = 0; i < input.length ; i++)
    {
        newInput[i] = input[i].split('').reverse().join('');
        if (newInput[i] == input[i])
        {
            output.push(input[i]);
        }
    }
    if (output.length != 0)
    {
        let max = output[0];
        for (i=0; i<output.length; i++)
        {
            if (output[i].length > max.length)
            {
                max = output[i];
            }
        }
        if (max.length!=0){
            document.getElementById('output-scr').value = max;
        }
        else
            alert('Input Cannot blank');
    }
    else
    {
        
        document.getElementById('output-scr').value = 'No palingdrome strings available';
    }
}
