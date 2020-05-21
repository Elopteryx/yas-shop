import moment from 'moment';

const Format = {
    currentTime() {
        return moment().format('YYYY.MM.DD h:mm:ss a');
    }
};

export default Format;