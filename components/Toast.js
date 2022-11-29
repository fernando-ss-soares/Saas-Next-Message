import toast, { Toaster } from 'react-hot-toast';

export default function Toast({ nameButton, message }) {

    const notify = (event) => {
        event.preventDefault();
        toast.success(message);
    }

    return (
        <>

            <button className='btn btn-primary' onClick={notify}>{nameButton}</button>
            <Toaster
                position='bottom-right'
                reverseOrder={false}
            />

        </>
    )
}