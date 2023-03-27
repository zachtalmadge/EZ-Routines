import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Error404 = () => {
    console.log('yello')
    
    useEffect(() => {
        document.title = "Page Not Found"
        return () => document.title = "E-Z Routines"
    })

    return(
        <Container className="text-center">
            <Row className="py-5">
                <p style={{fontSize: 200}}>🤷‍♂️</p>
                <h1 className="display-4">Whoops! Looks like nothing is here.</h1>
                <h1 className="display-6">Page Not Found</h1>
            </Row>
        </Container>
    )
}

export default Error404
