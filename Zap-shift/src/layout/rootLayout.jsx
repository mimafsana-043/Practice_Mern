import { Outlet } from 'react-router';
import Footer from '../../src/Pages/Shared/Footer/Footer';
import Header from '../../src/Pages/Shared/Header/Header';



const rootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default rootLayout;