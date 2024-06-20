
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

// eslint-disable-next-line react/prop-types
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow&aposs Leaders Today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis rerum maiores similique culpa consectetur explicabo aperiam qui voluptatem vitae ullam unde et amet odio natus obcaecati numquam, quos ex.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit praesentium delectus cumque aliquid ad dicta, minus, nemo est tempora perferendis enim asperiores architecto esse inventore. Animi odio sapiente culpa?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit odio molestias officia quisquam tempore omnis debitis libero perferendis repellendus? Itaque, placeat voluptatibus atque culpa sint sit temporibus voluptatem sequi?</p>
      </div>
    </div>
  )
}

export default About
