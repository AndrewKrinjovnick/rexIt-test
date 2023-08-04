import { router } from 'config/router';
import 'normalize.css';
import 'rc-slider/assets/index.css';
import { RouterProvider } from 'react-router-dom';
import 'stylesheets/global.scss';

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
