import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_it2ab1j', 'template_y4eut5v', form.current, 'jUn1z-vodKfQLijZ7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Contact Us"
          data-align="center"
        >
          Contact Us
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                At Site Dominion, we believe in fostering strong relationships and open dialogue with our clients. If you have any questions, comments, or need assistance with any of our services, we invite you to get in touch with us. Whether it's an inquiry, feedback, or a detailed consultation you're seeking, our dedicated team is eager to assist you.
                </p>
                <p>
                At Site Dominion, we believe in fostering strong relationships and open dialogue with our clients. If you have any questions, comments, or need assistance with any of our services, we invite you to get in touch with us. Whether it's an inquiry, feedback, or a detailed consultation you're seeking, our dedicated team is eager to assist you.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Phone</h4>
                <h3>
                  <a href="tel:5715994889">+1 (571)599-4889</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <a href="mailto:frenifyteam@gmail.com">
                    service@sitedominion.com
                  </a>
                </h3>
                <h3>
                  <a href="mailto:frenifyteam@gmail.com">
                    official@sitedominion.xyz
                  </a>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Office</h4>
                <h3>San Diego, CA, United States</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="fn_cs_contact_form">
          <form
            action="/"
            method="post"
            className="contact_form"
            id="contact_form"
            autoComplete="off"
            ref={form} onSubmit={sendEmail}
          >
            <div className="input_list">
              <ul>
                <li>
                  <input id="name" name="name" type="text" placeholder="Your Name *" />
                </li>
                <li>
                  <input id="email" name="email" type="text" placeholder="Your Email *" />
                </li>
                <li>
                  <input
                    id="tel"
                    type="text"
                    placeholder="Your Phone (optional)"
                    name="contact"
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Topic (optional)"
                    name="subject"
                  />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message *"
                    defaultValue={""}
                  />
                </li>
                <li className="full">
                  <label>Service: </label>
                <select type="select" name="service" style={{"fontSize":"23px","fontFamily":"Smooch Sans","border":"1px solid #9a9a9a"}}>
														<option value="Web Design">Web Design & Development</option>
														<option value="Web Deployment">Website Deployment</option>
                            <option value="Blog">Blog</option>
														<option value="SEO">SEO</option>
														<option value="Website Copywriting">Website Copywriting</option>
                            <option value="NA">NA</option>
													</select>
                </li>
                <li className="full">
                  <label className="fn__checkbox">
                    <input type="checkbox" />
                    <span className="fn__checkmark">
                      <img src="/svg/checked.svg" alt="" className="fn__svg" />
                    </span>
                    <p>
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </p>
                  </label>
                  <div className="mw300">
                    <button
                      id="send_message"
                      href="#"
                      className="metaportal_fn_button full"
                      type="submit"
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            />
            <div className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
