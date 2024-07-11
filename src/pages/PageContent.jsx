import React from 'react'
import Header from './pageContentComponent/Header'
import Services from './pageContentComponent/Services'
import Designers from './pageContentComponent/Designers'
import Team from './pageContentComponent/Team'
import PricingTables from './pageContentComponent/PricingTables'
import Contact from './pageContentComponent/Contact'

function PageContent() {
  return (
    <div className="w3-main" style={{marginLeft: '340px', marginRight: '40px'}}>
    <Header />
    <Services />
    <Designers />
    <Team />
    <PricingTables />
    <Contact />
    </div>
  )
}

export default PageContent