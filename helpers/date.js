import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from '../constants/Date';

export const formatDate = (date, format = DEFAULT_DATE_FORMAT) => (
  moment(date).format(format)
);
