import React from 'react'
import { Col, Row } from 'react-bootstrap'
import home from '../Assets/home.png'
import HomeProjects from '../Components/HomeProjects'


function PFHome() {
  return (
    <>
    {/* Landing section */}
        <div className='container-fluid rounded' style={{width:'100%',height:'100vh',backgroundColor:'#61FFC8'}}>

            <Row className='align-items-center p-5'>

                <Col sm={12} md={6}>
                    <h1 style={{fontSize:'80px',color:'black'}}><i className="fa-brands fa-stack-overflow fa-bounce"></i>  Project Fair</h1>
                    <p>One stop destination for all software development project ,This website allow you to store and display your variety projects ideas to a large community.</p>
                    <button className='btn btn-info'>Getting Started</button>
                </Col>
                <Col sm={12} md={6}>
                    <img style={{marginTop:'100px'}} className='img-fluid w-75' src={home} alt="pf" />
                </Col>

            </Row>
        </div>

        {/* glimps of all projects */}
        <div className="all-projects mt-5">
            <HomeProjects/>
        </div>
    </>
  )
}

export default PFHome