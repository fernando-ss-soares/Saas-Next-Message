import { useState } from 'react';

import Menu from '../../components/Menu';

export default function Documents() {

    const contentSearch = {
        typeSearch: 'All',
        value: ''
    }

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
                <div className='d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm'>
                    <i className='bi bi-file-earmark me-3' width='48' height='38'></i>
                    <div className='lh-1'>
                        <h1 className='h6 mb-0 text-white lh-1'>Documents</h1>
                    </div>
                </div>
            </div>

            <section className='py-5 text-center container'>
                <div className='row py-lg-5'>
                    <div className='col-lg-6 col-md-8 mx-auto'>
                        <h1 className='fw-light'>Single Customer View</h1>
                        <p className='lead text-muted'>Search documents, interactions of each customer.</p>
                        <div>
                            <form onSubmit={onSubmit}>
                                <div className='input-group mb-3'>
                                    <select className='form-select' id='inputGroupSelect02' name='typeSearch' onChange={onChange}>
                                        <option value='All' defaultValue>All</option>
                                        <option value='People'>People</option>
                                        <option value='Documents'>Documents</option>
                                        <option value='ID'>ID</option>
                                        <option value='Email'>Email</option>
                                    </select>
                                    <input type='text' className='input-group-text form-control text-start bg-light' name='value' onChange={onChange} htmlFor='inputGroupSelect02' placeholder={`Search ${Search.typeSearch}`}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}