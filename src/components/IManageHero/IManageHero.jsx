import PageHero from "@/components/PageHero/PageHero";

import "./IManageHero.scss";


export default function IManageHero() {
  return (
  <div className="imanage-hero-container"> 
   
                <PageHero className="imanage"
                title="iManage"
                subtitle="Your All-in-One Compliance & Care Platform"
                description="iManage is an affordable, intuitive platform designed specifically to support person-centered healthcare agencies. We protect your agency from compliance risks, simplify staff training, and keep your client records secure and audit-ready at all times."
                />
    
    <section className="imanage-hero">
        
        <div className="container">

            {/* LEFT */}
            
            <div className="imanage-hero__column left">

            <div className="info-card offset-up">

                <div className="icon-group">
                <div className="icon-circle">
                    <img src="/assets/images/im-hero-icon1.svg" alt="icon" />
                </div>

                <div className="icon-circle">
                    <img src="/assets/images/im-hero-icon2.svg" alt="icon" />

                </div>
                </div>

                <h3>
                Healthcare Agency
                </h3>

            </div>

            <div className="info-card offset-down">

                <div className="icon-group">

                <div className="icon-circle">
                    <img src="/assets/images/im-hero-icon3.svg" alt="icon" />
                </div>

                <div className="icon-circle">
                    <img src="/assets/images/im-hero-icon4.svg" alt="icon" />
                </div>

                </div>

                <h3>
                How It Works
                </h3>

                <p>
                Digital Client Binders, With AI support
                </p>

            </div>

            </div>

            {/* CENTER */}

            <div className="imanage-hero__center">

            <div className="hub">

                <div className="ripple ripple-1" />
                <div className="ripple ripple-2" />
                <div className="ripple ripple-3" />
                <img src="/assets/images/im-hero-icon.svg" alt="icon" className="ripple"/>

                {/* <div className="logo-grid">

                {[...Array(15)].map(
                    (_, index) => (
                    <span
                        key={index}
                        className={
                        index === 7
                            ? "dot active"
                            : "dot"
                        }
                    />
                    )
                )}

                </div> */}

            </div>

            </div>

            {/* RIGHT */}

            <div className="imanage-hero__column right">

            <div className="info-card offset-up">

                <div className="icon-group">

                <div className="icon-circle">
                    <img src="/assets/images/im-hero-icon5.svg" alt="icon" />
                </div>

                <div className="icon-circle">
                    <img src="/assets/images/im-hero-icon6.svg" alt="icon" />
                </div>

                </div>

                <h3>
                Business Impact
                </h3>

                <p>
                Keep everything organized and ready for review
                </p>

            </div>

            <div className="info-card offset-down">

                <div className="icon-group">

                <div className="icon-circle">
                    <img src="/assets/images/im-hero-icon7.svg" alt="icon" /> 
                </div>

                <div className="icon-circle">
                    <img src="/assets/images/im-hero-icon8.svg" alt="icon" />
                </div>

                </div>

                <h3>
                Value
                </h3>

                <p>
                Ensuring everything is compliant and audit-ready
                </p>

            </div>

            </div>

        </div>

        </section>
  </div>
    
  );
}