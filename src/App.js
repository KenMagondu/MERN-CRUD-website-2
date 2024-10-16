import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import logo from './logo.svg';
import './App.css';

//import './css/aos.css';
import './css/bootstrap/bootstrap-grid.css';
import './css/bootstrap-datepicker.css';
import './css/bootstrap.min.css';
// import './css/jquery-ui.css';
//import './css/jquery.fancybox.min.css';
//import './css/magnific-popup.css';
// import './css/mediaelementplayer.css';
// import './css/owl.carousel.min.css';
//import './css/owl.theme.default.min.css';
import './css/style.css';

function App() {

  
  return (
    <BrowserRouter> 
    <div className="App ">
    <Routes>
    <Route path="/" element={<LoginScreen />} />
    </Routes>
      <header className="App-header site-wrap">
      
      
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="mr-auto w-25"><a href="index.html">ABC SCHOOL</a></div>

          <div className="">
            <nav className="" role="navigation">
              <ul className="">
                <li><a href="#home-section" className="nav-link ">Home</a></li>
                <li><a href="#courses-section" className="nav-link">Courses</a></li>
                <li><a href="#programs-section" className="nav-link">Programs</a></li>
                
              </ul>
            </nav>
          </div>

          <div className="ml-auto w-25">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="">
                <li className="cta"><a href="#contact-section" className=""><span>Contact Us</span></a></li>
              </ul>
            </nav>
            <a href="#" className=""><span className=""></span></a>
          </div>
        </div>
      </div>
      
   

      </header>
      <div class="col-lg-6 mb-4">
                  <h1  >Learn From The Expert</h1>
                  <p class="mb-4"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                  <p  ><a href="#" class="btn btn-primary py-3 px-5 btn-pill">Admission Now</a></p>

                </div>
                <form action="" method="post" className="form-box">
                    <h3 className="h4 text-black mb-4">Sign UpA</h3>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Email Addresss"/>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <div class="form-group mb-4">
                      <input type="password" class="form-control" placeholder="Re-type Password"/>
                    </div>
                    <div class="form-group">
                      <input type="submit" class="btn btn-primary btn-pill" value="Sign up"/>
                      <input type="submit" class="btn  btn-pill" value="Log in"/>
                    </div>
                  </form>

                  <div className="site-section courses-title" id="courses-section">
      <div className="container">
        <div class="">
          <div className="" >
            <h2 className="section-title">Courses</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="">
        <div className="container">
          <div className="">
            <div className="">
              {[
                { src: 'images/img_1.jpg', price: '$20', title: 'Study Law of Physics', lessons: '4 Lessons / 12 week', students: '2,193 students', comments: '2' },
                { src: 'images/img_2.jpg', price: '$99', title: 'Logo Design Course', lessons: '4 Lessons / 12 week', students: '2,193 students', comments: '2' },
                { src: 'images/img_3.jpg', price: '$99', title: 'JS Programming Language', lessons: '4 Lessons / 12 week', students: '2,193 students', comments: '2' },
                { src: 'images/img_4.jpg', price: '$20', title: 'Study Law of Physics', lessons: '4 Lessons / 12 week', students: '2,193 students', comments: '2' },
                { src: 'images/img_5.jpg', price: '$99', title: 'Logo Design Course', lessons: '4 Lessons / 12 week', students: '2,193 students', comments: '2' },
                { src: 'images/img_6.jpg', price: '$99', title: 'JS Programming Language', lessons: '4 Lessons / 12 week', students: '2,193 students', comments: '2' },
              ].map((course, index) => (
                <div className="" key={index}>
                  <figure className="">
                    <a href="course-single.html"><img src={course.src} alt="Image" className="" /></a>
                  </figure>
                  <div className="">
                    <span className="course-price">{course.price}</span>
                    <div className="meta"><span className="icon-clock-o"></span>{course.lessons}</div>
                    <h3><a href="#">{course.title}</a></h3>
                    <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit. </p>
                  </div>
                  <div className="">
                    <div className="py-3 px-4"><span className="icon-users"></span>{course.students}</div>
                    <div className="py-3 px-4 w-25 ml-auto border-left"><span className="icon-chat"></span>{course.comments}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-7 text-center">
              <button className="customPrevBtn btn btn-primary m-1">Prev</button>
              <button className="customNextBtn btn btn-primary m-1">Next</button>
            </div>
          </div>
        </div>
      </div>
    
      <div className="site-section" id="programs-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="">
              <h2 className="section-title">Our Programs</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
            </div>
          </div>
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 mb-5" data-aos="fade-up" data-aos-delay="100">
              <img src="images/undraw_youtube_tutorial.svg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-black mb-4">We Are Excellent In Education</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
              <div className="d-flex align-items-center custom-icon-wrap mb-3">
                <span className="custom-icon-inner mr-3"><span className="icon icon-graduation-cap"></span></span>
                <div><h3 className="m-0">22,931 Yearly Graduates</h3></div>
              </div>
              <div className="d-flex align-items-center custom-icon-wrap">
                <span className="custom-icon-inner mr-3"><span className="icon icon-university"></span></span>
                <div><h3 className="m-0">150 Universities Worldwide</h3></div>
              </div>
            </div>
          </div>
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 mb-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
              <img src="images/undraw_teaching.svg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-4 mr-auto order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-black mb-4">Strive for Excellent</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
              <div className="d-flex align-items-center custom-icon-wrap mb-3">
                <span className="custom-icon-inner mr-3"><span className="icon icon-graduation-cap"></span></span>
                <div><h3 className="m-0">22,931 Yearly Graduates</h3></div>
              </div>
              <div className="d-flex align-items-center custom-icon-wrap">
                <span className="custom-icon-inner mr-3"><span className="icon icon-university"></span></span>
                <div><h3 className="m-0">150 Universities Worldwide</h3></div>
              </div>
            </div>
          </div>
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 mb-5" data-aos="fade-up" data-aos-delay="100">
              <img src="images/undraw_teacher.svg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-black mb-4">Education is life</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
              <div className="d-flex align-items-center custom-icon-wrap mb-3">
                <span className="custom-icon-inner mr-3"><span className="icon icon-graduation-cap"></span></span>
                <div><h3 className="m-0">22,931 Yearly Graduates</h3></div>
              </div>
              <div className="d-flex align-items-center custom-icon-wrap">
                <span className="custom-icon-inner mr-3"><span className="icon icon-university"></span></span>
                <div><h3 className="m-0">150 Universities Worldwide</h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
