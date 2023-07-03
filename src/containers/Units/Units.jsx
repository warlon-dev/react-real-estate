import { useEffect, useState } from 'react'

import './units.css'
import br1_plan from '../../assets/br1-plan.webp'
import br1_1 from '../../assets/br1-1.webp'
import br1_2 from '../../assets/br1-2.webp'
import br1_3 from '../../assets/br1-3.webp'
import br1_4 from '../../assets/br1-4.webp'
import br1_5 from '../../assets/br1-5.webp'
import br1_6 from '../../assets/br1-6.webp'
import br2_plan from '../../assets/br2-plan.webp'
import br2_1 from '../../assets/br2-1.webp'
import br2_2 from '../../assets/br2-2.webp'
import br2_3 from '../../assets/br2-3.webp'
import br2_4 from '../../assets/br2-4.webp'
import br2_5 from '../../assets/br2-5.webp'
import br2_6 from '../../assets/br2-6.webp'

const Units = ({id, setActiveDot}) => {
  const [activeUnit, setActiveUnit] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      const isVisible = (rect.top+100) >= 0 && (rect.bottom-200) <= window.innerHeight;
      console.log(rect )

      if (isVisible) {
        setActiveDot(id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id, setActiveDot]);
  return (
    <div id={id} className='olp__units-bg'>
      <div className='olp__units-overlay'>
        <div className='olp__units section__padding'>
          <h1>Unit and Floor Plans</h1>
          <div className='divider__light' /> 
          <div className='olp__units-item'>
            <button className={activeUnit===1?'olp__units-active':''} type='button' onClick={() => setActiveUnit(1)}>1 - Bedroom</button>
            <button className={activeUnit===2?'olp__units-active':''} type='button'onClick={() => setActiveUnit(2)}>2 - Bedroom</button>
          </div>
          {
            activeUnit===1
            ? <div className='olp__units-details'>
                <div className='olp__units-plan'>
                  <img src={br1_plan} alt="" />
                  <div className='olp__units-inclusion'>
                    <h4>UNIT INCLUSION</h4>
                    <ul>
                      <li>Range Hood and Cooktop</li>
                      <li>Built-in Kitchen Cabinet with countertop and sink.</li>
                      <li>Water Heater</li>
                      <li>Water Closet and Lavatory</li>
                      <li>Provision for washing machine</li>
                      <li>Provision for airconditioning unit</li>
                      <li>Provision for internet, telephone and cable connection</li>
                      <li>Individual digital electric and water meter</li>
                      <li>Standby power generator for 1 lighting fixture and 1 power outlet</li>
                      <li>Fire Sprinkler</li>
                      <li>Window Blinds</li>
                    </ul>
                  </div>
                </div>
                <div className='olp__unit olp__units-1'><img src={br1_1} alt="br1_1" /></div>
                <div className='olp__unit olp__units-2'><img src={br1_2} alt="br1_2" /></div>
                <div className='olp__unit olp__units-3'><img src={br1_3} alt="br1_3" /></div>
                <div className='olp__unit olp__units-4'><img src={br1_4} alt="br1_4" /></div>
                <div className='olp__unit olp__units-5'><img src={br1_5} alt="br1_5" /></div>
                <div className='olp__unit olp__units-6'><img src={br1_6} alt="br1_6" /></div>
              </div>
            :
              <div className='olp__units-details'>
                <div className='olp__units-plan2'>
                  <img src={br2_plan} alt="br2 plan" />
                  <div className='olp__units-inclusion'>
                    <h4>UNIT INCLUSION</h4>
                    <ul>
                      <li>Range Hood and Cooktop</li>
                      <li>Built-in Kitchen Cabinet with countertop and sink.</li>
                      <li>Water Heater</li>
                      <li>Water Closet and Lavatory</li>
                      <li>Provision for washing machine</li>
                      <li>Provision for airconditioning unit</li>
                      <li>Provision for internet, telephone and cable connection</li>
                      <li>Individual digital electric and water meter</li>
                      <li>Standby power generator for 1 lighting fixture and 1 power outlet</li>
                      <li>Fire Sprinkler</li>
                      <li>Window Blinds</li>
                    </ul>
                  </div>
                </div>
                <div className='olp__unit olp__units-1'><img src={br2_1} alt="br2_1" /></div>
                <div className='olp__unit olp__units-2'><img src={br2_2} alt="br2_2" /></div>
                <div className='olp__unit olp__units-3'><img src={br2_3} alt="br2_3" /></div>
                <div className='olp__unit olp__units-4'><img src={br2_4} alt="br2_4" /></div>
                <div className='olp__unit olp__units-5'><img src={br2_5} alt="br2_5" /></div>
                <div className='olp__unit olp__units-6'><img src={br2_6} alt="br2_6" /></div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Units