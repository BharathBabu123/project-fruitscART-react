import React from 'react';


class Gallery extends React.Component {
    render (){

  return (
    <div className="About">
     <div>

     <section className="gallery py-lg-4 py-md-3 py-sm-3 py-3" id="gallery"/>
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 className="title text-center mb-2">Gallery </h3>
            <div className="title-w3ls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
              <p></p>
            </div>
            <div className="row gallery-info">
              <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
                <div className="gallery-grids">
                  <a href="gal1">
                    <img src="images/g1.jpg" alt="news image" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
                <div className="gallery-grids">
                  <a href="gal2">
                    <img src="images/bb2.jpg" alt="news image" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
                <div className="gallery-grids">
                  <a href="gal3">
                    <img src="images/bb3.jpg" alt="news image" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
                <div className="gallery-grids">
                  <a href="gal4">
                    <img src="images/g2.jpg" alt="news image" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
                <div className="gallery-grids">
                  <a href="gal5">
                    <img src="images/g3.jpg" alt="news image" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 gallery-img-grid my-3">
                <div className="gallery-grids">
                  <a href="gal6">
                    <img src="images/g4.jpg" alt="news image" className="img-fluid" />
                  </a>
                </div>
              </div>
              </div>
              <section/>
      </div>
      </div>
      </div>
);
}
}
export default Gallery;