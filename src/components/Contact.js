import React, { useState } from "react";
import { GrContact } from "react-icons/gr";
import Like from "./Like.js";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "1a207840-fdc5-47e2-b53f-58e3572dc37c",
  });
  const [submitform, setSubmitform] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [like, setlike] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setSubmitform("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formDataToSend = new FormData();
      setIsLoading(true);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append(
        "access_key",
        "1a207840-fdc5-47e2-b53f-58e3572dc37c"
      ); // Add access_key if required

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        console.log("Form submitted successfully");
        setIsLoading(false);
        setSubmitform("Form Submitted");

        setFormData({
          name: "",
          email: "",

          message: "",
          access_key: formData.access_key,
        });
        setErrors({});
        e.target.reset(); // Reset form
      } else {
        console.error("Error", data.message);
        setErrors({});
      }
    }
  };

  const likehandler = () => {
    setlike(!like);
  };

  return (
    <div>
      <h4
        style={{
          margin: "30px",
          padding: "6px",
          backgroundColor: "aquamarine",
          borderRadius: "30px",
          width: "fit-content",
        }}
      >
        <GrContact style={{ marginRight: "4px" }} />
        Contact Me
      </h4>
      <div className="contact">
        <div className="loveform">
          <h3>
            If you want to drop a ideas or any doubts about my work contact me
          </h3>
          <h2>Drop a like if you like my portfolio</h2>
          <button onClick={likehandler}> {like ? "Switch to Contact" : "Switch to like"}</button>
        </div>
        {like ? (
          <Like />
        ) : (
          <div className="contactform">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${errors.name ? "error" : ""}`}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "error" : ""}`}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-control ${errors.message ? "error" : ""}`}
                ></textarea>
                {errors.message && (
                  <p className="error-text">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="submit-button">
                {submitform || "Submit"}
                {isLoading ? "...." : ""}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
