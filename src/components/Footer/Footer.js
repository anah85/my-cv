import "./Footer.scss";

function Footer ({ footer }){
    return(
    <footer className="footer">
    <div className="footer__box">
        <a href={`tel:${footer.linkedIn}`} className="Hero__link">{footer.linkedIn}</a>
    </div>
    
    <div className="footer__box">
         <a href={`tel:${footer.email}`} className="Hero__link">{footer.email}</a>
    </div>
    <div className="footer__box">
         <a href={`tel:${footer.github}`} className="Hero__link">{footer.github}</a>
    </div>

    
    </footer>
    )
}

export default Footer;