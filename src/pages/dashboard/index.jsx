import React from 'react'
import { FaCircleNotch, FaHome } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import MyChart from '../../components/dashboard/Mychat'

const Homeadmin = () => {
  return (
    <div className='w-100 '>
      <div className="cards">
        <div className="row">

          <div className="card col-12 col-md-6 col-lg-3 text-left p-2  border-0" style={{ background: "rgb(244, 247, 254)" }}>
            <div className="card-body d-flex justify-content-between bg-white rounded-4">
              <div className='d-flex flex-column gap-2'>
                <IoIosMail />
                <div className="card-text">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
              <div className='d-flex flex-column gap-2'>
                <FaCircleNotch />
                <div className="card-text">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-3 text-left p-2  border-0" style={{ background: "rgb(244, 247, 254)" }}>
            <div className="card-body d-flex justify-content-between bg-white rounded-4">
              <div className='d-flex flex-column gap-2'>
                <IoIosMail />
                <div className="card-text">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
              <div className='d-flex flex-column gap-2'>
                <FaCircleNotch />
                <div className="card-text">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-3 text-left p-2  border-0" style={{ background: "rgb(244, 247, 254)" }}>
            <div className="card-body d-flex justify-content-between bg-white rounded-4">
              <div className='d-flex flex-column gap-2'>
                <IoIosMail />
                <div className="card-text">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
              <div className='d-flex flex-column gap-2'>
                <FaCircleNotch />
                <div className="card-text">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-3 text-left p-2  border-0" style={{ background: "rgb(244, 247, 254)" }}>
            <div className="card-body d-flex justify-content-between bg-white rounded-4">
              <div className='d-flex flex-column gap-2'>
                <IoIosMail />
                <div className="card-text">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
              <div className='d-flex flex-column gap-2'>
                <FaCircleNotch />
                <div className="card-text">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyChart />
    </div>
  )
}

export default Homeadmin