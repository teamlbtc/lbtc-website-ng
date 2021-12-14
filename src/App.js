import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Covid19 from "./pages/Covid19/Covid19";
import Home from "./pages/Home/Home";
import Supporters from "./pages/supporters/supporters";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import Blogs from "./pages/Blogs/Blogs";
import Newsletter from "./pages/Newsletter/Newsletter";
import Gallery from "./pages/Gallery/Gallery";
import BlogComponent from "./components/BlogComponent/BlogComponent";
import Gallery2 from "./pages/Gallery/Gallery2";
import Gallery3 from "./pages/Gallery/Gallery3";
import Gallery4 from "./pages/Gallery/Gallery4";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Home></Home>}></Route>
          <Route exact path="/about" render={() => <About></About>}></Route>
          <Route
            exact
            path="/supporters"
            render={() => <Supporters></Supporters>}
          ></Route>
          <Route
            exact
            path="/covid19"
            render={() => <Covid19></Covid19>}
          ></Route>
          <Route
            exact
            path="/contact"
            render={() => <ContactUs></ContactUs>}
          ></Route>
          <Route
            exact
            path="/signupform"
            render={() => <SignUpForm></SignUpForm>}
          ></Route>
          <Route exact path="/blog" render={() => <Blogs></Blogs>}></Route>
          <Route path="/blog/:id" render={() => <BlogComponent />}></Route>
          <Route
            exact
            path="/newsletters"
            render={() => <Newsletter></Newsletter>}
          ></Route>
          <Route
            exact
            path="/gallery-1"
            render={() => <Gallery2></Gallery2>}
          ></Route>
          <Route
            exact
            path="/gallery-2"
            render={() => <Gallery3></Gallery3>}
          ></Route>
          <Route
            exact
            path="/gallery"
            render={() => <Gallery></Gallery>}
          ></Route>
          <Route
            exact
            path="/gallery-3"
            render={() => <Gallery4></Gallery4>}
          ></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
