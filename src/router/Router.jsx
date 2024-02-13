import { Route, Routes } from 'react-router-dom';
import Section from '../components/section/Section';
import Contact from '../components/contact/Contact';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
            <Route path='/' element={<Layout />}>

                <Route index element={<h1>HOME</h1>} />

                {/* Esto deberian ser páginas dentro de Pages */}
                <Route path='/section' element={<Section />} />
                <Route path='/contact' element={<Contact />} />

            </Route>

		</Routes>
	);
};

export default Router;
