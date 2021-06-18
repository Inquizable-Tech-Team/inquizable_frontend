import React, {Fragment} from 'react'


import './submit.css'
import Data from './data.json'


export const Submit = () => {
    
      

    return (
        <Fragment>
        <div class="bg-gray-500 shadow-md rounded-2xl m-2 p-20">
            <div class=" title-font mb-2 text-4xl font-bold items-center text-center text-left sm:text-2xl"> Submit Your Questions
            </div><br></br><br></br>
            <input className="appearance-none block w-full bg-grey-lighter 
                             text-grey-darker border border-grey-lighter rounded-lg 
                             h-10 px-4" required="required" type="text" placeholder='Whats Your Questions'>
            </input>
            <br></br><br></br>
            <div className="float-right">
                <label class="text-xs font-semibold text-white-600 py-2">Correct Answer:<abbr class="hidden" title="required">*</abbr></label><br></br>
                <input type="text" className="text-xs rounded-lg h-10 px-4" placeholder="Type Correct Answer"></input>
                <br></br>
                <label class="text-xs font-semibold text-white-600 py-2">Wrong Answer:<abbr class="hidden" title="required">*</abbr></label><br></br>
                <input type="text" className="text-xs rounded-lg h-10 px-4 " placeholder="Type Wrong Answer"></input>
                <br></br>
                <label class="text-xs font-semibold text-white-600 py-2 ">Wrong Answer:<abbr class="hidden" title="required">*</abbr></label><br></br>
                <input type="text" className="text-xs rounded-lg h-10 px-4 " placeholder="Type Wrong Answer"></input>
                <br></br>
                <label class="text-xs font-semibold text-white-600 py-2">Wrong Answer:<abbr class="hidden" title="required">*</abbr></label><br></br>
                <input type="text" className="text-xs rounded-lg h-10 px-4 " placeholder="Type Wrong Answer"></input>
                <br></br>
            </div>
            <br></br>

            <div class="text-lg ">Choose your type of question</div>
            <br></br>
            <div class="mt-2">
                <label class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value="personal" />
                    <span class="ml-2">True/False</span></label>
                <label class="inline-flex items-center ml-6">
                    <input type="radio" class="form-radio" name="accountType" value="busines" />
                    <span class="ml-2">Multiple</span></label><br></br><br></br>
                <label class="font-semibold  py-2">Select Category</label>
                <select class="block bg-grey-lighter  border border-grey-lighter rounded-lg h-10 px-4 " required="required" name="integration[city_id]" id="integration_city_id">
                    <option value="" class="text-white-600">Select Category</option>
                    {Data.map(post => {
                        console.log(post)
                        return (
                        <Fragment>
                            <option value="">{post.category}</option> 
                        </Fragment>   ) 
                    })}
                </select>
            </div>
            <label class="font-semibold py-2">How difficult is your question?</label><br></br>
            <select class="block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 " required="required" name="integration[city_id]" id="integration_city_id">
                <option value="">Select Difficulty</option>
                <option value="">Easy</option>
                <option value="">Medium</option>
                <option value="">Hard</option>
            </select>
            <br></br>
            <div class="flex justify-center">
                <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm 
                shadow-sm font-medium tracking-wider text-black rounded-full 
                hover:shadow-lg hover:bg-red-400">Submit</button>
            </div></div>

        </Fragment>
    )
}