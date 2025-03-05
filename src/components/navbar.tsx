import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    const handleClick = (path:any) => {
        navigate(path)
    }
    return (
        <>
            <div className="flex justify-end p-3">
                <ul className="nav" onClick={navClick}>
                    <li onClick={() => handleClick('/')} className="active">Home</li>
                    <li onClick={() =>handleClick('/about')}>About</li>
                    <li onClick={() =>handleClick('/projects')}>Projects</li>
                    <li onClick={() =>handleClick('/skills')}>Skills</li>
                    <li onClick={() =>handleClick('/contact')}>Contact</li>
                </ul>
            </div>
        </>
    );

   
}

const navClick = (event:any) => {
   let ele = event.currentTarget.children

   Array.from(ele).forEach((x:any) => {
    x.classList.remove('active');
});
event.target.classList.add('active');
};

export default Navbar;
