import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {

    const router = useRouter();
    
    return (
        <div className='d-flex flex-column flex-shrink-0 bg-light vh-100' style={{ width: '4.5rem', position: 'fixed' }}>
            <a href='/' className='d-block p-3 link-dark text-decoration-none text-center' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Icon-only'>
                <i className='bi bi-chat-left-dots-fill'></i>
                <span className='visually-hidden'>Icon-only</span>
            </a>
            <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
                <li className='nav-item'>
                    <Link href='/' className={`nav-link py-3 border-bottom rounded-0 ${router.pathname == '/' ? 'active' : ''}`} aria-current='page' data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Home' data-bs-original-title='Home'>
                        <i className='bi bi-house'></i>
                    </Link>
                </li>
                <li>
                    <Link href='/journey' className={`nav-link py-3 border-bottom rounded-0 ${router.pathname == '/journey' ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Dashboard' data-bs-original-title='Dashboard'>
                        <i className='bi bi-chat-dots'></i>
                    </Link>
                </li>
                <li>
                    <Link href='/documents' className={`nav-link py-3 border-bottom rounded-0 ${router.pathname == '/documents' ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Orders' data-bs-original-title='Orders'>
                        <i className='bi bi-file-earmark'></i>
                    </Link>
                </li>
                <li>
                    <Link href='/reports' className={`nav-link py-3 border-bottom rounded-0 ${router.pathname == '/reports' ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Products' data-bs-original-title='Products'>
                        <i className='bi bi-pie-chart'></i>
                    </Link>
                </li>
                <li>
                    <Link href='/settings' className={`nav-link py-3 border-bottom rounded-0 ${router.pathname == '/settings' ? 'active' : ''}`} data-bs-toggle='tooltip' data-bs-placement='right' aria-label='Customers' data-bs-original-title='Customers'>
                        <i className='bi bi-gear'></i>
                    </Link>
                </li>
            </ul>
            <div className='dropdown border-top'>
                <a href='#' className='d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
                    <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' className='rounded-circle' />
                </a>
                <ul className='dropdown-menu text-small shadow'>
                    <li><a className='dropdown-item' href='#'>New project...</a></li>
                    <li><a className='dropdown-item' href='#'>Settings</a></li>
                    <li><a className='dropdown-item' href='#'>Profile</a></li>
                    <li><hr className='dropdown-divider' /></li>
                    <li><a className='dropdown-item' href='#'>Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}