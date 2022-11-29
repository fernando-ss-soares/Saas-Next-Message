import Link from 'next/link';
import Menu from '../../components/Menu';

export default function Settings() {
    return (
        <>
            <Menu />

            <div className='container px-4 py-5'>
                <div className='d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm'>
                    <i className='bi bi-gear me-3' width='48' height='38'></i>
                    <div className='lh-1'>
                        <h1 className='h6 mb-0 text-white lh-1'>Settings</h1>
                    </div>
                </div>
            </div>

            <div className='container px-4 py-5'>

                <div className='my-3 p-3 bg-body rounded shadow-sm'>
                    <h6 className='border-bottom pb-2 mb-0'>All settings</h6>
                    
                    <Link href='/settings/contact' className='d-flex text-muted pt-3 text-decoration-none'>
                        
                        <button type='button' className='btn btn-primary me-2'>
                            <i className='bi bi-filetype-csv' width='16' height='16' fill='currentColor'></i>
                        </button>
                        
                        <div className='pb-3 mb-0 small lh-sm border-bottom w-100'>
                            <div className='d-flex justify-content-between'>
                                <strong className='text-gray-dark'>Contact List</strong>
                            </div>
                        </div>
                    </Link>
                    
                    <Link href='/settings/integration' className='d-flex text-muted pt-3 text-decoration-none'>
                        
                        <button type='button' className='btn btn-primary me-2'>
                            <i className='bi bi-globe2' width='16' height='16' fill='currentColor'></i>
                        </button>

                        <div className='pb-3 mb-0 small lh-sm border-bottom w-100'>
                            <div className='d-flex justify-content-between'>
                                <strong className='text-gray-dark'>Integration</strong>
                            </div>
                        </div>
                    </Link>

                    <Link href='/settings/profiles' className='d-flex text-muted pt-3 text-decoration-none'>

                        <button type='button' className='btn btn-primary me-2'>
                            <i className='bi bi-people-fill' width='16' height='16' fill='currentColor'></i>
                        </button>

                        <div className='pb-3 mb-0 small lh-sm border-bottom w-100'>
                            <div className='d-flex justify-content-between'>
                                <strong className='text-gray-dark'>Access Profiles</strong>
                            </div>
                        </div>
                    </Link>

                    <small className='d-block text-end mt-3'>
                        <p className='fw-ligth'>Next Message</p>
                    </small>
                </div>

            </div>
        </>
    )
}