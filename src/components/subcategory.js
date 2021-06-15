import React from 'react'
import Data from './data.json'

 const SubCategories = () => {



    return (
       
        <div>
            <section class=" text-gray-200 bg-gray-900">
                <div class="max-w-6xl mx-auto px-5 py-24 ">
                  <div className="posts">
                    <div class="flex flex-wrap -m-5">
                    {Data.map((sub) =>{
                        return( 
                        <>        
                        <div class="xl:w-1/5 md:w-1/5 p-5">
                            <div class="border border-gray-300 p-6 rounded-lg">                      
                             <h2 class="text-lg  font-medium title-font mb-2"> subcategory</h2>                          
                            </div>                             
                        </div>                                               
                       </>
               ) })} </div></div>
                </div>
            </section>          
        </div>
       
    )
}
export default SubCategories;