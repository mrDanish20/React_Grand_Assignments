import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Your Name is: ${name}`);
    console.log(`Your Email is: ${email}`);
    console.log(`Your Number is: ${phone}`);
    console.log(`Your Password is: ${password}`);

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  }

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold pb-3">Feedback Form</h1>
      
      
      <div className="row d-flex align-items-center justify-content-center py-2">
  
       

    
        <div className="col-md-6">
          <div
            className="p-4"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  
                <label className="form-label">Enter Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter Your Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter Your Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter Your Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{
                  backgroundColor: "#3498db",
                  border: "none",
                  fontSize: "18px",
                  padding: "12px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
