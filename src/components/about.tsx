import ProfileImage from "./profile-img";

function About() {
    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    <div className="offset-2 mt-10 flex justify-center">
                        <ProfileImage />
                    </div>
                </div>
                <div className="col-md-5">
            <h3 className='typing-text mt-5'>I'm a <span className='text-purple-800'>Web Developer</span></h3>

            <p className='my-10'>I am a passionate frontend developer with expertise in the Angular framework. With a strong foundation in HTML, CSS, TypeScript, and modern JavaScript, I specialize in building dynamic, responsive, and user-friendly web applications. My experience with Angular allows me to create scalable single-page applications (SPAs) while ensuring clean code architecture and optimal performance. I enjoy transforming complex requirements into intuitive user interfaces and continuously strive to enhance user experience through innovative design and efficient functionality.</p>
                </div>
            </div>
        </>
    )
}

export default About;