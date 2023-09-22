import './Destreza.scss';

function Destreza({ destreza }){
    return(
        <article>
        <img alt={destreza.alt} src={destreza.url}/>
        </article>
    )
}
export default Destreza;