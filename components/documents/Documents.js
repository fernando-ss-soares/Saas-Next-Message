import { useState } from 'react';
import Title from './Title';
import Menu from '../../components/Menu';
import Form from './Form';
import Hero from './Hero';

export default function componentDocuments() {
    
    const contentSearch = {
        typeSearch: 'All',
        value: ''
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ Search, setSearch ] = useState(contentSearch);

    function onChange(event) {
        const {name, value} = event.target;

        setSearch({...Search,[name]:value});
    }
    
    function onSubmit(event) {
        event.preventDefault();
    }
    
    return (
        <>
            <Menu />

            <div className='container px-4 py-5'>
                <Title title="Documents" /> 
            </div>

            <section className='py-5 text-center container'>
                <div className='row py-lg-5'>
                    <div className='col-lg-6 col-md-8 mx-auto'>
                        <Hero title="Single Customer View" description="Search documents, interactions of each customer." />
                        <Form onChange={onChange} onSubmit={onSubmit} placeholder={contentSearch.typeSearch} />
                    </div>
                </div>
            </section>
        </>
    )
}