function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <p className="intro">Hello, I'm</p>
                <h1>Prachi Deshmukh</h1>

                <h2>Full-Stack MERN Developer</h2>
                <p className="description">
                    I build scalable, responsive, and user-focused web
                    applications using MongoDB, Express.js, React, and Node.js.
                    I enjoy turning ideas into clean and practical digital
                    experiences.
                </p>

                <div className="home-buttons">
                    <a href="#projects" className="btn primary-btn">View My Work</a>
                    <a href="https://drive.google.com/file/d/1YzUgTVDvqb5Xd2CumUc5nAncBXYxsCfv/view?usp=drivesdk" className="btn secondary-btn" target="_blank" rel="noreferrer">Download Resume </a>
                </div>
                <div className="social-links">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub
                    </a>
                    <a href="https://www.linkedin.com/feed/" target="_blank"
                        rel="noreferrer"
                    >LinkedIn</a>

                </div>
            </div>
            <div className="home-image">
                <img src="/image.png" alt="Prachi Deshmukh" />
            </div>
        </section>
    );
}
export default Home;
