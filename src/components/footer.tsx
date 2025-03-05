import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {

    return (
        <>
            <div className="container-fluid footer p-5">
                <div className="row">
                    <div className="col-md-5 offset-1">
                        <h2 className="text-3xl text-purple-800">Anjaneyulu Appikatla</h2>
                        <ul className="list-type-none pl-0">
                            <li>Frontend Developer</li>
                            <li>Angular Developer</li>
                            <li>React Developer</li>
                            <li>UI Developer</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
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
                        <p className='mt-3'>anjiappikatla123@gmail.com</p>
                        <address>
                            Thanamchinthala,
                            Pothavaram (post),
                            Darsi (md),
                            Prakasam (dist), 523247,
                            Andhra Pradesh.
                        </address>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer;