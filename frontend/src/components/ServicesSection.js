import React from 'react'
import styled from 'styled-components'

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { About, Description } from '../styles'

const ServicesSection = () => {
    return (
        <Services>
            <ServiceDescription>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon = {faLaptopCode} size='3x'/>
                            <h3>Portfolio</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon = {faGraduationCap} size='3x'/>
                            <h3>Cursos</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon = {faGithubSquare} size='3x'/>
                            <h3>GitHub</h3>
                        </div>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-top: 50px;
    }
    p{
        width: 50%;
        padding: 20px 0px 40px 0px;
    }
`;

const ServiceDescription = styled(Description)`
    flex: 2;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`
const Card = styled.div`
    padding: 5px;
    flex-basis: 200px;
    .icon{
        display: flex;
        align-items: start;
    }
    h3{
        margin-left: 10px;
        background: white;
        color: black;
        padding: 10px;
    }
`

export default ServicesSection