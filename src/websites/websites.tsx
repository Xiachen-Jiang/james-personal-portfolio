import "./websites.scss";

export function Websites() {

    const websites:{imageUrl: string, link: string}[] = [
        {
            imageUrl: "/logo/logo-adelaidefooty.png",
            link: "https://adelaidefooty.com.au/"
        },
        {
            imageUrl: "/logo/logo-vssassoon.png",
            link: "https://vssassoon.com.au"
        },
        {
            imageUrl: "/logo/logo-cuisinart.png",
            link: "https://cuisinart.com.au/"
        },
        {
            imageUrl: "/logo/logo-midsec.png",
            link: "https://midsec.com.au/"
        },
        {
            imageUrl: "/logo/logo-masa.png",
            link: "https://masa.com.au/"
        },
        {
            imageUrl: "/logo/logo-vilis.png",
            link: "https://vilis.com/"
        },
        {
            imageUrl: "/logo/logo-caronmilham.png",
            link: "https://caronmilham.com/"
        },
        {
            imageUrl: "/logo/logo-whyalla.png",
            link: "https://whyalla.com/"
        },
        {
            imageUrl: "/logo/logo-nelson.png",
            link: "https://nelsonteamwear.com.au/"
        },
        {
            imageUrl: "/logo/logo-aiml.png",
            link: "https://aiml.shop/"
        }
    ]

    return (
        <section className="websites" id="websites">
            <div className="websites-container">
                <h2>Developed Websites</h2>
                <hr />
                <div className="websites-content">
                    {websites.map((website, index) => (
                        <a 
                            href={website.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="websites-content-item" 
                            key={index}
                        >
                            <div className="websites-image-wrapper">
                                <img src={website.imageUrl} alt={`Website logo for ${website.link}`} />
                                <div className="websites-overlay">
                                    <span className="websites-visit-text">View Website</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}