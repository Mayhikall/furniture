import React from 'react';
import Layout from '../Layout';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

///import images
import main from '../images/main.jpg';
import service1 from '../images/service1.jpeg';
import service2 from '../images/services2.jpg';
import service3 from '../images/services3.jpg';

export default function Home() {
  return (
    <Layout>
      <section className="mt-4">
        <div className="container">
          <div className="hero">
            <div className="row align-items-center mt-5 ">
              <div className="col-sm-6">
                <h1>Explore Elegance and Comfort with Our Exquisite Furniture Collection</h1>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Vitae, fuga dignissimos ratione nostrum recusandae optio minima voluptas
                  <br />
                  praesentium reprehenderit quos cum, consequatur repellendus
                </p>
                <div className="mt-3">
                  <button className="btn btn-primary rounded-3 me-2">Order Now</button>
                  <button className="btn btn-secondary rounded-3">Contact Us</button>
                </div>
              </div>
              <div className="col-sm-6 d-none d-sm-flex">
                <img src={main} alt="main" className="w-100 rounded-4" />
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-5">
            <div className="w-auto">
              <div className="border-bottom border-2 border-primary text-center">
                <h2>Our Service</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
            <div className="col-sm-6">
              <h3>Customization</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit nemo a, voluptatum vitae hic sed neque incidunt quibusdam nobis? Odit, unde esse voluptate recusandae ipsa consequatur quidem animi nostrum.</p>
              <button className="btn btn-primary rounded-4">Read More</button>
            </div>
            <div className="col-sm-6">
              <div className="ps-sm-5">
                <img src={service1} alt="service1" className="w-100 rounded-4" />
              </div>
            </div>
          </div>
          <div className="row align-items-sm-center flex-column flex-sm-row my-5">
            <div className="col-sm-6">
              <div className="pe-sm-5">
                <img src={service2} alt="service2" className="w-100 rounded-4" />
              </div>
            </div>
            <div className="col-sm-6">
              <h3>Delivery</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit nemo a, voluptatum vitae hic sed neque incidunt quibusdam nobis? Odit, unde esse voluptate recusandae ipsa consequatur quidem animi nostrum.</p>
              <button className="btn btn-primary rounded-4">Read More</button>
            </div>
          </div>
          <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
            <div className="col-sm-6">
              <h3>Interior Design Consultation</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit nemo a, voluptatum vitae hic sed neque incidunt quibusdam nobis? Odit, unde esse voluptate recusandae ipsa consequatur quidem animi nostrum.</p>
              <button className="btn btn-primary rounded-4">Read More</button>
            </div>
            <div className="col-sm-6">
              <div className="ps-sm-5">
                <img src={service3} alt="service" className="w-100 rounded-4" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-5">
            <div className="w-auto">
              <div className="border-bottom border-2 border-primary text-center">
                <h2>Featured Products</h2>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row g-4 justify-content-center flex-sm-row flex-column">
              <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center">
                <Card
                  style={{
                    height: '350px',
                  }}
                >
                  <img alt="Sample" src="https://www.course-api.com/images/store/product-7.jpeg" style={{ objectFit: 'cover', height: '50%' }} />
                  <CardBody>
                    <CardTitle tag="h5">entertainment center</CardTitle>
                    <CardText>Loud Bread VHS Hell Of Banjo Bicycle Rights Jianbing Umami Mumblecore Etsy 8-Bit Pok Pok</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center">
                <Card
                  style={{
                    height: '350px',
                  }}
                >
                  <img alt="Sample" src="https://www.course-api.com/images/store/product-17.jpeg" style={{ objectFit: 'cover', height: '50%' }} />
                  <CardBody>
                    <CardTitle tag="h5">utopia sofa</CardTitle>
                    <CardText>Loud Bread VHS Hell Of Banjo Bicycle Rights Jianbing Umami Mumblecore Etsy 8-Bit Pok Pok</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center">
                <Card
                  style={{
                    height: '350px',
                  }}
                >
                  <img alt="Sample" src="https://www.course-api.com/images/store/product-18.jpeg" style={{ objectFit: 'cover', height: '50%' }} />
                  <CardBody>
                    <CardTitle tag="h5">vase table</CardTitle>
                    <CardText>Loud Bread VHS Hell Of Banjo Bicycle Rights Jianbing Umami Mumblecore Etsy 8-Bit Pok Pok</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section d-flex justify-content-center align-items-center">
        <div className="contact-form container">
          <div className="row justify-content-center my-5">
            <div className="w-auto">
              <div className="border-bottom border-2 border-primary text-center">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" name="name" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" name="message" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
