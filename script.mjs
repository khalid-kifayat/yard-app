function doConvert(event)   {

    console.log("button clicked");
    event.preventDefault();

    let myNumber = document.querySelector("#myNumber").value.trim();

    if (myNumber === "") {
        alert("Please enter a value in the input field.");
        return; // Exit the function if the input is empty.
    }
    

    console.log(myNumber);
    

    let result = Number(myNumber) * 9;
    console.log(result);

    let message = `If we change ${myNumber} Yard into Square foot then we will get = ${result} sq.ft.`;

    document.querySelector("#resultBox").innerHTML = message;

}