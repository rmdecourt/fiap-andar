import React from 'react';
import Input from '../ui/Input';

class Showcase extends React.Component {

    render() {
        return (
            <main className="container">
               <Input icon='search' placeholder="Busque pela localização desejada." category="text" />
                <div className="card" style={{width: '18rem'}}>
                    <img src="https://i.imgur.com/q1Mj5mf.jpg" class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title mb-0">Rua Tabapuã</h5>
                        <p className="card-text mt-0">Itaim Bibi - São Paulo, SP</p>
                        <div className='d-flex flex-row mb-3 align-items-center'>
                            <i className='fa fa-building-o mr-1'></i>
                            <p className="mb-0">96 m <sup>2</sup></p>
                            <i className='fa fa-bed mx-2'></i>
                            <p className="mb-0">2 quartos</p>
                        </div>
                        <div className='d-flex flex-row justify-content-between mb-3 align-items-center'>
                            <p className='mb-0'>R$ 11.800</p>
                            <a href="#" className="btn btn-primary">
                                <i className="fa fa-info-circle mr-2"></i>
                                Detalhes
                            </a>
                        </div>
                        
                    </div>
                </div>
            </main>
            
        );
    }
}

export default Showcase;