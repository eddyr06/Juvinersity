import "./App.css";
import NavBar from "./components/NavBars/NavBar";
import Footer from "./components/Footer/Footer";
import Topics from "./pages/Topics.js";
import FAQs from "./pages/FAQs";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import CreateArticle from "./components/Articles/CreateArticle/CreateArticle";
import CreateFaq from "./components/Faq/CreateFaq/CreateFaq";
import SingleArticle from "./components/Articles/SingleArticle/SingleArticle";
import SingleFaq from "./components/Faq/SingleFaq/SingleFaq";
import CreateUser from "./components/User/CreateUser";
import User from "./components/User/User";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Topics" component={Topics} />
        <Route exact path="/FAQs" component={FAQs} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/CreateArticle" component={CreateArticle} />
        <Route exact path="/CreateArticle/:id" component={CreateArticle} />
        <Route path="/SingleArticle/:id" component={SingleArticle} />
        <Route exact path="/CreateFaq" component={CreateFaq} />
        <Route exact path="/CreateFaq/:id" component={CreateFaq} />
        <Route path="/SingleFaq/:id" component={SingleFaq} />
        <Route path="/User/:id" component={User} />
        <Route path="/CreateUser/:id" component={CreateUser} />
        {/* <Route exact path="/downloads" component={Downloads} /> */}
        {/* <Route exact path="/relnotes" component={RelNotes} /> */}
        {/* <Route exact path="/knowbase" component={Knowbase} /> */}
        <Route Component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
