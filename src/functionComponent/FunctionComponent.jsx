function FunctionComponent(){
    return(
        <div>
            <h1 onClick={handClick} id="color">HELLO WORLD</h1>
            <p>My first pangram</p>
            <p id="random"></p>
        </div>
    )
}
function handClick(){
    console.log("hello");
    const newColor = document.getElementById("color");
    newColor.style.color = "blue"
    newColor.innerHTML = "nguyễn thanh tùng"
    //random
    const random = document.getElementById("random");
    const newRandom = Math.floor(Math.random()*100);
    random.innerHTML = newRandom
}
export default FunctionComponent