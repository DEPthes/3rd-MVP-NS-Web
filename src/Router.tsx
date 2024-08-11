import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import ScenarioPage from '@/pages/ScenarioPage';
import ScenarioTitlePage from '@/pages/ScenarioTitlePage';
import ReportPage from './pages/ReportPage';
import RankingPage from './pages/RankingPage';
import ProfilePage from '@/pages/ProfilePage';
import ExPage from './pages/ExPage';
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
          <Route path="/ex" element={<ExPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/scenario" element={<ScenarioPage />} />
        </Route>
        <Route element={<Layout type={2} />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<ProfilePage />} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/senario-detail" element={<SenarioDetailPage />} />\
          <Route path="/senario-detail/:id" element={<SenarioDetailPage />} />\
          <Route path="/scenario-title" element={<ScenarioTitlePage />} />
          <Route path="/topic/:id" element={<TopicDetailPage />} />
          <Route
            path="/profile/myposts"
            element={<ProtectedRoute element={<MyPostPage />} />}
          />
          <Route
            path="/profile/mylikedposts"
            element={<ProtectedRoute element={<MyLikedPostPage />} />}
          />
          <Route
            path="/profile/likedtopics"
            element={<ProtectedRoute element={<LikedTopicPage />} />}
          />
          <Route
            path="/select-title-detail/:id"
            element={<SelectTitleDetail />}
          />
          <Route
            path="/other-person-page/:nickname"
            element={<OtherPersonPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
