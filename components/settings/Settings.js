import Menu from '../../components/util/Menu';
import Footer from './Footer';
import SettingsMenu from './Menu';
import Title from './Title';

export default function Settings() {
    return (
        <>
            <Menu />

            <div className='container px-4 py-5'>
                <Title title="Settings" /> 
            </div>

            <div className='container px-4 py-5'>

                <div className='my-3 p-3 bg-body rounded shadow-sm'>
                    <SettingsMenu title="All settings" />

                    <Footer title="Next Message" />
                </div>

            </div>
        </>
    )
}