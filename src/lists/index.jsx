import Posts from "../components/Posts";
import Products from "../components/Products";
import Users from "../components/Users";

export const TABS_LIST = [
  { id: 1, name: "users", title: "Users", tabPanel: <Users /> },
  { id: 2, name: "posts", title: "Posts", tabPanel: <Posts /> },
  { id: 3, name: "products", title: "Products", tabPanel: <Products /> },
];
