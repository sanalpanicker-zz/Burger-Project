import React, {Component} from 'react';
import Layouts from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layouts>
                    <BurgerBuilder></BurgerBuilder>
                </Layouts>
            </div>
        );
    }
}

export default App;
