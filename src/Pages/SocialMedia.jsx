import { Link } from "react-router-dom";
import "./SocialMedia.css";

function SocialMedia() {
    return (
        <>

            {/* ================= HERO ================= */}

            <section className="social-hero">

                <div className="social-hero-content">

                    <h1>
                        Amplifying Brands,
                        <br />
                        Driving Engagement,
                        <br />
                        Creating
                        <span className="social-highlight"> Impact</span>
                    </h1>

                    <p>
                        We create scroll-stopping content, manage social media
                        campaigns and build strategies that help brands increase
                        reach, engagement and conversions across Instagram,
                        Facebook, LinkedIn and more.
                    </p>

                    <a href="#portfolio" className="social-hero-btn">
                        Explore Services
                    </a>

                </div>

                <div className="social-hero-image">

                    <img
                        src="/social-banner.webp"
                        alt="Social Media Marketing"
                    />

                </div>

            </section>

            {/* ================= PROJECTS ================= */}

            <section
                id="portfolio"
                className="social-projects"
            >

                {/* Header */}

                <div className="social-projects-header">

                    <div className="social-projects-left">

                        <h2>Campaigns that Perform</h2>

                        <Link
                            to="/contact"
                            className="social-start-btn"
                        >
                            Start a Project
                            <span>↗</span>
                        </Link>

                    </div>

                    <div className="social-projects-right">

                        <p>
                            Creative campaigns built to increase engagement,
                            followers and measurable business growth.
                        </p>

                    </div>

                </div>

                {/* Cards */}

                <div className="social-grid">

                    {/* Card 1 */}

                    <div className="social-card">

                        <img
                            src="/projects/social1.webp"
                            className="social-image"
                            alt="Kosala Silk Sarees"
                        />

                        <div className="social-content">

                            <h3>Kosala Silk Sarees</h3>

                            <p className="social-service">
                                Instagram Growth & Content Strategy
                            </p>

                            <ul className="social-results">

                                <li>
                                    <strong>2M+</strong> Organic Reach
                                </li>

                                <li>
                                    <strong>180%</strong> Engagement Growth
                                </li>

                                <li>
                                    <strong>120+</strong> Creative Posts
                                </li>

                            </ul>

                            <Link
                                to="/case-study/kosala"
                                className="social-btn"
                            >
                                View Campaign →
                            </Link>

                        </div>

                    </div>


                    {/* Card 2 */}

                    <div className="social-card">

                        <img
                            src="/projects/social2.webp"
                            className="social-image"
                            alt="Green Salon"
                        />

                        <div className="social-content">

                            <h3>Green Salon</h3>

                            <p className="social-service">
                                Social Media Management
                            </p>

                            <ul className="social-results">

                                <li>
                                    <strong>300K+</strong> Reel Views
                                </li>

                                <li>
                                    <strong>5X</strong> More Leads
                                </li>

                                <li>
                                    <strong>90+</strong> Reels Produced
                                </li>

                            </ul>

                            <Link
                                to="/case-study/greensalon"
                                className="social-btn"
                            >
                                View Campaign →
                            </Link>

                        </div>

                    </div>


                    {/* Card 3 */}

                    <div className="social-card">

                        <img
                            src="/projects/social3.webp"
                            className="social-image"
                            alt="Eat Fit"
                        />

                        <div className="social-content">

                            <h3>Eat Fit</h3>

                            <p className="social-service">
                                Brand Awareness Campaign
                            </p>

                            <ul className="social-results">

                                <li>
                                    <strong>1.5M+</strong> Impressions
                                </li>

                                <li>
                                    <strong>65%</strong> Higher Reach
                                </li>

                                <li>
                                    <strong>50+</strong> Creative Designs
                                </li>

                            </ul>

                            <Link
                                to="/case-study/eatfit"
                                className="social-btn"
                            >
                                View Campaign →
                            </Link>

                        </div>

                    </div>

                </div>

            </section>
            {/* OUR PROCESS */}

            <section className="process-section">

                <div className="process-grid">

                    <div className="process-card">

                        <span className="process-number">01</span>

                        <h3>Content Strategy</h3>

                        <p>
                            We build data-driven content strategies that strengthen your
                            brand communication, identify the right audience and create
                            a roadmap for consistent social media growth.
                        </p>

                    </div>

                    <div className="process-card">

                        <span className="process-number">02</span>

                        <h3>Content Creation</h3>

                        <p>
                            Our team creates engaging reels, posts, stories and
                            creative assets that capture attention, increase engagement
                            and build a strong brand presence.
                        </p>

                    </div>

                    <div className="process-card">

                        <span className="process-number">03</span>

                        <h3>Influencer Collaboration</h3>

                        <p>
                            We partner with relevant influencers and creators to expand
                            your brand reach, improve credibility and drive measurable
                            campaign performance.
                        </p>

                    </div>

                </div>

            </section>
            {/* FEATURED REELS */}
            {/* FEATURED REELS */}

            <section className="reels-section">

                <div className="reels-header">

                    <h2>Featured Reels</h2>

                    <p>
                        Scroll-stopping content created for brands across lifestyle,
                        education, fitness, furniture and consumer products.
                    </p>

                </div>

                <div className="reels-grid">

                    <div className="reel-card">
                        <video
                            src="/videos/reel.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    <div className="reel-card">
                        <video
                            src="/videos/reel1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    <div className="reel-card">
                        <video
                            src="/videos/Reel2.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    <div className="reel-card">
                        <video
                            src="/videos/Reel3.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                    <div className="reel-card">
                        <video
                            src="/videos/Reel4.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                </div>

            </section>
        </>
    );
}

export default SocialMedia;