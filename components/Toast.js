import toast from 'react-hot-toast';

const notifySucess = (messageToast) => toast.success(`${messageToast}`,{
    duration: 1000,
    position: 'top-right',
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    }
});
    
const notifyError = (messageToast) => toast.error(`${messageToast}`, {
    duration: 1000,
    position: 'top-right',
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    }
});

export const Alert = {
    notifySucess,
    notifyError
};