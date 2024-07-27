import profilePhoto from '../assets/profilePhoto.jpg';
import envelopeIcon from '../assets/envelopeIcon.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';

export default function Info() {

    return (
        <div>
            <div className="block group md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                    <img src={profilePhoto} alt="Antonio image"
                        className="w-full rounded-bl-lg rounded-br-lg mx-auto transition-all duration-500 group-hover:border-teal-200" />
                </div>
                <h4
                    className="text-xl font-semibold dark:text-gray-200 mb-2 capitalize text-center transition-all duration-500 group-hover:text-teal-600">
                    Gevaun Grant </h4>
                <span
                    className="dark:text-gray-300 text-center block transition-all duration-500 group-hover:text-gray-100">Developer</span>
            </div>
            <div className='p-4 space-y-2.5 text-center'>
                <div className='justify-center flex gap-4'>
                    <a href="" className="py-1.5 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/12 justify-center">
                        <img src={envelopeIcon} alt="" className='w-4 ' />
                        Email</a>
                    <a href="https://www.linkedin.com/in/gevaungrant/" target='new' className="py-1.5 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/12 justify-center">
                        <img src={linkedinIcon} alt="" className='w-3.5' />
                        LinkedIn</a>
                </div>
            </div>
        </div>
    )
}