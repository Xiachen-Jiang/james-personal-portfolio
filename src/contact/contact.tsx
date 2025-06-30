import "./contact.scss";

export function Contact() {

    const data: { heroImage: string, value: string, link: string }[] = [
        {
            heroImage: "/email.png",
            value: "jiangxiachen01@outlook.com",
            link: "mailto:jiangxiachen01@outlook.com"
        },
        {
            heroImage: "/telephone.png",
            value: "+61 404 318 145",
            link: "tel:+61404318145"
        },
        {
            heroImage: "/linkedin.png",
            value: "linkedin.com/in/xiachen-jiang/",
            link: "https://www.linkedin.com/in/xiachen-jiang-b84434192/"
        },
        {
            heroImage: "/github.png",
            value: "github.com/Xiachen-Jiang",
            link: "https://github.com/Xiachen-Jiang"
        }
    ]

    const handleContactClick = (link: string) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Get In Touch</h2>
                <hr />
                <p className="contact-description">
                    I'm always open to discussing new opportunities and interesting projects. 
                    Feel free to reach out if you'd like to work together!
                </p>
                <div className="contact-content">
                    <div className="contact-info">
                        {data.map((item, index) => (
                            <div 
                                className="contact-item" 
                                key={index}
                                onClick={() => handleContactClick(item.link)}
                            >
                                <img src={item.heroImage} alt={item.value} />
                                <span className="contact-text">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 