import React, {Fragment, useState, useContext} from 'react'
import Data from './data.json'
import SubCategories from './subcategory'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { UserContext } from '../context/UserContext'

export const Categories = () => {
    const [user] = useContext(UserContext)
    const [categoryIndex, setCategoryIndex] = useState(false)
/* Categories are mapped with the help of DATA from data.json */
    return (
        <Fragment>
            <Navbar />
            <section className="text-gray-200 darkblueBackground">
                <div className="max-w-6xl mx-auto px-5 py-12 ">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h3 className="title-font mb-2 text-4xl leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"> Hello {user.nickname}</h3>
                        <p className="lg:w-1/2 w-full leading-relaxed text-base">Choose a Category</p>
                    </div>
                    <div className="posts">
                        <div className="lg:flex md:flex flex-wrap -m-5 text-center xs:block">
                            {Data.map((post, index) => {
                                return (
                                    <Fragment key={index}>
                                        {post.category === 'Random' ?
                                            <div className="xl:w-1/5 md:w-1/5 p-5 xs:w-100" key={index}>
                                                <Link to='/quiz/0'>
                                                    <div className="categorySelectionButton">
                                                        <h2 className="text-lg font-medium title-font mb-2">{post.category}</h2>
                                                    </div>
                                                </Link>
                                            </div>
                                            : post.category === 'Community' ?
                                            <div className="xl:w-1/5 md:w-1/5 p-5" key={index}>
                                                <Link to='/quiz/community'>
                                                    <div className="categorySelectionButton">
                                                        <h2 className="text-lg font-medium title-font mb-2">{post.category}</h2>
                                                    </div>
                                                </Link>
                                            </div>
                                            :
                                            <div key={index} className="xl:w-1/5 md:w-1/5 p-5 sx:w-1" onClick={(() => {
                                                setCategoryIndex(post.id)
                                            })}>
                                                <div className="categorySelectionButton">
                                                    <h2 className="text-lg font-medium title-font mb-2">{post.category}</h2>
                                                </div>
                                            </div>}
                                    </Fragment>
                                )
                            })} </div></div></div>
            </section>
            <hr></hr>
            {categoryIndex && <SubCategories categoryIndex={categoryIndex}/>}
        </Fragment >
    )
}