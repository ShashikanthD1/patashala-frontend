import SchoolList from "../pages/schoolList/SchoolList";
import Login from "../pages/login/LoginForm"
import SignUpForm from "../pages/signup/SignUpForm";
import AddSchoolForm from "../pages/addSchool/AddSchoolFom"
import Home from "../pages/home/Home"
export const routes = [
    { path: "/", component: Home, exact: true },
    { path: "/schoolList", component: SchoolList },
    { path: "/login", component: Login },
    { path: "/signup", component:SignUpForm  },
    { path: "/addschool", component:AddSchoolForm  },
  ];
  