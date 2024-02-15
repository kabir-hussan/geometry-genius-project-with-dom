function triangleArea(){
    // get triangle base with float value
    const triangleBase= document.getElementById('triangle-base').value;
    const base= parseFloat(triangleBase);

    // get triangle height with float value

    const triangleHeight= document.getElementById('triangle-height').value;
    const height= parseFloat(triangleHeight);

    // find the area using triangle area formula

    const areaOfTriangle= 0.5 * base * height;

    // put the triangle area value into the area option
    // get the triangle area value container

    const valueOfTriangle= document.getElementById('triangle-area-value');
    valueOfTriangle.innerText= areaOfTriangle;
    console.log(valueOfTriangle);

}