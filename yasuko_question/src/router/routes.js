import Question from "@/components/Question/Index.vue";
import Home from "@/components/Home/Index.vue";
import Board from "@/components/Board/Index.vue";
import MyPage from "@/components/MyPage/Index.vue";
import AllOfQuestions from "@/components/AllOfQuestions/Index.vue";


export default [
  {
		path: '/',
		component: Home
  },
  {
		path: '/question',
		component: Question
	},
	{
		path: '/board',
		component: Board
	},
	{
		path: '/myPage',
		component: MyPage
	},
	{
		path: '/allOfQuestions',
		component: AllOfQuestions
	},
]