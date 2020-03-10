import * as React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../store";

// const styles = require('./index.less');
import styles from './index.less';

interface IProps {
    appStore: AppStore;
    children?: AudioContextLatencyCategory;
}

@inject("appStore")
@observer
class App extends React.Component<IProps, {}> {
    render() {
        return (
            <div className={styles.div}>
                <div className={styles.icon}></div>
                <p className={styles.p}>{this.props.appStore.text}</p>
            </div>);
    }
}

export default App