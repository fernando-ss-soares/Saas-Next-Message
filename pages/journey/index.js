import { useState } from 'react';
import Link from 'next/link';
import Menu from '../../components/Menu';

export default function Journey() {

    const [JourneySearch, setJourneySearch] = useState('');

    function onSubmit(event) {
        event.preventDefault();
    }

    let journeyList = [
        {
            id: 1,
            name: 'Cobrança Cartão de Crédito E-mail',
            status: 'Ativo'
        },
        {
            id: 2,
            name: 'Cobrança Cartão de Crédito SMS',
            status: 'Testando'
        },
        {
            id: 3,
            name: 'Boas Vindas E-mail',
            status: 'Configurando'
        },
        {
            id: 4,
            name: 'Boas Vindas SMS',
            status: 'Ativo'
        }
    ].filter((e) => e.name.includes(JourneySearch))

    return (
        <>
            <Menu />

            <div className='container px-4 py-5'>

                <div className='d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm'>
                    <i className='bi bi-chat-dots me-3'></i>
                    <div className='lh-1'>
                        <h1 className='h6 mb-0 text-white lh-1'>Journey</h1>
                    </div>
                </div>
                <Link href='journey/create'>
                    <button type='button' className='btn btn-primary'>
                        <i className='bi bi-plus-circle me-3'></i> Journey
                    </button>
                </Link>

            </div>

            <div className='container px-4 py-1'>

                <form onSubmit={onSubmit}>
                    <div className='form-floating mb-3'>
                        <input type='text' className='form-control' id='floatingInput' onChange={(event) => setJourneySearch(event.target.value)} />
                        <label htmlFor='floatingInput'>Journey Search</label>
                    </div>
                </form>

            </div>

            <div className='container px-4 py-2'>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {journeyList.map((data) => (
                            <tr key={data.id}>
                                <th scope='row'>{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.status}</td>
                                <td>
                                    <button type='button' className='btn btn-primary'>Settings</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}