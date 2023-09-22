import './Tecno.scss';
import Destreza from './Destreza';

function Tecno({ tecnoligia }){
    return(
        <section className='Tecno'>
<h2 className='Tecno__title'>Tecnología</h2>
<div className='Tecno__wrap'>
    {tecnoligia.map((destreza, index)=> <Destreza key={destreza.alt + index} destreza={destreza} />)}
</div>

        </section>
    )
}
export default Tecno;