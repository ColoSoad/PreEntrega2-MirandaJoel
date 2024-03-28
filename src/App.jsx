import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <body>
                <ItemListContainer greeting="Hello how do you do?" />
            </body>
        </>
    );
}

export default App;
