import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Youc can check out some of my works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <a href={item.link != null ? item.link :
                                             resumeData.linkedinUrl}>
                <div className="columns portfolio-item">
                  <div className="item-wrap" 
                       title="See descriptions on Linkedin -> Projects">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.technologies}</p>
                          <p>{item.date}</p>
                        </div>
                      </div>
                  </div>
                </div>
                </a>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
          );
  }
}

function handleSuperClick (e)  {
  //{this.setCurrentCard(item.name, item.description)}
  e.preventDefault();
  console.log('The link was clicked.');

}