import { Outlet } from 'react-router';
import Logo from '../Components/Logo/Logo';
import authImage from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f7fbff_0%,#eef4ff_48%,#fff6ef_100%)] text-slate-900'>
            <div className='mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8'>
                <div className='mb-8'>
                    <Logo></Logo>
                </div>
                <div className='grid flex-1 items-center gap-10 lg:grid-cols-2'>
                    <div className='flex justify-center lg:justify-start'>
                        <Outlet></Outlet>
                    </div>
                    <div className='relative hidden overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur md:block'>
                        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(202,190,102,0.2),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(3,55,61,0.18),transparent_42%)]'></div>
                        <img className='relative h-full min-h-[640px] w-full object-cover object-center' src={authImage} alt="Auth" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;