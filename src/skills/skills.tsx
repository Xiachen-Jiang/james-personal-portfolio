import "./skills.scss";
import Marquee from "react-fast-marquee";

export function Skills() {
    const data: { heroImage: string, skills: string }[] = [
        {
            heroImage: "/skills/html.png",
            skills: "HTML5"
        },
        {
            heroImage: "/skills/css-3.png",
            skills: "CSS3"
        },
        {
            heroImage: "/skills/js.png",
            skills: "JavaScript"
        },
        {
            heroImage: "/skills/typescript.png",
            skills: "TypeScript"
        },
        {
            heroImage: "/skills/c-.png",
            skills: "C++"
        },
        {
            heroImage: "/skills/c-sharp.png",
            skills: "C#"
        },
        {
            heroImage: "/skills/react.png",
            skills: "React"
        },
        {
            heroImage: "/skills/dotnet.png",
            skills: "ASP.NET Core"
        },
        {
            heroImage: "/skills/node-js.png",
            skills: "Node.js"
        },
        {
            heroImage: "/skills/sql-server.png",
            skills: "SQL Server"
        },
        {
            heroImage: "/skills/postgre.png",
            skills: "PostgreSQL"
        },
        {
            heroImage: "/skills/git.png",
            skills: "Git"
        },
        {
            heroImage: "/skills/azure.png",
            skills: "Azure DevOps"
        },
        {
            heroImage: "/skills/api.png",
            skills: "RESTful APIs"
        }
    ]



    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2>My Skills</h2>
                <hr />
                <Marquee
                    speed={80}
                    gradient={false}
                    pauseOnHover={false}
                    direction="left"
                    className="skills-marquee"
                >
                    {data.map((item, index) => (
                        <div className="skills-content-item" key={index}>
                            <img className="skills-content-item-img" src={item.heroImage} alt={item.skills} />
                            <p>{item.skills}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
