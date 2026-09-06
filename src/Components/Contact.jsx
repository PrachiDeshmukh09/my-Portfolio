function Contact() {
    function handleSubmit(e) {
        e.preventDefault();

        e.currentTarget.reset();

        alert("Thank you! Your message has been submitted.");
    }

    return (
        <section id="contact">

            <h1>Contact Me</h1>

            <div className="contact">
                <p>📞 +91 84596 99194</p>
                <p>📧 prachideshmukh25@navgurukul.org</p>
                <p>📍 Bangalore, India</p>
            </div>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                ></textarea>

                <button className="btn" type="submit">
                    Send Message
                </button>

            </form>

        </section>
    );
}

export default Contact;