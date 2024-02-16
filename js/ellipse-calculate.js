// objective: create a reusable function for calculate both perimeter and apothem

function ellipseAreaCalculate(){
    const a= getInputValueById('length-semi-major-axis');
    const b= getInputValueById('length-semi-minor-axis');
    const area= 3.1416 * a * b; 
    const finalArea= area.toFixed(2);

    setValueOfArea('ellipse-area-value', finalArea);

}

function getInputValueById(inputFieldId){
    const inputFieldValue= document.getElementById(inputFieldId).value;
    const inputFinalValue= parseFloat(inputFieldValue);
    return inputFinalValue;

}

function setValueOfArea(elementId, area){
    const areaValue= document.getElementById(elementId);
    areaValue.innerText= area;
}