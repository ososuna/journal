import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebaseConfig';

import { JournalPage } from '../components/journal/JournalPage';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  
  const dispatch = useDispatch();
  
  const [checking, setChecking] = useState( true );

  useEffect(() => {

    firebase.auth().onAuthStateChanged( (user) => {
      
      if ( user?.uid ) {
        dispatch( login(user.uid, user.displayName) );
      }

      setChecking( false );

    });
  
  }, [ dispatch, setChecking ]);
  
  if ( checking ) {
    return (
      <h1>please wait...</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth/*" element={
          <PublicRoute>
            <AuthRouter /> 
          </PublicRoute>
          } 
        />
        <Route path="/" element={
          <PrivateRoute>
            <JournalPage />
          </PrivateRoute>
          } 
        />
        <Route path="/*" element={ <Navigate to="/" /> }/>
      </Routes>
    </BrowserRouter>
  )
}
