import MainPage from "../pages/mainPage";
import DetailNews from "../pages/detailNews";
import NewsPage from "../pages/newsPage";
import EventsPage from "../pages/eventsPage";
import DetailEvents from "../pages/detailEvents";
import { UniverPage } from '../pages/univerPage/univerPage';
import { GrantPage } from '../pages/grantsPage/grantPage';
import { CollegePage } from '../pages/collegePage/collegePage';
import DetailGrant from "../pages/grantsPage/detailGrant";
import SearchPage from "../components/SearchPage";
import DetailTraining from "../pages/traningsPage/detailTraining";
import {TrainingPage} from "../pages/traningsPage/traningPage";

export const publicRoutes = [
  { path: '/', component: MainPage },
  { path: '/news', component: NewsPage },
  { path: '/news/:id', component: DetailNews },
  { path: '/events', component: EventsPage },
  { path: '/events/:id', component: DetailEvents },
  { path: '/university', component: UniverPage },
  { path: '/grants', component: GrantPage },
  { path: '/college', component: CollegePage },
  { path: '/trainings', component: TrainingPage },
  { path: '/trainings/:id', component: DetailTraining },
  { path: '/grants/:id', component: DetailGrant},
  { path: '/search', component: SearchPage},
];
