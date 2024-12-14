import React from 'react';
import Pcard from './Pcard';
import { CRow,CContainer,CCol } from '@coreui/react';
const details=[
  {
    source:require("../../Assets/web.png"),
    link:'https://github.com/shagufta-01/Edu-University-websiet',
    title:'Edu-University-websiet'
  },
  {
    source:require("../../Assets/url.webp"),
      link:'https://github.com/shagufta-01/Url-Shortner',
      title:'Url Shortner'
  },
  {
  source:require("../../Assets/authenication.webp"),
  link:'https://github.com/shagufta-01/User-Authentication',
   title:'User Authentication'
  },
]
const project = () => {
return (
  <CContainer>
    <h1 className="purple">Projects</h1><br></br>
    <CRow>
    <CCol lg='4' md='6' sm='12' >
    <Pcard  details={details[0]} />
    </CCol>
    <CCol lg='4' md='6' sm='12' >
    <Pcard  details={details[1]} />
    </CCol>
    <CCol lg='4' md='6' sm='12' style={{marginleft:'5%'}} >
    <Pcard  details={details[2]}/>
    </CCol>  
    </CRow>
  </CContainer>
)
}
export default project;



// #shaguftaFatima444