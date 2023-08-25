import React from 'react';
import Layout from '../Layout';
import main from '../images/main.jpg';

const About = () => {
  return (
    <Layout>
      <div className="hero">
        <div className="row align-items-center mt-5 ">
          <div className="col-sm-6 d-sm-column mb-2">
            <img src={main} alt="main" className="w-100 rounded-2" />
          </div>
          <div className="col-sm-6">
            <div className="border-bottom border-2 border-primary">
              <h2>Our Story</h2>
            </div>

            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aut nesciunt dolorum autem obcaecati ratione non ipsa? Dolor nemo sequi quasi blanditiis repellendus sapiente rem, officia ratione commodi fugit. Esse Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nam, maiores facilis quibusdam illum perferendis quam porro fugiat vero in blanditiis quos ipsum libero tempore dolorum, quia ex ea rem repellat.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
