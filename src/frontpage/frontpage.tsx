import React from 'react';
import { words } from '../constance/index.tsx';
import './frontpage.scss';
import Button from '../components/button';
import HeroExperience from '../components/HeroModels/HeroExperience';

export function Frontpage() {

    return (
        <section id="frontpage" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="Frontpage Background" />
            </div>

            <div className="frontpage-layout">
                {/* LEFT: Content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="frontpage-text">
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word: any) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}

                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            I'm James Jiang, a full stack developer with a passion for creating user-friendly and efficient web applications.
                        </p>
                        <Button 
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="botton"
                            text="See My Work"
                        />
                    </div>
                </header>
                {/* RIGHT: Image */}
                <figure>
                    <div className="frontpage-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    );
}