import './Hero.scss';
import Developer from './../../assets/Developer.jpeg';

function Hero({ hero }) {
    return (
 <section className="Hero">
 <div className="Hero__info">
 <h1>{hero.name}</h1>
 <h2 className="Hero__title">{hero.profession}</h2>
 <ul>
    <li>
        <span className="Hero__icon">📲</span>
        <a href={`tel:${hero.mobile}`} className="Hero__link">{hero.mobile}</a>
    </li>
    <li>
        <span className="Hero__icon">📧</span>
        <a href={`tel:${hero.email}`} className="Hero__link">{hero.email}</a>
    </li>
 </ul>
 </div>
 <div className="Hero__image">
    <img src ={Developer} alt='Woman Developer'/>
 </div>
  
</section>
    );
}

export default Hero;