import React from 'react'
import Navbar from '../component/Navbar';
import Register from './Register';
import Info from './info';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />

      {/*  */}
      {/* <Register /> */}

      {/*  */}
      {/* <div className='flex justify-center items-center '> */}
      {/* <Info /> */}

      {/* </div> */}

      <div className='flex justify-center items-center gap-4 mt-16'>


        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Course Page!</h2>
            <p>Click here to see the Course Page</p>
            <div className="card-actions justify-end">
              <button className="btn bg-slate-300"><Link to="/infopage">Click</Link></button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Course Page!</h2>
            <p>Click here to see the Course Page</p>
            <div className="card-actions justify-end">
              <button className="btn bg-slate-300"><Link to="/register">Register</Link></button>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Home