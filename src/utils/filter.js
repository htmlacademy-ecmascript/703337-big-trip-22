import { FilterType } from '../const';
import { isDatesPresent, isDatesFuture, isDatesPast } from './point';

const filter = {
  [FilterType.EVERYTHING]: (points) => points.filter((point) => point),
  [FilterType.FUTURE]: (points) => points.filter((point) => isDatesFuture(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isDatesPresent(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isDatesPast(point)),
};

export {filter};
