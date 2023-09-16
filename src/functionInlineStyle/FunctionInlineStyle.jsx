function FunctionInlineStyle(){
    const style = {
        border: "1px solid red",
        width: "50%"
    }
    const styleTwo = {
        border: "1px solid blue",
        width: "50%"
    }
    const styleThree = {
        border: "1px solid aqua",
        width: "50%"
    }
    return(
        <div>
            <h1 style={style} id="inline-style">this is inline style</h1>
            <h1 style={styleTwo} id="inline-style">this is inline style</h1>
            <h1 style={styleThree} id="inline-style">this is inline style</h1>

        </div>
    )
}
export default FunctionInlineStyle