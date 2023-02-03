import "./Intro.css";
import Me from './images/address.png';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          {/* <h2 className="i-intro">Hello, my name is</h2> */}
          <h1 className="i-name">Gananathan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">WEB - DEVELOPER</div>
              <div className="i-title-item"> LANGUAGE : HTML - CSS - JAVASCRIPT</div>
              <div className="i-title-item"> LIBRARY : REACT JS</div>
              <div className="i-title-item"> DATABASE : MONGO DB</div>
              <div className="i-title-item"> SERVER : NODE & EXPRESS JS</div>
             
            </div>
          </div>
          <div className="i-desc">
            I have learnt web development through an online course and I have
            completed many complicated assignments and projects, so I am
            confident that I can add value to the job.
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className=""></img>
      </div>
    </div>
  );
};

export default Intro;
