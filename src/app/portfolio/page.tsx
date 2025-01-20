import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
             
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/job.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Job Finder Application</h4>
                  <p className="hover-text">Discover your dream job effortlessly with our powerful job Finder application. Whetever you're starting your carrer or looking for a change, find the perfect match with ease.  </p>
                  <div className="icon">
                    <a
                        href="https://github.com/AbdulWaris009"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/project-2.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                    <h4>News React App</h4>
                    <p className="hover-text">Stay informed with our feature-rich News App.get the latest updates from around the world. tailored to your intersts, all in a clean and user-friendly interface.
                    </p>
                    <div className="icon">
                      <a
                        href="https://github.com/AbdulWaris009"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="https://api.pickselverse.com/wp-content/uploads/2022/11/ochi-screenshot.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Ochi-Replication-Website</h4>
                  <p className="hover-text"> Ochi is React js based replication frontend Website.
                    that contain Gsap animation and Mouse hover effects.
                    </p>
                  
                    <div className="icon">
                      <a
                        href="https://github.com/AbdulWaris009"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/4.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Frontend-projects</h4>
                  <p className="hover-text"> Frontend Animated projects Using Html,Css And Javascript </p>
                  <div className="icon">
                      <a
                        href="https://github.com/AbdulWaris009/projects"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="https://th.bing.com/th/id/OIP.eZpmxt_m8u0YAIEjUaoBSgHaFj?rs=1&pid=ImgDetMain" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>StopWatch</h4>
                  <p className="hover-text">StopWatch Using React js you can manually set time and start stop watch.</p>
                  <div className="icon">
                      <a
                        href="https://github.com/AbdulWaris009/Stopwatch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
