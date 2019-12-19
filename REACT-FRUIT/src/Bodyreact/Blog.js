import React from 'react';


class Blog extends React.Component {
    render (){

  return (
    <div className="About">
<div>

<div id="gal1" className="popup-effect">
                <div className="popup">
                  <img src="images/g1.jpg" alt="Popup Image" className="img-fluid" />
                  <a className="close" href="gallery">×</a>
                </div>
              </div>
              <div id="gal2" className="popup-effect">
                <div className="popup">
                  <img src="images/bb2.jpg" alt="Popup Image" className="img-fluid" />
                  <a className="close" href="gallery">×</a>
                </div>
              </div>
              <div id="gal3" className="popup-effect">
                <div className="popup">
                  <img src="images/bb3.jpg" alt="Popup Image" className="img-fluid" />
                  <a className="close" href="gallery">×</a>
                </div>
              </div>
              <div id="gal4" className="popup-effect">
                <div className="popup">
                  <img src="images/g2.jpg" alt="Popup Image" className="img-fluid" />
                  <a className="close" href="gallery">×</a>
                </div>
              </div>
              <div id="gal5" className="popup-effect">
                <div className="popup">
                  <img src="images/g3.jpg" alt="Popup Image" className="img-fluid" />
                  <a className="close" href="gallery">×</a>
                </div>
              </div>
              <div id="gal6" className="popup-effect">
                <div class="popup">
                  <img src="./images/g4.jpg" alt="Popup Image" className="img-fluid" />
                  <a className="close" href="gallery">×</a>
                </div>
              </div>
              <section className="blog py-lg-5 py-md-4 py-sm-3 py-3" id="blog">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                  <h3 className="title text-center mb-2">Blog</h3>
                  <div className="title-w3ls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                    <p> best online grocery amrkett
                    </p>
                  </div>
                  <div className="row">
                    <div className="blog-wthree-color col-lg-4 position-relative my-3">
                      <div className="w3ls-post-img">
                        <img src="./images/bb2.jpg" className="img-fluid" alt="" />
                        <div className="blog-info">
                          <a href="about">
                            <ul>
                              <li>JUL</li>
                              <li>15</li>
                            </ul>
                          </a>
                        </div>
                      </div>
                      <div className="blog-txt-info">
                        <h4 className="mb-2">
                          <a href="about">Health Benefits of a Raw Food </a>
                        </h4>
                        <p>Best </p>
                        <div className="news-date-list pt-2">
                          <ul>
                            <li className="mr-1">
                              <a href="k">12/4/2019</a>
                            </li>
                            <li>
                              <a href="k">3 Tags</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="blog-wthree-color col-lg-4 position-relative my-3">
                      <div className="w3ls-post-img">
                        <img src="./images/bb3.jpg" className="img-fluid" alt="" />
                        <div className="blog-info">
                          <a href="about">
                            <ul>
                              <li>JUL</li>
                              <li>15</li> 
                            </ul>
                          </a>
                        </div>
                      </div>
                      <div className="blog-txt-info">
                        <h4 className="mb-2">
                          <a href="about">Health Benefits of a Raw Food </a>
                        </h4>
                        <p>BETTER Health</p>
                        <div className="news-date-list pt-2">
                          <ul>
                            <li className="mr-1">
                              <a href="l">12/4/2019</a>
                            </li>
                            <li>
                              <a href="m">3 Tags</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="blog-wthree-color col-lg-4 position-relative my-3">
                      <div className="w3ls-post-img">
                        <img src="./images/g4.jpg" className="img-fluid" alt="" />
                        <div className="blog-info">
                          <a href="about">
                            <ul>
                              <li>JUL</li>
                              <li>15</li>
                            </ul>
                          </a>
                        </div>
                      </div>
                       <div className="blog-txt-info">
                        <h4 className="mb-2">
                          <a href="about">Health Benefits of a Raw Food </a>
                        </h4>
                        <p>BETTER Health</p>
                        <div className="news-date-list pt-2">
                          <ul>
                            <li className="mr-1">
                              <a href="k">12/4/2019</a>
                            </li>
                            <li>
                              <a href="kk">3 Tags</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>





      </div>    
        </div>
      
);
}
}
export default Blog;

// from
// import { Form, Field } from 'react-redux-form';
// import { isEmail, isNull } from 'validator';

// const required = isNull;

// const passwordsMatch = ({ password, confirmPassword }) => {
//   return password === confirmPassword;
// };

// // in render() return block:
// <Form model="user"
//   validators={{
//     '': { passwordsMatch },
//     email: { required, isEmail },
//     password: { required },
//     confirmPassword: { required }
//   }}
//   onSubmit={...}>
//   <Field model="user.email">
//     <input type="email">
//   </Field>

//   <Field model="user.password">
//     <input type="password">
//   </Field>

//   <Field model="user.confirmPassword">
//     <input type="password">
//   </Field>
// </Form>