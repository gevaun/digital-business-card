import githubIcon from '../assets/githubIcon.svg';
import twitterIcon from '../assets/twitterIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';

export default function Footer() {
    return (
        <footer className="flex justify-center gap-6 pb-4 pt-4 rounded-tl-lg rounded-tr-lg bg-zinc-100 dark:bg-slate-700  bg-opacity-25 ">
            <a href=""><img src={githubIcon} alt="" className='w-4 opacity-70 hover:opacity-100 transition-opacity duration-300'/></a>
            <a href=""><img src={twitterIcon} alt="" className='w-4 opacity-70 hover:opacity-100 transition-opacity duration-300'/></a>
            <a href=""><img src={instagramIcon} alt="" className='w-4 opacity-70 hover:opacity-100 transition-opacity duration-300'/></a>
        </footer>
    )
}