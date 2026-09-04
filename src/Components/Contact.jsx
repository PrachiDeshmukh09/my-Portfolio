import emailjs from "@emailjs/browser";

function Contact() {

    function handleSubmit(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                emailjs.sendForm(
                    "me_prachi",
                    "template_32yimcm",
                    e.target,
                    "8OjqHhc3q0VbMkU4h"
                )
            )
            .then(() => {
                alert("Thank you! Your message has been sent.");
                e.target.reset();
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong. Please try again.");
            });
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
                    name="from_name"
                    placeholder="Your Name"
                    required
                />

                <input
                    type="email"
                    name="from_email"
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