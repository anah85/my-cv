import { useState } from 'react';
import Descriptions from './Descriptions';
import './Curriculum.scss';

function Curriculum({ curriculum }){

const{ experience , education } = curriculum;
const [showExperience, setShowExperience] = useState(false);
console.log(showExperience);

 return(
    <section className="Curriculum">
<nav>
   <button className="Curriculum__selection" onClick={()=> setShowExperience(false)}>Educación</button>
   <button className="Curriculum__selection" onClick={()=> setShowExperience(true)}>Experiencia</button>
</nav>
{showExperience ? <Descriptions descriptions={experience}/> : <Descriptions descriptions={education}/>}
    </section>
 );

} 
export default  Curriculum;
