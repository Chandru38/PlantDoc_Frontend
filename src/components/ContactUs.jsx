import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {
    const onSubmit = async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key","1f32a6b5-6d32-416d-8494-54356e31f5a4");
        try {
            const response = await fetch("https://api.web3forms.com/submit",{
                method:"POST",
                body: formData
            });
            const data = await response.json();
            if (data.success){
                toast.success('Thanks for your submission!')
                event.target.reset();
            }else{
                toast.error(data.message);
            }    
        } catch (error) {
            toast.error(error.message);
        }
        
    }
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 sm:pt-20 pt-20 pb-5 text-text bg-(--color-hero)'>
      <Title title='Reach out to us' desc='We provides  digital solutions that improve your agricultural practice forward.'/>
      <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
            <p className='mb-2 text-sm font-medium'>Your name</p>
            <div className='flex pl-3 rounded-lg border border-green-300 '>
                <img src={assets.person_icon} alt=""/>
                <input name='name' type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required/>
            </div>
        </div>
        <div>
            <p className='mb-2 text-sm font-medium'>Email id</p>
            <div className='flex pl-3 rounded-lg border border-green-300 '>
                <img src={assets.email_icon} alt=""/>
                <input name='email' type="emial" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required/>
            </div>
        </div>
        <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Message</p>
            <textarea rows={8} name='message' placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-green-500' required/>
        </div>
        <button type='submit' className='w-max flex gap-2 text-text text-sm px-10 py-3 rounded-lg border border-amber-600  cursor-pointer hover:scale-105'>
            Submit
            {/* <img src={assets.arrow_icon} className='w-4' alt=""/> */}
        </button>
      </form>
    </div>
  )
}

export default ContactUs
