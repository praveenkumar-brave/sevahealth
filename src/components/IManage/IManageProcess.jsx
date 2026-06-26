import "./IManageProcess.scss";

export default function IManageProcess() {
  return (
    <section className="imanage-process">

      <div className="container">

        

        <div className="process-wrapper">

          {/* LEFT */}

          <div className="process-left">

            <h3>
              iManage
              <br />
              <span>simplifies all of it</span>
            </h3>

            <p className="subtitle">
              Our approach:
            </p>

            <div className="process-card active">

              <div className="icon-box">
              <img src="/assets/images/im-pros-icon1.svg" alt="icon"/>  
              </div>

              <div className="card-content">
                <h4>Ask Questions</h4>
                <p>Instead of Searching</p>
              </div>

              <span className="card-number">
                01
              </span>

            </div>

            <div className="process-card">

              <div className="icon-box">
              <img src="/assets/images/im-pros-icon2.svg" alt="icon"/>  
              </div>

              <div className="card-content">
                <h4>Your Reports</h4>
                <p>Are Written for You</p>
              </div>

              <span className="card-number">
                02
              </span>

            </div>

            <div className="process-card">

              <div className="icon-box">
                <img src="/assets/images/im-pros-icon3.svg" alt="icon"/>  
              </div>

              <div className="card-content">
                <h4>Speak</h4>
                <p>Instead of Typing</p>
              </div>

              <span className="card-number">
                03
              </span>

            </div>

          </div>

          {/* CENTER */}

          <div className="process-center">

            <div className="logo-circle ripple">

              <div className="logo-inner">
              <img src="/assets/images/im-process-icon.svg" alt="icon" className="ripple"/>
                {/* <div className="dot-grid">
                  {[...Array(9)].map((_, i) => (
                    <span key={i}></span>
                  ))}
                </div> */}
              </div>

            </div>

            <h4>iMANAGE</h4>

            <p>By SEVA Health</p>

          </div>

          {/* RIGHT */}

          <div className="process-right">

            <h3>
              Why This
              <br />
              <span>Matters for You</span>
            </h3>

            <p className="subtitle">
              Using iManage means:
            </p>

            <div className="benefit-card">

              <div className="benefit-icon">
                <img src="/assets/images/im-pros-icon4.svg" alt="icon"/>  
              </div>

              <p>
                Less time spent
                <br />
                on paperwork
              </p>

              <span>01</span>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">
              <img src="/assets/images/im-pros-icon5.svg" alt="icon"/>  
              </div>

              <p>
                Fewer errors
                <br />
                in documentation
              </p>

              <span>02</span>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">
              <img src="/assets/images/im-pros-icon6.svg" alt="icon"/>  
              </div>

              <p>
                Faster report
                <br />
                preparation
              </p>

              <span>03</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}