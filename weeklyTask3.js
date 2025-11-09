function celciusToFarenheit(n){
    if(typeof n != "number"){
        return "input harus berupa number";
    }
    let farenheit = "";
    farenheit = (n * 9/5) + 32

    console.log(farenheit);
}
celciusToFarenheit(4)

function farenheitToCelcius(n){
    if(typeof n != "number"){
        return "input harus berupa number";
    }
    let celcius = "";
    celcius = (n - 32) * 5/9

    console.log(celcius);
}

farenheitToCelcius(39.2)