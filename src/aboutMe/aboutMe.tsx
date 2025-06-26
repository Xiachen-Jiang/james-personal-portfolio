import "./aboutMe.scss";

export function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h2>About Me</h2>
            <hr />
            <div className="about-me-content">
                <div className="about-me-content-left">
                    <img src='/james-hero.jpg' alt="About Me" />
                </div>
                <div className="about-me-content-right">
                    <h3 className="font-600">Hi, there.</h3>
                    <h3 className="font-600">I'm <span className="highlight">James Jiang</span>.</h3>
                    <p>
                        As a <span className="highlight font-600">Full Stack Developer</span> with years of web development experience, I possess strong knowledge in various programming languages, such as <span className="highlight">JavaScript</span>, <span className="highlight">TypeScript</span>, <span className="highlight">.NET Core</span>, <span className="highlight">SQL Server</span>, <span className="highlight">RESTful APIs</span>, and some cloud technologies. 
                    </p>
                    <p>
                        I thrive in high-pressure, fast-paced work environments and understand the importance of teamwork and continuous learning. I am passionate about software development, with solid knowledge and experience as the software developer role.
                    </p>
                    <div className="my-resume">
                        <button className="resume-btn" onClick={() => window.open('/Resume-Xiachen-Jiang-se.pdf', '_blank')}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}