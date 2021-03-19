import './App.css';
import Timer from './components/timer/Timer';
import { ContextProvider } from './components/state/Context';

function App() {
    return (
        <ContextProvider>
            <div className="App">
                <div className="wrapper">
                    <header>
                        <div className="logo">
                            <h1>PrepMate</h1>
                        </div>
                    </header>

                    <main>
                        <Timer />
                    </main>

                    <footer>
                        <div className="footer">
                            Made by{' '}
                            <a href="http://www.johnstringer.me">
                                John Stringer
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </ContextProvider>
    );
}

export default App;
