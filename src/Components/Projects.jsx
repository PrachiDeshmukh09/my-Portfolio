function Projects() {

    const projects = [
        {
            title: "Weather App",
            description:
                "A responsive weather application that displays weather information using a clean and user-friendly interface.",
            tech: "React.js,css"
        },
        {
            title: "Expense Tracker",
            description:
                "A web application for managing and tracking daily expenses in a simple and organized way.",
            tech: "React.js, CSS"
        },
        {
            title: "Student Feedback Manager",
            description:
                "A database-based application for managing and storing student feedback efficiently.",
            tech: "MongoDB,Mongoose,Node.js,Express.js"
        },
        {
            title: "Gemini AI Application",
            description:
                "An AI-powered application integrated with Gemini AI using a backend to process requests and generate responses.",
            tech: "HTML,Css,Javascript,Node.js,Express.js"
        }
    ];

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="cards">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <small>{project.tech}</small>
                    </div>

                ))}

            </div>

        </section>
    );
}
export default Projects;