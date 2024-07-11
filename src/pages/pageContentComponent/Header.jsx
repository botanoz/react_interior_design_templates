import React from 'react'

function Header() {
  return (
    <>
    <div className="w3-container" style={{marginTop: '80px'}} id="showcase">
    <h1 className="w3-jumbo"><b>Interior Design</b></h1>
    <h1 className="w3-xxxlarge w3-text-red"><b>Showcase.</b></h1>
    <hr style={{width: '50px', border: '5px solid red'}} className="w3-round" />
  </div>
 
  <div className="w3-row-padding">
    <div className="w3-half">
      <img src="https://www.w3schools.com/w3images/kitchenconcrete.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Concrete meets bricks" />
      <img src="https://www.w3schools.com/w3images/livingroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Light, white and tight scandinavian design" />
      <img src="https://www.w3schools.com/w3images/diningroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="White walls with designer chairs" />
    </div>
    <div className="w3-half">
      <img src="https://www.w3schools.com/w3images/atrium.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Windows for the atrium" />
      <img src="https://www.w3schools.com/w3images/bedroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Bedroom and office in one space" />
      <img src="https://www.w3schools.com/w3images/livingroom2.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Scandinavian design" />
    </div>
  </div>
  {/* Modal for full size images on click*/}
  <div id="modal01" className="w3-modal w3-black" style={{paddingTop: 0}} onclick="this.style.display='none'">
    <span className="w3-button w3-black w3-xxlarge w3-display-topright">×</span>
    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" className="w3-image" />
      <p id="caption" />
    </div>
  </div>
</>
  )
}

export default Header