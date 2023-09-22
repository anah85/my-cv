import './Porfolio.scss';
import Work from './Work';

function Porfolio({ portfolio }){
    return(
        <section className='Porfolio'>
<h2 className='Porfolio__title'>Porfolio</h2>
<div className='Porfolio__wrap'>
    {portfolio.map((work, index)=> <Work key={work.alt + index} work={work} />)}
</div>

        </section>
    )
}
export default Porfolio;