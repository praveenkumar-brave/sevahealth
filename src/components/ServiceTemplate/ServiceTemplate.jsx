import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/components/CTA/CTA";

import PageHero from "@/components/PageHero/PageHero";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid/FeatureGrid";
import "./ServiceTemplate.scss";
import Lottie from "lottie-react";
export default function ServiceTemplate({
  hero,
  intro,
  capabilities,
  benefits,
  whyMatters,
  featureGridCard,

  
}) {
  
  return (
    <>
      <Navbar />

      <main className="service-page">

        <PageHero
          title={hero.title}
          subtitle={hero.subtitle}
          description={hero.description}
          buttonText="Get Started"
        />

        {/* Intro */}

        <section className="service-intro">

          <div className="container">

            <div className="service-intro__content">

              <span>{intro.label}</span>

              <h2>{intro.title}</h2>

              <p>{intro.description}</p>

            </div>

            <div className="service-intro__images">

              {intro.images.map(
                (image, index) => (
                  <span className={`serv-image${index}`}>
                  <img
                    key={index}
                    src={image}
                    alt="services"
                    className="serv-img"
                  />
                  </span>
                )
              )}

            </div>

          </div>

        </section>

        {/* Capabilities */}

        <section className="service-capabilities">

          <div className="container">

            <div className="service-capabilities__image">

              <img
                src={capabilities.image}
                alt=""
              />

            </div>

            <div className="service-capabilities__content">

              <h2>
                {capabilities.title}
              </h2>

              <ul>

                {capabilities.items.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

          </div>

        </section>

        {/* Benefits */}

        <section className="service-benefits">

          <div className="container">

            <SectionHeading
              title="What Benefits Do You Get?"
              description={benefits.description}
            />
            <FeatureGrid cards={featureGridCard}/>
            {/* <div className="benefits-grid">

              {benefits.items.map(
                (item, index) => (
                  <article
                    key={index}
                    className="benefit-card"
                  >
                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>
                  </article>
                )
              )}
            
            </div> */}

          </div>

        </section>

        {/* Why It Matters */}

        <section className="why-matters">

          <div className="container">

            <div className="why-matters__content">

              <h2>
                Why It Matters
              </h2>

              <p>
                {
                  whyMatters.description
                }
              </p>
              <button>
              Learn more
              </button>

            </div>

            <div className="why-matters__image">

             {whyMatters.lottie ? (

                <Lottie
                  animationData={whyMatters.lottie}
                  loop
                  autoplay
                  className="why-matters__lottie lottie-icon"
                />

              ) : (

                <img
                  src={whyMatters.image}
                  alt={whyMatters.title || "Why It Matters"}
                />

              )}
            
            
          
            </div>

          </div>

        </section>



        <CTA />

        

      </main>
    </>
  );
}