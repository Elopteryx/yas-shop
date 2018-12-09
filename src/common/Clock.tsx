import * as React from 'react';
import moment from 'moment';
import Format from '../utils/Format';
import './Clock.css';

type ClockProps = {}
type ClockState = {
    current: string;
}

export default class Clock extends React.PureComponent<ClockProps, ClockState> {

    private intervalId: number | undefined;

    constructor(props: ClockProps) {
        super(props);

        this.state = {
            current: Format.currentTime(),
        };
    }

    componentDidMount() {
        this.intervalId = window.setInterval(() => {
            this.setState({current: Format.currentTime()});
        }, 1000);
        
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const {current} = this.state;
        return (
            <div className="Clock">
                <p>{current}</p>
            </div>
        );
    }

}