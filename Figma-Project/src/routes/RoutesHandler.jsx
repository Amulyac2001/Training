import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from '../common/pages/Home'
import Contact from '../common/pages/Contact'
import Dashboard from '../common/pages/Dashboard'
import Aboutus from '../common/pages/Aboutus'
import Promotion from '../common/pages/Promotion'
import CompanyPage from '../common/pages/CompanyPage'
import Rewards from '../common/pages/Rewards'
import SettingPage from "../common/pages/SettingPage";

function RoutesHandler(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<Aboutus />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Rewards' element={<Rewards />} />
            <Route path='/Promotion' element={<Promotion />} />
            <Route path='/CompanyPage' element={<CompanyPage />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Setting' element={<SettingPage />} />
        </Routes>
    )
}

export default RoutesHandler