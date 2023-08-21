let counterElement=document.getElementById("counter value");
function onIncrement(){
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue =parseInt(previousCounterValue)+1;
    if(updatedCounterValue> 0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue< 0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
    counterElement.textContent=updatedCounterValue;

}
function onDecrement(){
    let previousCounterValue=counterElement.textContent;
    let updatedCounterValue=parseInt(previousCounterValue)-1;
    if(updatedCounterValue > 0){
        counterElement.style.color="green";
    }
    else if(updatedCounterValue< 0){
            counterElement.style.color="red";
        }
    else{
            counterElement.style.color="black";
        }
        counterElement.textContent=updatedCounterValue;
    }
function onreset(){
    let counterVlue=0;
    counterElement.textContent=counterVlue;
    counterElement.style.color="black";

}