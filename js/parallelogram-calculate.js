// create rectangle area function

function parallelogramAreaCalculate()
{
    const parallelogramBase= document.getElementById('parallelogram-base').value;
    const base= parseFloat(parallelogramBase);

    const parallelogramHeight= document.getElementById('parallelogram-height').value;
    const height= parseFloat(parallelogramHeight);

    const area= base * height;

    const AreaOfParallelogram= document.getElementById('parallelogram-area-value');
    AreaOfParallelogram.innerText= area;
    // console.log(AreaOfParallelogram);
}