import { Route, Switch } from 'react-router-dom';

import AllMeetUps from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/' component={AllMeetUps} />
          <Route path='/new-meetup' component={NewMeetup} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
