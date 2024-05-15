import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import EditPost from "./EditPost";
import CheckPost from "./CheckPost";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route
          path="/"
          element={<Layout/>} >      
          <Route index element={<Home />} />

          <Route path="post">
            <Route index element={<NewPost />} />

            <Route path="edit/:id" element={<EditPost />} />

            <Route path=":id" element={<PostPage />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />

        </Route>
      
      </Routes>
      </DataProvider>
  );
}

export default App;
{
  /* <Route/>: This syntax usually represents a self-closing tag in JSX (JavaScript XML) syntax, commonly used in React applications. It defines a route without any child components. It's often used for simple routes that don't have nested content. 

<Route> and </Route>: These tags denote the beginning and end of a route definition, respectively. They are used to encapsulate the content (usually components) that should be rendered when the specified route matches the current URL. This allows for more complex routing scenarios where you might have nested components or additional configuration.

pushing git
 git init
 git add .
 git commit
 git config --global user.email "unnidollar007 @gmail.com"
   git config --global user.name "naveen" 
 git commit -m "intital commit"  
 git push -u origin master
*/
}
