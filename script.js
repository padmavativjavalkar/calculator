let result=document.getElementById("inputext");

function calculate(number){
    result.value+=number;
}

function result(){
    try{
        result.value=eval(result.value)

    }
    catch(err){
        alert("Enter the valid result");
    }
}

function clr(){
    result.value=" ";

}

function del(){
    result.value=result.value.slice(0,-1);
}