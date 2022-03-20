import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { JournalPage } from "../components/journal/JournalPage"
import { AuthRouter } from "./AuthRouter"

export const AppRouter = () => {
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
