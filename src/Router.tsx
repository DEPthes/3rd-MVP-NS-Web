import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import ScenarioPage from '@/pages/ScenarioPage';
import ReportPage from './pages/ReportPage';
import RankingPage from './pages/RankingPage';
import ProfilePage from '@/pages/ProfilePage';
import ExPage from './pages/ExPage';
import SenarioDetailPage from '@/pages/SenarioDetailPage'; // 새로운 페이지 import

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout type={1} />}>
					<Route path="/ex" element={<ExPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/scenario" element={<ScenarioPage />} />
				</Route>
				<Route element={<Layout type={2} />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/report" element={<ReportPage />} />
					<Route path="/ranking" element={<RankingPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/senario-detail" element={<SenarioDetailPage />} /> {/* 새로운 페이지 경로 */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

