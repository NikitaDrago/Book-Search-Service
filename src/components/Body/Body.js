import { Route, Switch } from "react-router-dom";
import BookInfo from "../BooksList/BookInfo";

const Body = ({popout}) => <Switch>
  <Route exact path="/">{popout}</Route>
  <Route exact path="/:id" component={BookInfo}/>
</Switch>;


export default Body;