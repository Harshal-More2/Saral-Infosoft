import "./VideoProduction.css";

function VideoProduction() {
    return (
        <>
            {/* HERO */}

            <section className="video-hero">

                <div className="video-content">

                    <h1>
                        Transforming Ideas Into
                        <br />
                        <span className="video-highlight">
                            Powerful Visual Stories
                        </span>
                    </h1>

                    <p>
                        We create high-quality corporate films, product videos,
                        Instagram Reels, YouTube content and performance-driven
                        advertisements that help brands connect with customers
                        and grow faster.
                    </p>

                    <a href="#portfolio" className="video-btn">
                        Check Our Work →
                    </a>

                </div>

                <div className="video-box">

                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                    >
                        <source
                            src="/videos/Reel3.mp4"
                            type="video/mp4"
                        />
                    </video>

                </div>

            </section>


            {/* Portfolio */}

            <section id="portfolio" className="video-portfolio">

                <h2>Recent Projects</h2>

                <div className="video-portfolio-grid">

                    <div className="video-card">
                        <video controls muted loop>
                            <source src="/videos/reel.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="video-card">
                        <video controls muted loop>
                            <source src="/videos/reel1.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="video-card">
                        <video controls muted loop>
                            <source src="/videos/Reel2.mp4" type="video/mp4" />
                        </video>
                    </div>

                </div>

            </section>


            {/* Services */}

            <section className="video-services">

                <h2>What We Offer</h2>

                <div className="video-service-grid">

                    <div className="video-service-card">
                        <h3>Short Form Content</h3>
                        <p>
                            Instagram Reels, TikTok and YouTube Shorts edited
                            for maximum engagement.
                        </p>
                    </div>

                    <div className="video-service-card">
                        <h3>Commercial Videos</h3>
                        <p>
                            Product advertisements, promotional videos and
                            brand campaigns.
                        </p>
                    </div>

                    <div className="video-service-card">
                        <h3>Corporate Films</h3>
                        <p>
                            Professional company profile videos, interviews and
                            event coverage.
                        </p>
                    </div>

                </div>

            </section>
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
                            src="/videos/Reel4.mp4"

                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    <div className="reel-card">
                        <video
                            src="/videos/Reel5.mp4"

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

export default VideoProduction;

