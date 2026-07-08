import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import {
    FaLaptopCode,
    FaBullhorn,
    FaVideo
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp
} from "react-icons/fa";

function Home() {
    const words = [
        "DIGITAL",
        "CREATIVE",
        "SMART",
        "RELIABLE",
        "MODERN",
        "PROFESSIONAL",
    ];

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <section className="hero">

                <div className="hero-left">

                    <span className="hero-tag">
                        🚀 Digital Growth Partner
                    </span>
                    <h1>
                        We Build
                        <br />
                        <span>Digital Experiences.</span>
                    </h1>

                    <p>
                        Websites, Video Production & Social Media Marketing
                        that help businesses attract customers, build trust,
                        and grow faster.
                    </p>
                    <div className="hero-buttons">
                        <a href="#portfolio" className="primary-btn">
                            View Portfolio →
                        </a>

                        <a href="/contact" className="secondary-btn">
                            Get Free Consultation
                        </a>
                    </div>


                    <div className="hero-stats">

                        <div>
                            <h2>100+</h2>
                            <span>Projects</span>
                        </div>

                        <div>
                            <h2>50+</h2>
                            <span>Clients</span>
                        </div>

                        <div>
                            <h2>4.9★</h2>
                            <span>Rating</span>
                        </div>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="glass-card card1">
                        🎬 Video Production
                    </div>

                    <div className="glass-card card2">
                        📱 Social Media
                    </div>

                    <div className="glass-card card3">
                        💻 Website Development
                    </div>

                    <img src="/hero.webp" alt="" />

                </div>

            </section>

            <section className="featured-projects" id="portfolio">

                <div className="featured-top">

                    <div className="featured-left">
                        <h2>Featured Projects</h2>

                        <p>
                            Explore some of our recent websites, commercial videos and
                            marketing campaigns that helped businesses grow.
                        </p>
                    </div>

                    <Link to="/portfolio" className="view-projects">
                        View All Projects →
                    </Link>

                </div>

                <div className="portfolio-grid">

                    {/* Website */}

                    <div className="portfolio-card">

                        <div className="project-image">
                            <img src="/WEbimg1.jpeg" alt="Third Wave Coffee" />
                            <span className="project-tag website">Website</span>
                        </div>

                        <div className="portfolio-info">

                            <h3>Third Wave Coffee</h3>

                            <p>Website Development & SEO</p>

                            <a href="#">View Project →</a>

                        </div>

                    </div>

                    {/* Video */}

                    <div className="portfolio-card">

                        <a
                            href="https://www.instagram.com/reel/DYZt_06hcjx/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-link"
                        >

                            <div className="project-image video-thumb">

                                <img
                                    src="/Imagethumb.jpg"
                                    alt="Brand Commercial"
                                />

                                <div className="video-overlay">

                                    <div className="play-btn">
                                        ▶
                                    </div>

                                </div>

                                <span className="project-tag video">
                                    Video
                                </span>

                            </div>

                        </a>

                        <div className="portfolio-info">

                            <h3>Brand Commercial</h3>

                            <p>
                                Promotional Video Production
                            </p>

                            <a
                                href="https://www.instagram.com/reel/DYZt_06hcjx/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch Video →
                            </a>

                        </div>

                    </div>

                    {/* Marketing */}

                    <div className="portfolio-card">

                        <div className="project-image">

                            <img src="/Webimg2.jpeg" alt="Kosala" />

                            <span className="project-tag social">Marketing</span>

                        </div>

                        <div className="portfolio-info">

                            <h3>Kosala Silk Sarees</h3>

                            <p>Social Media Marketing</p>

                            <a href="#">View Campaign →</a>

                        </div>

                    </div>

                    {/* Website */}

                    <div className="portfolio-card">

                        <div className="project-image">

                            <img src="hero-bg.jpeg" alt="DYS Foundation" />

                            <span className="project-tag website">Website</span>

                        </div>

                        <div className="portfolio-info">

                            <h3>DYS Foundation</h3>

                            <p>Responsive Business Website</p>

                            <a href="#">View Project →</a>

                        </div>

                    </div>

                    <div className="portfolio-card">

                        <a
                            href="https://www.instagram.com/reel/DY9hDI2lCmB/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-link"
                        >
                            <div className="project-image video-thumb">

                                <img
                                    src="/Image-11.jpg"
                                    alt="Fashion Brand Reel"
                                />

                                <div className="play-btn">▶</div>

                                <span className="project-tag video">
                                    Video
                                </span>

                            </div>
                        </a>

                        <div className="portfolio-info">

                            <h3>Fashion Brand Reel</h3>

                            <p>Instagram Reel & YouTube Shorts</p>

                            <a
                                href="https://www.instagram.com/reel/DY9hDI2lCmB/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch Video →
                            </a>

                        </div>

                    </div>

                    {/* Marketing */}

                    <div className="portfolio-card">

                        <div className="project-image">

                            <img
                                src="/allen.png"
                                alt="Allewin Invisible Grid"
                            />

                            <span className="project-tag website">
                                Website
                            </span>

                        </div>

                        <div className="portfolio-info">

                            <h3>Allewin Invisible Grid</h3>

                            <p>Corporate Website Development</p>

                            <ul>
                                <li>Modern responsive website</li>
                                <li>Lead generation focused design</li>
                            </ul>

                            <a
                                href="https://allewin.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Website →
                            </a>

                        </div>
                    </div>
                </div>

            </section>


            {/* Services */}

            <section className="services">

                <h2>Our Expertise</h2>

                <p className="services-subtitle">
                    Everything your business needs to build a strong digital presence,
                    generate leads and grow consistently.
                </p>

                <div className="service-grid">

                    <Link to="/website-development" className="service-link">

                        <div className="service-card">

                            <div className="service-icon">
                                <FaLaptopCode />
                            </div>

                            <h3>Website Development</h3>

                            <p>
                                Fast, modern and SEO-friendly websites designed
                                to convert visitors into customers.
                            </p>

                            <div className="service-bottom">
                                <span>Learn More</span>
                                <span>→</span>
                            </div>

                        </div>

                    </Link>

                    <Link to="/social-media-marketing" className="service-link">

                        <div className="service-card">

                            <div className="service-icon">
                                <FaBullhorn />
                            </div>

                            <h3>Social Media Marketing</h3>

                            <p>
                                Creative content and performance marketing
                                that grows your audience and generates leads.
                            </p>

                            <div className="service-bottom">
                                <span>Learn More</span>
                                <span>→</span>
                            </div>

                        </div>

                    </Link>

                    <Link to="/video-production" className="service-link">

                        <div className="service-card">

                            <div className="service-icon">
                                <FaVideo />
                            </div>

                            <h3>Video Production</h3>

                            <p>
                                High-quality reels, advertisements and brand
                                videos that capture attention.
                            </p>

                            <div className="service-bottom">
                                <span>Learn More</span>
                                <span>→</span>
                            </div>

                        </div>

                    </Link>

                </div>

            </section>

            <section id="reviews" className="reviews-section">

                <div className="reviews-header">

                    <div className="rating-badge">
                        <strong>⭐ 4.9 / 5 Rating</strong>
                        <span>Based on 77+ Google Reviews</span>
                    </div>

                    <h2>What Our Clients Say</h2>

                </div>

                <div className="reviews-grid">

                    <div className="review-card">

                        <div className="review-stars">★★★★★</div>

                        <p>
                            Great experience. They created our website exactly how we
                            wanted and helped improve our Google ranking within weeks.
                        </p>

                        <div className="review-user">
                            <div className="review-avatar">A</div>

                            <div>
                                <h4>Aniket Karangutkar</h4>
                                <span>Google Review</span>
                            </div>
                        </div>

                    </div>

                    <div className="review-card">

                        <div className="review-stars">★★★★★</div>

                        <p>
                            Amazing experience. The website design was excellent and the
                            team was highly cooperative and trustworthy.
                        </p>

                        <div className="review-user">
                            <div className="review-avatar">S</div>

                            <div>
                                <h4>Dr. Subhashchandra Patil</h4>
                                <span>Google Review</span>
                            </div>
                        </div>

                    </div>

                    <div className="review-card">

                        <div className="review-stars">★★★★★</div>

                        <p>
                            Professional and respectful team. They built my practice
                            website and were always quick to respond.
                        </p>

                        <div className="review-user">
                            <div className="review-avatar">O</div>

                            <div>
                                <h4>Om Shivade</h4>
                                <span>Google Review</span>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="reviews-btn">

                    <a
                        href="https://www.google.com/search?q=saral+infosoft#lrd=0x3be7954ba7f69299:0xc7426b8312e9580a,1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Read All Google Reviews →
                    </a>

                </div>
            </section>
            <section className="cta-section">

                <div className="cta-box">

                    <div className="cta-left">
                        <h2>Make the Move</h2>

                        <a href="/contact" className="cta-btn">
                            Let's Collaborate →
                        </a>
                    </div>

                    <div className="cta-right">
                        <h3>Reach Out</h3>

                        <p>
                            Ready to grow your business with professional websites,
                            social media marketing and video production?
                            Let's discuss your project today.
                        </p>
                    </div>

                </div>

            </section>


            <section className="contact-faq">

                {/* Left Form */}

                <div className="contact-card">

                    <form>

                        <input
                            type="text"
                            placeholder="Full Name"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="text"
                            placeholder="Company Name"
                        />

                        <textarea
                            rows="6"
                            placeholder="Tell us about your project..."
                        ></textarea>

                        <button type="submit">
                            Submit →
                        </button>

                    </form>

                </div>

                {/* Right FAQ */}

                <div className="faq-card">

                    <h2>Frequently Asked Questions</h2>

                    <details open>
                        <summary>
                            How long does it take to build a website?
                        </summary>

                        <p>
                            Most business websites are completed within
                            2–4 weeks depending on features and content.
                        </p>
                    </details>

                    <details>
                        <summary>
                            Do you provide Social Media Marketing?
                        </summary>

                        <p>
                            Yes. We create content, manage campaigns,
                            run Meta ads and help businesses grow online.
                        </p>
                    </details>

                    <details>
                        <summary>
                            Do you edit Instagram Reels & YouTube videos?
                        </summary>

                        <p>
                            Yes. We produce high-quality reels, shorts,
                            promotional videos and commercial edits.
                        </p>
                    </details>

                    <details>
                        <summary>
                            Will my website be mobile responsive?
                        </summary>

                        <p>
                            Absolutely. Every website is fully responsive,
                            SEO-friendly and optimized for speed.
                        </p>
                    </details>

                    <details>
                        <summary>
                            How can I get started?
                        </summary>

                        <p>
                            Fill out the form and our team will contact you
                            within 24 hours.
                        </p>
                    </details>

                </div>

            </section>
        </>

    );
}

export default Home;