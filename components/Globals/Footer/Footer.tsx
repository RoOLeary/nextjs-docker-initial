import styles from './../styles/Footer.module.css'
import Link from 'next/link'; 

const Footer = () => (

    <footer className={"c-footer"}>
        <div className="o-wrapper">
            <div className="c-footer__bio">
                <div className="o-grid o-grid--gap-xxl">
                    
                    <div className="o-grid__col l:o-grid__col--span-4">
                        <h3 className="u-m-m">Picnic</h3>
                        <ul>
                            <li><Link href="/about">About Picnic</Link></li>
                            <li><Link href="/careers">Careers at Picnic</Link></li>
                            <li><Link href="/jobs">Become a delivery person</Link></li>
                            <li><Link href="/jobs">Become a warehouse worker</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="o-grid__col l:o-grid__col--span-4">
                        <h3 className="u-m-m">Online Supermarket</h3>
                        <ul>
                            <li><Link href="/download-app">Download app</Link></li>
                            <li><Link href="/webstore">Our assortment</Link></li>
                            <li><Link href="/about-us">How does it work?</Link></li>
                            <li><Link href="/locations">Where does Picnic deliver?</Link></li>
                            <li><Link href="/blog">Business order</Link></li>
                            <li><Link href="/blog">Home Deliveries</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>
                

                    
                    <div className="o-grid__col l:o-grid__col--span-4">
                        <h3 className="u-m-m">Contact</h3>
                        <ul>
                            <li><Link href="/faqs">Frequently Asked Questions</Link></li>
                            <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                            <li><Link href="/announcements">Important notices</Link></li>
                            <li><Link href="/webstore">Promotions and Prices</Link></li>
                            <li><Link href="/guarantee">Thusiwinkel Guarantee</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="c-footer__client">
                
                <ul className="c-footer__social">
                    <li className="c-footer__socialItem"><a className="c-footer__socialLink" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img alt="YouTube" className="c-footer__socialIcon" src="/assets/images/youtube.svg" /></a></li>
                    <li className="c-footer__socialItem"><a className="c-footer__socialLink" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img alt="Facebook" className="c-footer__socialIcon" src="/assets/images/facebook.svg" /></a></li>
                    <li className="c-footer__socialItem"><a className="c-footer__socialLink" href="https://twitter.com/" target="_blank" rel="noreferrer"><img alt="Twitter" className="c-footer__socialIcon" src="/assets/images/twitter.svg" /></a></li>
                    <li className="c-footer__socialItem"><a className="c-footer__socialLink" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img alt="Instagram" className="c-footer__socialIcon" src="/assets/images/instagram.svg" /></a></li>
                </ul>

                <p className="c-footer__copyright">Copyright &copy; {new Date().getFullYear()} </p>
            </div>
        </div>
    </footer>
)

export default Footer;