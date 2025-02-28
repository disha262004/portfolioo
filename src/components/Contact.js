import React from "react";

function Contact({ imageUrl, title, certificateUrl, description }) {
  return (
    <div className="container-fluid p-5" id="contact">
      <h2 className="fw-bold text-center my-5">Contact Me</h2>
      <div className="row">
        <div className="col py-3">
          <h3 className="fw-bold fs-2">Let's Talk</h3>
          <p className="fs-5 my-4">
            I'm open to discussing software development projects or partnership
            opportunities and eager to build a strong professional network.
            Let's connect and explore how we can collaborate!
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none" }}>
              disharathore126@gmail.com
            </a>
          </p>
          <p>+91 6266243780</p>
          <p>Jaipur,Rajasthan</p>
        </div>
        <div className="col">
          <form>
          <div class="mb-3">
              <label for="exampleInputName" class="form-label">
                Your Name 
              </label>
              <input
              placeholder="Enter your name"
                type="text"
                class="form-control"
                id="exampleInputName"
                style={{backgroundColor:"#e5e7eb"}}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email 
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{backgroundColor:"#e5e7eb"}}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputMsg" class="form-label">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                class="form-control"
                id="exampleInputMsg"
                rows="5"
                style={{backgroundColor:"#e5e7eb"}}
                required
              />
            </div>
            <button type="submit" className="my-3 p-2" style={{
            textDecoration: "none",
            background: "linear-gradient(90deg, #34d399, #3b82f6)",
            color: "#fff",
            border:"none",
            width:"18%",
            borderRadius: "50px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
