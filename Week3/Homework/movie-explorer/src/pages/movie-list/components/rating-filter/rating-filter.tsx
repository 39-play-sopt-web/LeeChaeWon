import { RATING_FILTERS, type RatingFilterValue } from '../../constants/rating-filter'
import * as styles from './rating-filter.css';

interface RatingFilterProps {
  value: RatingFilterValue;
  onChange: (value: RatingFilterValue) => void;
}

const RatingFilter = ({ value, onChange }: RatingFilterProps) => {
  return (
    <div className={styles.filter} aria-label="평점 필터">
      {RATING_FILTERS.map((filter) => {
        const isSelected = value === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            className={isSelected ? styles.button.selected : styles.button.default}
            aria-pressed={isSelected}
            onClick={() => onChange(filter.value)}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default RatingFilter;