import * as styles from './rating-filter.css';

const RATING_FILTERS = [
  { label: '전체', value: 'all' },
  { label: '9점 이상', value: '9+' },
  { label: '8 ~ 9점', value: '8-9' },
  { label: '7 ~ 8점', value: '7-8' },
  { label: '6 ~ 7점', value: '6-7' },
  { label: '6점 미만', value: 'under-6' },
] as const;

export type RatingFilterValue = (typeof RATING_FILTERS)[number]['value'];

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