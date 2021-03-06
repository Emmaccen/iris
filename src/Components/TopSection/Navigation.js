import React,{Component} from 'react'

class Navigation extends Component {

  scrollToView(element){
    document.getElementById(element).scrollIntoView({
    behavior: 'smooth'
  });
  }
   closeNav () {
    document.getElementById('navigation').style.width = '0px'
    document.getElementById('navIcon').style.display ='block'
  }
  openNav () {
    document.getElementById('navigation').style.width = '250px'
    document.getElementById('navIcon').style.display ='none'
  }

  /*
i've hiddedn phone menu styles by default, index.js handles 
anything otherwise
   */

  render() {
    return (
        <div id='nav' className='navLinks'>
          <div id='phoneMenu' style={{display : 'none', padding : '0px'}}>
              <a style={{display : 'none'}} href id='phoneLogo' onClick={()=> window.location.reload(true)} className='iris'><img src={'/Icon.png'} alt=''></img></a>
              <span style={{display : 'none'}} id='navIcon' onClick={()=> this.openNav()} className="openNav icon-menu2 iris">
              </span>
          </div>
          <nav id='navigation'>
            <ul id='activeLinks'>
              <li><a href onClick={()=> this.scrollToView('home')} className="active">Home</a></li>
            <li><a href onClick={()=> this.scrollToView('aboutId')} >About</a></li>
          <li><a href onClick={()=> this.scrollToView('servicesId')} >Services</a></li>
        <li id='logo'><a href onClick={()=> window.location.reload(true)}><img src={'/Icon.png'} alt=''></img></a></li>
              <li><a href onClick={()=> this.scrollToView('galleryId')} >Gallery</a></li>
            <li><a href onClick={()=> this.scrollToView('blogId')} >Blogs</a></li>
          <li><a href onClick={()=> this.scrollToView('contactId')} >Contact</a></li>
        <li style={{display : 'none'}} id='closeNav' href onClick={()=> this.closeNav()}><a href>&times;</a></li>
            </ul>
          </nav>
        </div>
    )
  }
}

function scroller (element) {
  document.getElementById(element).scrollIntoView({
  behavior: 'smooth'
});
}

export default Navigation
export { scroller }
