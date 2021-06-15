import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import AccountProfile from './components/AccountProfile';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route 
            exact 
            path='/account/profile' 
            render={()=> <AccountProfile x='asd'/>}
            />
        </Switch>
      </Container>
    </>
  );
}

export default App;