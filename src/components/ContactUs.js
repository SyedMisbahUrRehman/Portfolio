import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact Us
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email :
                <a href = "mailto: smabeed@yahoo.com"> smabeed@yahoo.com</a>

                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}