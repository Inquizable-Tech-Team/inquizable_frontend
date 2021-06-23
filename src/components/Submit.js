import React, { useEffect, useState, Fragment, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import './submit.css'
import { submitFunction } from './Controller'
import Navbar from './Navbar';
import { UserContext } from '../context/UserContext';

export const Submit = () => {
    const [user] = useContext(UserContext)
    const [questionName, setQuestionName] = useState('')
    const [correctA, setCorrectA] = useState('')
    const [wrongA1, setWrongA1] = useState('')
    const [wrongA2, setWrongA2] = useState('')
    const [wrongA3, setWrongA3] = useState('')
    const [qType, setQType] = useState('')
    const [qD, setQD] = useState('')

    const queryString = require('query-string');
    let history = useHistory();

    useEffect(() => {
        if (!user) history.push('./login')
    }, [user])

    const submitQuestion = () => {
        if (qType !== 'multiple') {
            if (!qType || !qD || !wrongA1 || !correctA || !questionName) alert('Please fill out all the fields')
            else {
                const question = queryString.stringify({
                    type: qType,
                    category: 'community',
                    difficulty: qD,
                    question: questionName,
                    correct_answer: correctA,
                    incorrect_answers: [`"${wrongA1}"`],
                    approved: 0,
                    Users_id: user.id
                })
                submitFunction(question).then(res => {
                    if (res) {
                        alert('Your Question has been submitted!')
                    }
                    else alert('Oops, something went wrong...')
                })
            }
        }
        else {
            if (!qType || !qD || !wrongA1 || !wrongA2 || !wrongA3 || !correctA || !questionName) alert('Please fill out all the fields')
            else {
                const question = queryString.stringify({
                    type: qType,
                    category: 'community',
                    difficulty: qD,
                    question: questionName,
                    correct_answer: correctA,
                    incorrect_answers: `["${wrongA1}","${wrongA2}","${wrongA3}"]`,
                    approved: 0,
                    Users_id: user.id
                })
                submitFunction(question).then(res => {
                    if (res) {
                        alert('Your Question has been submitted!')
                    }
                    else alert('Oops, something went wrong...')
                })
            }
        }
    }
    return (
        <Fragment>
            <Navbar user={user} />
            <div class=" shadow-md rounded-2xl m-2 p-20">
                <div class=" title-font mb-2 text-4xl font-bold items-center text-center text-left sm:text-2xl"> Submit Your Questions
                </div><br /><br />
                <input className="appearance-none block w-full bg-grey-lighter 
                             text-black border border-grey-lighter rounded-lg 
                             h-10 px-4" required="required" type="text" placeholder='Whats Your Questions' onChange={(e) => setQuestionName(e.target.value)}>
                </input>
                <br></br><br></br>
                <div className="float-right">
                    <label class="text-xs font-semibold text-white-600 py-2">Correct Answer:<abbr class="hidden" title="required">*</abbr></label><br></br>
                    <input type="text" className="text-xs rounded-lg h-10 px-4 text-black" placeholder="Type Correct Answer" onChange={(e) => setCorrectA(e.target.value)}></input>
                    <br></br>
                    <label class="text-xs font-semibold text-white-600 py-2">Wrong Answer:<abbr class="hidden" title="required">*</abbr></label><br></br>
                    <input type="text" className="text-xs rounded-lg h-10 px-4 text-black " placeholder="Type Wrong Answer" onChange={(e) => setWrongA1(e.target.value)}></input>
                    <br></br>
                    {qType === 'multiple' && <Fragment><label class="text-xs font-semibold text-white-600 py-2 ">Wrong Answer:<abbr class="hidden" title="required">*</abbr></label><br></br>
                        <input type="text" className="text-xs rounded-lg h-10 px-4 text-black" placeholder="Type Wrong Answer" onChange={(e) => setWrongA2(e.target.value)}></input>
                        <br></br>
                        <label class="text-xs font-semibold text-white-600 py-2">Wrong Answer:<abbr class="hidden" title="required">*</abbr></label><br></br>
                        <input type="text" className="text-xs text-black rounded-lg h-10 px-4 " placeholder="Type Wrong Answer" onChange={(e) => setWrongA3(e.target.value)}></input></Fragment>}
                    <br></br>
                </div>
                <br></br>
                <div class="text-lg ">Choose your type of question</div>
                <br></br>
                <div class="mt-2">
                    <label class="inline-flex items-center">
                        <input type="radio" onChange={(e) => setQType(e.target.value)} lass="form-radio text-black" name="accountType" value="boolean" />
                        <span class="ml-2" >True/False</span></label>
                    <label class="inline-flex items-center ml-6">
                        <input type="radio" class="form-radio" name="accountType" onChange={(e) => setQType(e.target.value)} value="multiple" />
                        <span class="ml-2">Multiple</span></label><br /><br />
                </div>
                <label class="font-semibold py-2">How difficult is your question?</label><br></br>
                <select class="block  bg-grey text-black border border-grey-lighter rounded-lg h-10 px-4 " onChange={(e) => setQD(e.target.selectedOptions[0].label)} required="required" name="integration" id="integration_city_id">
                    <option value="">Select Difficulty</option>
                    <option value="">easy</option>
                    <option value="">medium</option>
                    <option value="">hard</option>
                </select><br /><br />
                <div class="flex justify-center">
                    <button onClick={submitQuestion} class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm 
                shadow-sm font-medium tracking-wider text-black rounded-full 
                hover:shadow-lg hover:bg-red-400">Submit</button>
                </div></div>
        </Fragment>
    )
}