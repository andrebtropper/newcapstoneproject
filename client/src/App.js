import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import WelcomePage from './pages/Welcomepage';
import CreateBrofile from './pages/CreateBrofile';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SelectTags from './pages/SelectTags';
import Brofile from './pages/Brofile';
import Newsfeed from './pages/Newsfeed';



function App() {

  const [open, setOpen] = useState(false);

  return (
    <div>

      <Navigation open={open} setOpen={setOpen} />
      <main>
        <Switch>
          <Route exact path='/'>
            <Header headline='Welcome to YOBro!' open={open} setOpen={setOpen} />
            <WelcomePage open={open} />
          </Route>

          <Route path='/brofile'>
            <Header headline='YOBrofile!' open={open} setOpen={setOpen} />
            <Brofile />
          </Route>

          <Route path='/createbrofile'>
            <Header headline='Create YOBrofile!' open={open} setOpen={setOpen} />
            <CreateBrofile open={open} />
          </Route>

          <Route path='/newsfeed'>
            <Header headline='YO Newsfeed Bro!' open={open} setOpen={setOpen} />

          </Route>

          <Route path='/selecttags'>
            <Header headline='Select YOBro Tags!' open={open} setOpen={setOpen} />
            <SelectTags open={open} />
          </Route>
        </Switch>
      </main>
    </div>




  );
}

export default App;
