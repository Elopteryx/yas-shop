import moment from 'moment';

const Format = {
    currentTime() {
        return moment().format('YYYY.mm.DD h:mm:ss a');
    }
};

export default Format;