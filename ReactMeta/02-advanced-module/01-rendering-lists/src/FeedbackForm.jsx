import React, { useState } from 'react'

const FeedbackForm = () => {

    // const [often,setOften] = useState("")
    // const [motivation,setMotivation] = useState("")
    // const [feature,setFeature] = useState("")
    // const [improve,setImprove] = useState("")

    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     setOften("")
    //     setMotivation("")
    //     setFeature("")
    //     setImprove("")
    //     console.log({
    //         howOften:often,
    //         motivation:motivation,
    //         bestFeature:feature,
    //         needImprovement:improve
    //     })
    // }


    const [userData, setUserData] = useState({
        often:"",
        motivation:"",
        feature:"",
        improve:""
    })
    let name, value;
    const handleChange = (e)=>{
        name = e.target.name
        value = e.target.value

        setUserData({...userData, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setUserData({
            often:"",
            motivation:"",
            feature:"",
            improve:""
        })
        console.log({
            often:userData.often,
            motivation:userData.motivation,
            feature:userData.feature,
            improve:userData.improve
        });

        const{often,motivation,feature,improve} = userData
        const response = await fetch(
            "https://react-feedback-form-f3e97-default-rtdb.firebaseio.com/userDatabase.json",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    often,
                    motivation,
                    feature,
                    improve
                })
            }
         )
         if (response) {
            alert("Thanks For The Feedback")
         }
         else{
            alert("Kindly Fill All The Fields")
         }
        
    }

  return (
    <div className="bg w-full h-screen bg-gray-200 flex justify-center items-center font-semibold text-lg">
      <form onSubmit={handleSubmit} action="" className="parent-border lg:w-2/5 border flex justify-center items-center " >
        <div className="child-border fields py-16 flex flex-col gap-y-6 border border-gray-300 p-10 rounded-xl bg-white shadow-lg">
      <h1 className='text-center mb-2 text-3xl'>👋 Help Us Improve</h1>

          
          {/* Question 1 */}
          <div className=" flex flex-col items-center my-6">
            <label className='w-full text-left text-black mb-1' htmlFor="often">
              How often do you use our app?
            </label>
            <input className='w-full p-2 border border-gray-400 rounded-md' 
                   type="text" name="often" id="often" 
                   placeholder='Everyday/once a week/bi-weekly'
                   value={userData.often}
                   onChange={handleChange}/>
          </div>
          
          {/* Question 2 */}
          <div className="flex flex-col items-center my-2">
            <label className='w-full text-left text-black mb-1' htmlFor="motivation">
              What is the motivation to use our app?
            </label>
            <input className='w-full p-2 border border-gray-400 rounded-md' 
                   type="text" name="motivation" id="motivation" 
                   placeholder='What problem it solves for you?'
                   value={userData.motivation}
                   onChange={handleChange}/>
          </div>

          {/* Question 3 */}
          <div className="flex flex-col items-center my-2">
            <label className='w-full text-left text-black mb-1' htmlFor="feature">
              What is your favorite feature?
            </label>
            <input className='w-full p-2 border border-gray-400 rounded-md' 
                   type="text" name="feature" id="feature"
                   value={userData.feature}
                   onChange={handleChange}/>
          </div>

          {/* Question 4 */}
          <div className="flex flex-col items-center my-2">
            <label className='w-full text-left text-black mb-1' htmlFor="improve">
              What would you like to see improved the most?
            </label>
            <input className='w-full p-2 border border-gray-400 rounded-md' 
                   type="text" name="improve" id="improve"
                   value={userData.improve}
                   onChange={handleChange}/>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4 my-2">
            <button disabled={!(userData.often && userData.feature && userData.motivation && userData.improve)}
            className={`px-6 py-2 text-lg text-white rounded-sm
            ${!(userData.often && userData.feature && userData.motivation && userData.improve)
             ? " bg-blue-600 opacity-60 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"}`} type="submit">
              Submit Feedback
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default FeedbackForm
