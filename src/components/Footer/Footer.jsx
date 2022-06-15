import "./Footer.css";

import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaHome,
} from "react-icons/fa";

import React, { Component } from "react";
import { PhoneAndroid, Room, Email, ContactMail, Facebook, Twitter, Instagram } from "@material-ui/icons";

import { Link } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      subject: "",
      message: "",
      email_err: "",
      name_err: "",
      subject_err: "",
      message_err: "",
      return_msg: "",
      flag: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    var EmailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value === "") this.setState({ email_err: "Required Field" });
    else if (EmailReg.test(e.target.value)) this.setState({ email_err: "" });
    else this.setState({ email_err: "Enter Valid Email" });
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
    if (e.target.value === "") this.setState({ name_err: "Required Field" });
    else this.setState({ name_err: "" });
  }
  handleChangeSubject(e) {
    this.setState({ subject: e.target.value });
    if (e.target.value === "") this.setState({ subject_err: "Required Field" });
    else this.setState({ subject_err: "" });
  }
  handleChangeMessage(e) {
    this.setState({ message: e.target.value });
    if (e.target.message === "")
      this.setState({ message_err: "Required Field" });
    else this.setState({ message_err: "" });
  }

  handleSubmit1() {
    if (this.state.name === "") this.setState({ name_err: "Required Field" });
    if (this.state.email === "") this.setState({ email_err: "Required Field" });
    if (this.state.subject === "")
      this.setState({ subject_err: "Required Field" });
    if (this.state.message === "")
      this.setState({ message_err: "Required Field" });

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.subject === "" ||
      this.state.message === ""
    ) {
      this.setState({ return_msg: "Fill All First", flag: true });
    } else {
      this.setState({ return_msg: "Success.", flag: true });
    }
  }

  render() {
    return (
      <section className="pt-5 bg-dark" id="contact">
        <div className="container">
          <div className="row justify-content-center pt-5">
            <div className="col-md-8">
              <div className="text-center">
                <div className="title-icon">
                  <ContactMail className="icons" />
                </div>
                <h3 className="section-title text-white pt-5">Contact us</h3>
                <p className="section-subtitle pt-3 text-whte">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. */}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="single-contact text-center text-white">
                    <PhoneAndroid className="icons" />
                    <h4>Phone</h4>
                    <p>+92 300 6889886</p>
                    <p>+92 322 5589072</p>
                    <p>+92 309 5196521</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-contact text-center text-white">
                    <Room className="icons" />
                    <h4>Address</h4>
                    <p>COMSATS, Lahore</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-contact text-center text-white">
                    <Email className="icons" />
                    <h4>Email</h4>
                    <p>support@moc.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-5 pb-2">
            <div className="col-md-12">
              <div className="text-white footer-alt">
                <div className="float-left"></div>
                <div className="float-right">
                  <ul className="list-inline social pb-0">
                    <li className="list-inline-item pl-2">
                      <p>Connect with us: </p>
                    </li>
                    <li className="list-inline-item pl-2">
                      <Link to="#" className="text-white">
                        <Facebook />
                      </Link>
                    </li>
                    <li className="list-inline-item pl-2">
                      <Link to="#" className="text-white">
                        <Twitter />
                      </Link>
                    </li>
                    <li className="list-inline-item pl-2">
                      <Link to="#" className="text-white">
                        <Instagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
