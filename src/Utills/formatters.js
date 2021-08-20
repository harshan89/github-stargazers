import moment from 'moment';

export const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
};

export const findTimeInterval = (time) => {
    return moment(time).startOf('hours').fromNow();
};