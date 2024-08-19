import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import ScenarioPage from '@/pages/ScenarioPage';
import ScenarioTitlePage from '@/pages/ScenarioTitlePage';
import ReportPage from './pages/ReportPage';
import RankingPage from './pages/RankingPage';
import ProfilePage from '@/pages/ProfilePage';
import SenarioDetailPage from '@/pages/SenarioDetailPage';
import TopicDetailPage from '@/pages/TopicDetailPage';
import SelectTitleDetail from '@/pages/SelectTitleDetail';
import OtherPersonPage from '@/pages/OtherPersonPage';
import SignupPage from './pages/SignupPage';
import MyPostPage from '@/pages/MyPostPage';
import MyLikedPostPage from '@/pages/MyLikedPostPage';
import LikedTopicPage from '@pages/LikedTopicPage';

const Router = () => {
	const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
		const accessToken = localStorage.getItem('accessToken');

		return accessToken ? element : <Navigate to="/login" replace />;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout type={1} />}>
					{/* 나였다면 */}
					<Route path="/scenario" element={<ScenarioPage />} />
					{/* 로그인 */}
					<Route path="/login" element={<LoginPage />} />
				</Route>
				<Route element={<Layout type={2} />}>
					{/* 마이페이지 */}
					<Route
						path="/mypage"
						element={<ProtectedRoute element={<ProfilePage />} />}
					/>
					{/* 내가 쓴 글 목록 */}
					<Route
						path="/mypage/myposts"
						element={<ProtectedRoute element={<MyPostPage />} />}
					/>
					{/* 좋아요 누른 글 목록 */}
					<Route
						path="/mypage/mylikedposts"
						element={<ProtectedRoute element={<MyLikedPostPage />} />}
					/>
					{/* 좋아요 누른 주제 목록 */}
					<Route
						path="/mypage/likedtopics"
						element={<ProtectedRoute element={<LikedTopicPage />} />}
					/>
					{/* 게시글 작성 */}
					<Route path="/scenario/write/:id" element={<SenarioDetailPage />} />
					{/* 주제 목록 */}
					<Route path="/scenario/topic" element={<ScenarioTitlePage />} />
					{/* 주제에 대한 게시글 목록 */}
					<Route path="/scenario/topic/:id" element={<TopicDetailPage />} />
					{/* 게시글 열람 */}
					<Route path="/scenario/:id" element={<SelectTitleDetail />} />
					{/* 사용자 프로필 */}
					<Route path="/profile/:id" element={<OtherPersonPage />} />
					{/* N보고서 */}
					<Route path="/report" element={<ReportPage />} />
					{/* N력 랭킹 */}
					<Route path="/ranking" element={<RankingPage />} />
					{/* 회원가입 */}
					<Route path="/signup" element={<SignupPage />} />
				</Route>
				<Route element={<Layout type={3} />}>
					{/* 메인페이지 */}
					<Route path="/" element={<MainPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
