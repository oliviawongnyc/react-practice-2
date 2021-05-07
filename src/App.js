import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import AllMeetUps from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
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
