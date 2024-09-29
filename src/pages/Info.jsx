import React from 'react'
import Navbar from '../component/Navbar.jsx'

function Info() {
    return (
        <>
        <Navbar />
            <div className="flex items-center justify-center h-screen py-6">
                <div className="w-[80%] border rounded shadow-lg">
                    <div className='bg-slate-300 w-[100%] h-5'></div>
                    <div className="flex justify-center items-center p-5 font-bold text-2xl">Course Info!</div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className='font-bold text-lg text-black'>Course</th>
                                    <th className='font-bold text-lg text-black'>Classes</th>
                                    <th className='font-bold text-lg text-black'>Exam Days</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Js</td>
                                    <td>sun mon tus </td>
                                    <td>sun</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Java</td>
                                    <td>5 Days</td>
                                    <td>mon</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Html/Css</td>
                                    <td>3 Days</td>
                                    <td>tus</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center items-center ">
                    </div>
                    <div className='bg-slate-300 w-[100%] h-5'></div>
                </div>
            </div>
        </>
    )
}

export default Info