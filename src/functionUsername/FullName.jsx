function FullName(firstName, lastName){
    return firstName + " " + lastName
}
const fName = "Nguyen Van";
const lName = "A"
const style = {
    textAlign:"center",

}
function App(){
    return(
        <div style={style}>
            <p>First Name: {fName}</p>
            <p>Last Name: {lName}</p>
            <p>Full Name: {FullName(fName, lName)}</p>
        </div>
    )
}
export default App