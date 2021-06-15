import React from 'react';
import './css/App.css';
import './css/null.css';
import Header from './components/Header/Header';
import HeaderImage from './components/HeaderImage/HeaderImage';
import { BrowserRouter, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Users from './components/Users/Users';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<div className='wrapper'>
					<div className='content'>
						<HeaderImage />
						<div className='content__content _container'>
							<Route path='/profile'
								render={() => <ProfileContainer />} />
							<Route path='/dialogs'
								render={() => <DialogsContainer />} />
							<Route path='/users'
								render={() => <UsersContainer />} />
							<NavbarContainer />
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
