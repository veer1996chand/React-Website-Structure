import React,{ useState } from 'react';
import Nav from 'react-bootstrap/Nav'
// Molecules 
import DBCardWithImage from "../../Molecules/DBCardWithImage"
import DBCardWithVideo from "../../Molecules/DBCardWithVideo"
import CardWithImage from "../../Molecules/CardWithImage"

const ScrollableTabsButtonPrevent = (props) => {
 
  const ImageData = props.ImageData.default
  const ImageCard = ImageData.map(data => {
    return (<DBCardWithImage data={data}
      cardClass="card-shadow ml-3 mr-3 mt-3"
      imageSrc={data.imageSrc}
      imageClass="w-100 h-50"
      titleClass=""
      btnName="View More"
      btnClick="1"
      btnClass="text-white btn-danger d-none"
      linkName="View More"
      linkClass="btn text-white btn-danger" />)
  })

  const VideoData = props.VideoData.default
  const VideoCard = VideoData.map(data => {
    return (<DBCardWithVideo data={data}
      cardClass="card-shadow ml-3 mr-3 mt-3" 
      videSrc={data.videoSrc}
      videoClass="embed-responsive embed-responsive-21by9"
      titleClass="content"
      btnClick="2"
      btnClass="text-white btn-danger d-none"
      linkName="View More"
      linkClass="btn text-white btn-danger"
       />)

  })

  const PressData = props.PressData.default
  const PressCard = PressData.map(data => {
    return (<DBCardWithImage data={data}
      cardClass="card-shadow ml-3 mr-3 mt-3"
      imageSrc={data.imageSrc}
      imageClass="w-100 h-50"
      btnClick="3"
      btnClass="text-white btn-danger d-none"
      linkName="View More"
      linkClass="btn text-white btn-danger" />)
  })

  const [tabData, setTabData] = useState(ImageCard)
  const handleSelect = eventKey => {
    if(eventKey=='image')
    {
      setTabData(ImageCard)
    }else if(eventKey=='video'){
      setTabData(VideoCard)
    }
    else{
      setTabData(PressCard)
    }
  }
  return (
    <div className="d-flex flex-column justify-content-center">
      <Nav className="col-12 col-md-6 d-flex align-self-center" variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="image" href="#/home">
            <i class="fas fa-image fa-3x"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-auto">
          <Nav.Link eventKey="video" title="Item">
            <i class="fas fa-play fa-3x"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-auto">
          <Nav.Link eventKey="press">
            <i class="far fa-newspaper fa-3x"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div class="col-12 col-md-11 row d-flex justify-content-center" >
        <div className="d-flex flex-row justify-content-center">
          <div className="col-12 col-md-11 d-flex flex-wrap" >
            {tabData} 
          </div>
        </div>  
      </div>
    </div>);
}

export default ScrollableTabsButtonPrevent
