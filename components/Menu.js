import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './Menu.module.css';

export default function Menu({ token }) {

    const router = useRouter();

    useEffect(() => {
        (() => {
            const token = sessionStorage.getItem('Next_User');
            token === null ? sessionStorage.clear() : false
            token === null ? router.push('/') : false
        })()
    }, [router])

    function clearStorage() {
        sessionStorage.clear();
    }

    return (
        <>

            <div className='d-flex flex-row flex-shrink-0 bg-light vw-100 position-fixed bottom-0 d-sm-none'>
                <ul className='nav nav-pills nav-flush flex-row justify-content-between mb-auto text-center w-100'>

                    <Link href='/home' passHref className='d-block p-3 link-dark text-decoration-none text-center' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Icon-only'>
                        <i className='bi bi-chat-left-dots-fill'></i>
                        <span className='visually-hidden'>Icon-only</span>
                    </Link>

                    <li className='nav-item'>
                        <Link href='/home' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('home') ? 'active' : ''}`} aria-current='page' data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Home' data-bs-original-title='Home'>
                            <i className='bi bi-house'></i>
                        </Link>
                    </li>

                    <li>
                        <Link href='/journey' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('journey') ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Dashboard' data-bs-original-title='Dashboard'>
                            <i className='bi bi-chat-dots'></i>
                        </Link>
                    </li>

                    <li>
                        <Link href='/documents' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('documents') ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Orders' data-bs-original-title='Orders'>
                            <i className='bi bi-file-earmark'></i>
                        </Link>
                    </li>

                    <li>
                        <Link href='/reports' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('reports') ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Products' data-bs-original-title='Products'>
                            <i className='bi bi-pie-chart'></i>
                        </Link>
                    </li>

                    <li>
                        <Link href='/settings' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('settings') ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Customers' data-bs-original-title='Customers'>
                            <i className='bi bi-gear'></i>
                        </Link>
                    </li>

                    <Link onClick={clearStorage} href='/' passHref className='d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none'>
                        <i className='bi bi-box-arrow-left'></i>
                    </Link>

                </ul>
            </div>

            <div id={styles.mobile} className=' d-flex flex-column flex-shrink-0 bg-light vh-100' style={{ width: '4.5rem', position: 'absolute' }}>
                <Link href='/home' passHref className='d-block p-3 link-dark text-decoration-none text-center' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Icon-only'>
                    <i className='bi bi-chat-left-dots-fill'></i>
                    <span className='visually-hidden'>Icon-only</span>
                </Link>
                <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
                    <li className='nav-item'>
                        <Link href='/home' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('home') ? 'active' : ''}`} aria-current='page' data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Home' data-bs-original-title='Home'>
                            <i className='bi bi-house'></i>
                        </Link>
                    </li>
                    <li>
                        <Link href='/journey' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('journey') ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Dashboard' data-bs-original-title='Dashboard'>
                            <i className='bi bi-chat-dots'></i>
                        </Link>
                    </li>
                    <li>
                        <Link href='/documents' className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('documents') ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Orders' data-bs-original-title='Orders'>
                            <i className='bi bi-file-earmark'></i>
                        </Link>
                    </li>
                    <li>
                        <Link href='/reports' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('reports') ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Products' data-bs-original-title='Products'>
                            <i className='bi bi-pie-chart'></i>
                        </Link>
                    </li>
                    <li>
                        <Link href='/settings' passHref className={`nav-link py-3 border-bottom rounded-0 ${router.pathname.includes('settings') ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Customers' data-bs-original-title='Customers'>
                            <i className='bi bi-gear'></i>
                        </Link>
                    </li>
                </ul>
                <div className='border-top'>
                    <Link onClick={clearStorage} href='/' passHref className='d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none'>
                        <i className='bi bi-box-arrow-left'></i>
                    </Link>
                </div>
            </div>

        </>
    )

}