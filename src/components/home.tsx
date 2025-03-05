import Projects from './projects'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Skills from './skills';
import { useEffect, useState } from 'react';
import ProfileImage from './profile-img';

function Home() {

    const roles = ['Frontend Developer', 'Angular Developer', 'React Developer', 'UI Developer'];
    const [role, setRole] = useState(roles[0]);
  
    useEffect(() => {
      let index = 0;
  
      const interval = setInterval(() => {
        index = (index + 1) % roles.length;
        setRole(roles[index]);
      }, 7000);
  
      return () => clearInterval(interval);
    }, []);
    return(
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 offset-1">
            <h1 className='text-4xl mt-5'>Welcome to My Profile</h1>
            <h3 className='typing-text mt-5'>I'm a <span className='text-purple-800'>{role}</span></h3>

            <p className='my-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora delectus rerum, libero veritatis adipisci reiciendis perspiciatis facilis quae ab nam nesciunt, enim ipsum illo doloribus. Eos adipisci fuga omnis ipsum!</p>


            <div className="row mt-4">
              <div className="col-md-4">
                <button className='bg-purple-800 rounded-2xl border-pink-500 py-1 px-4 hover:bg-purple-900'>Download Resume</button>
              </div>
              <div className="col-md-4">
                <div className="icons flex justify-evenly items-center">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-purple-800 text-2xl" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-purple-800 text-2xl" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-purple-800 text-2xl" />
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-5 flex justify-center">
            <ProfileImage />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5">
            <Projects />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5">
            <Skills />
          </div>
        </div>
      </div>
    )
}

export default Home;