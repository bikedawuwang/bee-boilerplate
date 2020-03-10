import * as React from "react";
import { inject, observer } from "mobx-react";
import { AppStore } from "../../store";

import './index.less'

interface IProps {
    appStore: AppStore;
    children?: AudioContextLatencyCategory;
}

@inject("appStore")
@observer
class App extends React.Component<IProps, {}> {
    render() {
        return (
            <div className='div'>
                <div className="icon"></div>
                <p className='p'>{this.props.appStore.text}</p>
            </div>);
    }
}

export default App