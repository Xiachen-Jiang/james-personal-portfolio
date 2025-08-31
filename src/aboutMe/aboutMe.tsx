
import "./aboutMe.scss";

export function AboutMe() {

    return (
        <section className="about-me" id="about">
            <h2>About Me</h2>
            <hr />
            <div className="about-me-content">
                <div className="about-me-content-left">
                        <img src='/aboutMe/james-hero.jpg' alt="About Me" />
                </div>
                <div className="about-me-content-right">
                    <h3 className="font-600">Hi, there.</h3>
                    <h3 className="font-600">I'm <span className="highlight">James Jiang</span>.</h3>
                    <p>
                    <span className="highlight">Full Stack Web Developer</span> with hands-on experience in designing and deploying scalable, user-centric applications using <span className="highlight">React</span>, <span className="highlight">TypeScript</span>, <span className="highlight">JavaScript</span>, <span className="highlight">C# ASP.NET Core</span>, and <span className="highlight">SQL</span>. Highly skilled in <span className="highlight">RESTful API</span> development, <span className="highlight">CI/CD</span> pipelines (Azure/AWS), and building responsive, accessible front ends under <span className="highlight">Agile</span> environments. 
                    </p>
                    <p>
                    Known for being easy-going, collaborative, and a fast learner with strong <span className="highlight">analytical</span> and <span className="highlight">problem-solving</span> skills who thrives in dynamic team settings while delivering high-quality results under deadlines. I am passionate about software development, with solid knowledge and experience as the software developer role.
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