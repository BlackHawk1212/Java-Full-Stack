import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

function ToastifyDemo() {
    const notify = () => {
        // Uncomment one at a time and try the toast message styles
        // toast('Sucsess');
        // toast.success('Success');
        // toast.error('Error');
        toast.success('Registered Successfully', { position: "top-center" });
    }
    return (
        <div>
            <button onClick={notify}>Click</button>
            <ToastContainer />
        </div>
    )
}

export default ToastifyDemo