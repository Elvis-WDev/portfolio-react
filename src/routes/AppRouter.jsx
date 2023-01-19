// Dependencias
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Skills, Portfolio, Contact, MenuButton } from '../components';
import { PortfolioPage } from '../pages/PortfolioPage';


export const AppRouter = () => {

    const { loading } = useSelector(state => state.portfolio);

    return (
        <>
            {
                loading &&
                <div className='spinner-content'>
                    <div className="spinner-box">
                        <div className="configure-border-1">
                            <div className="configure-core"></div>
                        </div>
                        <div className="configure-border-2">
                            <div className="configure-core"></div>
                        </div>
                    </div>
                </div>
            }

            <MenuButton />
            <Routes>
                <Route path="/all" element={<PortfolioPage />} />
                <Route path="/*" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </>
    )
}
