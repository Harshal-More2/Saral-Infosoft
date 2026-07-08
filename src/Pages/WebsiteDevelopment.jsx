import { Link } from "react-router-dom";
import "./WebsiteDevelopent.css";
import thechikanstore from "../assets/images/thechikanstore.png";
import chikan1 from "../assets/images/Chikan1.png";
import chikan2 from "../assets/images/Chikan2.png";
import chikan3 from "../assets/images/Chikan3.png";
import Thebombaebar from "../assets/images/Thebombaebar.png";
import thebombae1 from "../assets/images/thebombae1.png";
import thebombae2 from "../assets/images/thebombae2.png";
import thebombae3 from "../assets/images/thebombae3.png";
import { websites } from "../data/websites";

function WebsiteDevelopment() {

    const websites = [

        {
            id: 1,
            count: "01 / 04",
            bg: "linear-gradient(135deg,#FDF3EA,#F8E7D6)",
            title: "The Chikan Store",
            desc: "A premium ethnic fashion e-commerce website with a modern shopping experience and responsive design.",
            main: thechikanstore,
            gallery: [
                chikan1,
                chikan2,
                chikan3
            ],
            type: "D2C E-Commerce Website",
            tech: "HTML • CSS • JavaScript",
            link: "/case-study/chikan"
        },

        {
            id: 2,
            count: "02 / 04",
            bg: "linear-gradient(135deg,#F4F8FF,#E7EEFF)",
            title: "The Bombae Bar",
            desc: "A modern restaurant website designed to showcase signature dishes, simplify online ordering, and deliver a seamless dining experience across desktop and mobile devices.",
            main: Thebombaebar,
            gallery: [
                thebombae1,
                thebombae2,
                thebombae3
            ],
            type: "Restaurant Website",
            tech: "HTML • CSS • JavaScript",
            link: "/case-study/bombaebar"
        },
        {
            id: 3,
            count: "03 / 04",
            bg: "linear-gradient(135deg,#FBF6F0,#F2E6D8)",
            title: "Third Wave Coffee",
            desc: "Modern coffee website with clean UI, fast performance and optimized shopping experience.",
            main: "/projects/twc-main.webp",
            gallery: [
                "/projects/twc1.webp",
                "/projects/twc2.webp",
                "/projects/twc3.webp"
            ],
            type: "E-Commerce Website",
            tech: "React • CSS • SEO",
            link: "/case-study/twc"
        },

        {
            id: 4,
            count: "04 / 04",
            bg: "linear-gradient(135deg,#F5F2FF,#E9E2FF)",
            title: "Your Next Project",
            desc: "Professional business website with responsive layouts and conversion focused user experience.",
            main: "/projects/project-main.webp",
            gallery: [
                "/projects/project1.webp",
                "/projects/project2.webp",
                "/projects/project3.webp"
            ],
            type: "Business Website",
            tech: "HTML • CSS • JavaScript",
            link: "/case-study/project"
        }
    ];

    return (
        <>

            {/* HERO */}

            <section className="hero website-hero">

                <div className="hero-content">

                    <h1>
                        Building Modern
                        <br />
                        High-Converting
                        <br />
                        <span className="highlight">
                            Websites
                        </span>
                    </h1>

                    <p>
                        We design and develop fast, responsive and
                        conversion-focused websites that help businesses
                        generate leads, build trust and grow online.
                    </p>

                    <div className="hero-stats">
                        <div>⭐ 4.9 Rating</div>
                        <div>💬 77+ Reviews</div>
                        <div>💻 100+ Projects</div>
                    </div>

                    <a href="#projects" className="hero-btn">
                        Book a Consultation
                    </a>

                </div>

                <div className="hero-image">
                    <img
                        src="/Weblogo-removebg-preview.png"
                        alt="Website Portfolio"
                    />
                </div>

            </section>

            {/* PROJECT INTRO */}

            <section className="projects-intro">

                <div className="projects-intro-left">

                    <h2>
                        Websites that shine
                    </h2>

                    <a href="#projects" className="start-project">
                        Start a project
                        <span>↗</span>
                    </a>

                </div>

                <div className="projects-intro-right">

                    <p>
                        Four recent builds across education, enterprise,
                        healthcare and business—each designed with
                        responsive layouts, fast performance and
                        conversion-focused user experience.
                    </p>

                </div>

            </section>
            {/* PROJECTS */}

            <div id="projects">

                {websites.map((site) => (

                    <section
                        className="website-showcase"
                        key={site.id}
                        style={{ background: site.bg }}
                    >
                        <div className="showcase-left">

                            <img
                                src={site.main}
                                alt={site.title}
                            />

                        </div>

                        <div className="showcase-right">

                            <span className="count">
                                {site.count}
                            </span>

                            <h2>{site.title}</h2>

                            <p>{site.desc}</p>

                            <div className="showcase-gallery">

                                {site.gallery.map((img, index) => (

                                    <img
                                        key={index}
                                        src={img}
                                        alt=""
                                    />

                                ))}

                            </div>

                            <div className="showcase-info">

                                <div className="info-box">
                                    <span>TYPE</span>
                                    <h4>{site.type}</h4>
                                </div>

                                <div className="info-box">
                                    <span>BUILT WITH</span>
                                    <h4>{site.tech}</h4>
                                </div>

                            </div>

                            <Link
                                to={`/case-study/${site.slug}`}
                                className="case-btn"
                            >
                                View Case Study →
                            </Link>

                        </div>

                    </section>

                ))}

            </div>

        </>
    );
}

export default WebsiteDevelopment;