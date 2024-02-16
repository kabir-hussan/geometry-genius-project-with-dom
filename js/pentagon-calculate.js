// objective: create a reusable function for calculate both perimeter and apothem

function pentagonAreaCalculate(){
    const p= getInputValueById('pentagon-perimeter');
    const b= getInputValueById('pentagon-apothem');
    const area= 0.5 * p * b; 

    setValueOfArea('pentagon-area-value', area);

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