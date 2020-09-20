import format from 'date-fns/format'

const Format = {
    currentTime() {
        return format(new Date(), 'yyyy.MM.dd h:mm:ss a');
    }
};

export default Format;