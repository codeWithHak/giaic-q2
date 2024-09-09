import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")

    const handleSumit = (e)=>{
        e.preventDefault()
        setName("")
        console.log(`Username: ${name}`);
}    
    
  return (
        <div className="Form">
            <form onSubmit={handleSumit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor='name'>Name: </label>
                        <input id='name'
                               type="text"
                               placeholder='Name'
                               name='name'
                               value={name}
                               onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <button disabled={!name} type='submit'>Submit</button>
                </fieldset>
            </form>
        </div>
  )
}

export default Form