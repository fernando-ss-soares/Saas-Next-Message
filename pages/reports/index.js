import Menu from '../../components/Menu';

export default function Reports() {
    return (
        <>
            <Menu />

            <div className='container px-4 py-5'>
                <div className='d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm'>
                    <i className='bi bi-pie-chart me-3' width='48' height='38'></i>
                    <div className='lh-1'>
                        <h1 className='h6 mb-0 text-white lh-1'>Reports</h1>
                    </div>
                </div>
            </div>
        </>
    )
}