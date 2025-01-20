
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/image4.jpeg"
              alt="not found"
              className="shadow-dark"
            />
            <h1>Abdul Waris</h1>
            <p>Full Stack Developer</p>
            <div className="social-links">
              <a href="https://github.com/AbdulWaris009" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/warishh__.786/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="www.linkedin.com/in/abdul-waris009" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
