import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center pt-5">
      <div
        className="d-flex flex-column align-items-center"
        style={{maxWidth: '650px'}}
      >
        <h1 className="text-uppercase fs-3">welcome to ecom panel</h1>
        <h3 className="text-uppercase fs-5 mb-4">tool for managing mock data</h3>
        <p className="text-center mb-4 text-capitalize">
          free to use content managment system for ecom api. select the desired data
          type to upload and follow simple instructions. any uploaded information
          will be reflected on global api. mock data represents a sample project
          serving educational purposes and can be utilized freely for any
          non-commercial self project. developed by (MiP).
        </p>

        <ul className="fw-semibold" style={{letterSpacing: 1.5}}>
          <li className="text-uppercase text-danger">
            <span className="me-2">database:</span>
            <span className="text-black">mongodb</span>
          </li>
          <li className="text-uppercase text-danger">
            <span className="me-2">hosting provider: </span>
            <span className="text-black">AWS ec2</span>
          </li>
          <li className="text-uppercase text-danger">
            <span className="me-2">file storage:</span>
            <span className="text-black">AWS s3</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
