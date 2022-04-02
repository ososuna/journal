import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebaseConfig';

import { JournalPage } from '../components/journal/JournalPage';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';

export const AppRouter = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {

    firebase.auth().onAuthStateChanged( (user) => {
      
      if ( user?.uid ) {
        dispatch( login(user.uid, user.displayName) );
      }

    });
  
  }, [ dispatch ]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={ <AuthRouter /> } />
        <Route path="/" element={ <JournalPage /> } />
        <Route path="/*" element={ <Navigate to="/" /> }/>
      </Routes>
    </BrowserRouter>
  )
}
