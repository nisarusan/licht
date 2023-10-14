import React from 'react';
import './App.css';

function App() {
    const [licht, setLicht] = React.useState(false);
    return (
        <main className={licht === true ? "on" : "off"}>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => setLicht(!licht)}>
                {licht === false ? 'Turn on' : 'Turn off'}</button>
            </section>
        </main>
    );
}

export default App;
