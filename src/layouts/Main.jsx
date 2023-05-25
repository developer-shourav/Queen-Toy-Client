import React from 'react';
import Header from '../components/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import SpinnerLoader from '../components/SpinnerLoader/SpinnerLoader';
const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
           <Header> </Header>
          {/* ------Loading Spinner------ */}
           {navigation.state === 'loading' && <SpinnerLoader> </SpinnerLoader>}
  
            <Outlet> </Outlet>
            <Footer> </Footer>
        </div>
    );
};

export default Main;