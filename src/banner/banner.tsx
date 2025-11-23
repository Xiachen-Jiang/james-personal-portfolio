import { useState, useEffect } from "react";
import "./banner.scss";
import HeroExperience from "../components/HeroModels/HeroExperience";

export function Banner() {
    const texts = [
        "I'm James Jiang.",
        "I'm a software developer.",
        "I'm a full stack developer.",
        "I have passion, willingness and skills."
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    // 平滑滚动到About Me section
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    useEffect(() => {
        let timeout: any;

        const type = () => {
            const fullText = texts[currentTextIndex];

            if (isWaiting) {
                // Wait for 2 seconds before starting to delete
                timeout = setTimeout(() => {
                    setIsWaiting(false);
                    setIsDeleting(true);
                }, 2000);
                return;
            }

            if (isDeleting) {
                // Deleting characters
                setCurrentText(fullText.substring(0, currentText.length - 1));

                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                // Typing characters
                setCurrentText(fullText.substring(0, currentText.length + 1));

                if (currentText === fullText) {
                    setIsWaiting(true);
                }
            }
        };

        // Different speeds for typing and deleting
        const speed = isDeleting ? 100 : isWaiting ? 0 : 150;
        timeout = setTimeout(type, speed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, isWaiting, currentTextIndex, texts]);

    return (
        <section className="banner" id="home">
            <div className="banner-content">
                <div className="banner-content-text">
                    <h1>Welcome to My Portfolio</h1>
                    <div className="typewriter-container">
                        <p className="typewriter-text">
                            {currentText}
                            <span className="cursor">|</span>
                        </p>
                    </div>
                    <div className="banner-button-container">
                        <button 
                            className="learn-more-btn"
                            onClick={scrollToAbout}
                        >
                            About Me
                            <span className="btn-arrow">↓</span>
                        </button>
                    </div>
                </div>
            </div>
            <figure>
                <div className="frontpage-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </section>
    )
}