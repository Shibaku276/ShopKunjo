import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from "./Logo"
import SocialMedia from './SocialMedia'
import { SubText } from './ui/text'


const Footer = () => {
  return (
    <footer className = "bg-white border-t">
        <Container>
          <FooterTop />
          <div className = 'py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className = 'space-y-4'>
              <Logo />
              <SubText> 
                Discover curated Tech collections at ShopKunjo, bleding usability and functionability to elevate your tech experince on a daily basis.
              </SubText>
              <SocialMedia className = "text-darkColor/60" iconClassName = "border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green" tooltipClassName='bg-darkColor text-white' />
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </Container>
    </footer>
  )
}






export default Footer