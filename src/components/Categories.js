import React from 'react'
import Data from './data.json'
import SubCategories from './subcategory'

export const Categories = () => {
    return (
        <div>
            <section class=" text-gray-200 bg-gray-900">
                <div class="max-w-6xl mx-auto px-5 py-24 ">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h3 class=" title-font mb-2 text-4xl leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"> Hello "Nickname"</h3>
                        <p class="lg:w-1/2 w-full leading-relaxed text-base"> Choose Category </p>
                    </div>
                    <div className="posts">
                        <div class="flex flex-wrap -m-5">
                            {Data.map(post => {
                                console.log(post)
                                return (
                                    <>
                                    <div class="xl:w-1/5 md:w-1/5 p-5">
                                        <div class="border border-gray-300 p-6 rounded-lg">
                                                <h2 class="text-lg  font-medium title-font mb-2">{post.category} </h2>
                                        </div>
                                    </div>
                                    </>
                                )
                            })} </div></div></div>
            </section>
            <hr></hr>
            <SubCategories />
        </div>

    )
}
