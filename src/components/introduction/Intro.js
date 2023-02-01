import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Gananathan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">WEB DEVELOPER</div>
              <div className="i-title-item">HTML</div>
              <div className="i-title-item">CSS</div>
              <div className="i-title-item">JAVASCRIPT</div>
              <div className="i-title-item">REACT</div>
              <div className="i-title-item">MONGO DB</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
