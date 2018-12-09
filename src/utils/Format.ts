import moment from 'moment';

const Format = {
    currentTime() {
        return moment().format('YYYY MMMM Do, h:mm:ss a');
    }
};

export default Format;