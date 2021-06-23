import React from 'react'
import Data from './data.json'
import {Link} from 'react-router-dom'

 const SubCategories = ({categoryIndex}) => {

    return (
        <div>
            <section className="text-gray-200 darkblueBackground text-center">
                <div className="max-w-6xl mx-auto px-5 py-12 ">
                <p className="lg:w-1/2 w-full font-bold text-lg leading-relaxed text-base m-auto mb-8">{Data[categoryIndex].category}</p>
                  <div className="posts">
                    <div className="flex flex-wrap -m-5">
                    {Data[categoryIndex].subcategory.map((sub, index) =>{
                        return( 
                        <div className="xl:w-1/5 md:w-1/5 p-5" key={index}>
                            <Link to={`/quiz/${sub.id}`}>
                            <div className="categorySelectionButton">                      
                             <h2 className="text-lg font-medium title-font mb-2">{sub.name}</h2>                          
                            </div> 
                            </Link>
                        </div>
               ) })} </div></div>
                </div>
            </section>          
        </div>
       
    )
}
export default SubCategories;