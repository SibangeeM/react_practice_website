import React from "react";
import Title from "./Title";
import { servicesContent } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="our" second="services"></Title>
      <div className="section-center services-center">
        {servicesContent.map((ser) => {
          return (
            <article className="service" key={ser.id}>
              <span className="service-icon">
                <i className="fas fa-wallet fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{ser.service}</h4>
                <p className="service-text">{ser.desc}</p>
              </div>
            </article>
          );
        })}

        
      </div>
    </section>
  );
};

export default Services;
