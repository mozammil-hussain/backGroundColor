console.log("object");
const getColor = ()=>{
    //generating random number and using only before decimal using math.floor()function
    const random = Math.floor(Math.random()* 16777215);
    //console.log(random);
    // now converting into hex code
    const randomCode = "#"+random.toString(16);
    console.log(random, randomCode);
    console.log();
    document.body.style.backgroundColor= randomCode;
    let x= document.getElementById('color-code'); 
    x.innerText= randomCode;
    x.style.color= randomCode;
    

    Array.from(document.getElementsByClassName('we')).forEach(e=>{
    e.style.color= randomCode;
});
}

document.getElementById('btn').addEventListener('click',getColor);
