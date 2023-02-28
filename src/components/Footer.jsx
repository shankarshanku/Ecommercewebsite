import '../styles/Footer.css'
// import logo from "/images/logo.svg"
// import a from "/images/YouTube.png"
// import b from "/images/fb.png"
// import c from "/images/insta.png"

const Footer = () => {
    let logos=[ {
        logos:"/images/logo.svg"
    },
    {
        logos:"/images/fb.png"
    },
    {
        logos:"/images/insta.png"
    }]
    return (
        <div className="footer">
            <div className="footerlogo">
                <img src="/images/logo.svg" alt="" />
            </div>
            <div className="footerlinks">
                <ul>
                    <li><a href="">Terms and condition</a></li>
                    <li><a href=""> Send us Feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>
            <div className="socialmedia">
            { logos.map((x)=>(<img width="25" src={x.logos} alt="" /> ))}
            </div>
            <div className="copyrights">
                <p> © 1996-2023, bookmyshow.com, Inc. or its affiliates</p>
            </div>
        </div>

    );
}

export default Footer;