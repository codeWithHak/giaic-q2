import Child from "./Child"
const date = new Date ()

function Parent () {
    return(
        <div>
            <Child message={date.toLocaleDateString()}/>
        </div>
    )
}

export default Parent