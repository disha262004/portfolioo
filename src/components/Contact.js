import React from "react";

function Contact({ imageUrl, title, certificateUrl, description }) {
  return (
    <div className="container-fluid p-5" id="contact">
      <h2 className="fw-bold text-center my-5">Contact Me</h2>
      <div className="row">
        <div className="col-12 col-md-6 py-3 order-1 order-md-1">
          <h3 className="fw-bold fs-2">Let's Talk</h3>
          <p className="fs-5 my-4">
            I'm open to discussing software development projects or partnership
            opportunities and eager to build a strong professional network.
            Let's connect and explore how we can collaborate!
          </p>
          <p>
            <a
              href="mailto:disharathore126@gmail.com"
              style={{ textDecoration: "none" }}
            >
              disharathore126@gmail.com
            </a>
          </p>
          <p>+91 6266243780</p>
          <p>Jaipur, Rajasthan</p>
        </div>
        <div className="col-12 col-md-6 order-2 order-md-2">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Your Name
              </label>
              <input
                placeholder="Enter your name"
                type="text"
                className="form-control"
                id="exampleInputName"
                style={{ backgroundColor: "#e5e7eb" }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ backgroundColor: "#e5e7eb" }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputMsg" className="form-label">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="form-control"
                id="exampleInputMsg"
                rows="5"
                style={{ backgroundColor: "#e5e7eb" }}
                required
              />
            </div>
            <button
              type="submit"
              className="my-3 p-2"
              style={{
                textDecoration: "none",
                background: "linear-gradient(90deg, #34d399, #3b82f6)",
                color: "#fff",
                border: "none",
                width: "40%",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
