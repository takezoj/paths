import React from 'react';

// import CompanyPicker from './components/CompanyPicker/CompanyPicker';
// import Timelines from './components/Timelines/Timelines';

import { CompanyPicker, Timelines } from './components';
import styles from './App.module.css'

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <CompanyPicker />
                <Timelines />
            </div>
        )
    }
}

export default App;