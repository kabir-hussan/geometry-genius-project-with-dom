// objective: create a reusable function for calculate both d1 and d2

function rhombusAreaCalculate(){
    const d1= getInputValueById('rhombus-d1');
    const d2= getInputValueById('rhombus-d2');
    const area= 0.5 * d1 * d2; 

    setValueOfArea('rhombus-area-value', area);

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