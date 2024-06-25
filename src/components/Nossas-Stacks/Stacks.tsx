import './NossaStack.css'; 
import { FullStackLogo, InfraLogo, QALogo, UILogo } from './svg';

const NossaStack = () => {
  return (
    <section className="secao-stack">
      <div className="container">
        <h2 className="section-title">Nossas Especialidades</h2>
        <div className="stacks-grid">
          <div className="stack-card">
            <div className='icon-circle' style={{backgroundColor: '#9121EA'}}>
                <UILogo /> 
            </div>
            <p>UX/UI</p>
          </div>
          <div className="stack-card">
          <div className='icon-circle' style={{backgroundColor: "#73CBFD"}}>
                <FullStackLogo/> 
            </div>
            <p>FullStack</p>
          </div>
          <div className="stack-card">
          <div className='icon-circle' style={{backgroundColor: "#78FF62"}}>
                <QALogo/> 
            </div>
            <p>QA</p>
          </div>
          <div className="stack-card">
          <div className='icon-circle' style={{backgroundColor: "#D40E0E"}}>
                <InfraLogo /> 
            </div>
            <p>Infraestrutura</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossaStack