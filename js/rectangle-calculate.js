// create rectangle area function

function rectangleAreaCalculate()
{
    const rectangleLength= document.getElementById('rectangle-length').value;
    const length= parseFloat(rectangleLength);

    const rectangleWidth= document.getElementById('rectangle-width').value;
    const width= parseFloat(rectangleWidth);

    const area= length * width;

    const AreaOfRectangle= document.getElementById('rectangle-area-value');
    AreaOfRectangle.innerText= area;
    // console.log(AreaOfRectangle);
}