import { useState, useEffect } from 'react'

import './styles.css'

interface Integrante {
    id: number;
    nome: string;
    stack: string;
    foto: string;
  }

const MemberCard: React.FC = () => {
    const [integrantes, setIntegrantes] = useState<Integrante[]>([]);

    useEffect(() => {
        fetch('integrantes.json') 
          .then(response => response.json())
          .then(data => {
            if (data && data.integrantes) {
              setIntegrantes(data.integrantes);
            }
          })
          .catch(error => {
            console.error('Erro ao buscar os integrantes:', error);
          });
      }, []);

    return (
        <div className="container">
      <h2>TIME</h2>
      <div className="wrapper">
        {integrantes.map(integrante => (
          <div className="card" key={integrante.id}>
            <div className='cardWrapper'>
              <div className="boxImage">
                <img className="imageMember" src={integrante.foto} alt={integrante.nome} />
              </div>
              <div className="info-member">
                <p>{integrante.nome}</p>
                <p>{integrante.stack}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default MemberCard