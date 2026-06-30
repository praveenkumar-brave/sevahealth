import "./Approach.scss";


export default function Approach({
  badge,
  title,
  description,
  description2,
  buttonText = "Explore More",
  background,
  nodes = [],
}) {
  return (
    <section className="approach">
       
                   <div>
          <div className="benefits__header">
    
            <span className="hero__eyebrow">
            Explainable AI Engine
            </span>

            <h2>
            Stop Drowning in Paperwork.<br/>
            <span className="title-highlight">Start Focusing on Care.</span> 
            </h2>

            <p>
            Agencies like yours, a single missing document can mean a failed state inspection. SEVA Health’s iManage platform replaces vulnerable paper trails with Continuous Compliance Monitoring (CCM).
            </p>

        </div>

      </div>
      <div className="container">

        

        <div className="approach__left">

          {badge && (
            <span className="approach__badge">
              {/* {badge} */}
              <img src="/assets/images/pro-icon.svg" alt="check" />
            </span>
          )}

          <h2>{title}</h2>

          <p>{description}</p>

          {description2 && (
            <p>{description2}</p>
          )}

          <button className="approach__button">
            {buttonText}
            <span>→</span>
          </button>

        </div>

        <div className="approach__right">

          {background && (
            <img
              src={background}
              alt=""
              className="approach__background"
            />
          )}

          {nodes.map((node, index) => (

            <div
              key={index}
              className={`approach__node ${node.className}`}
            >
              {node.text}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}