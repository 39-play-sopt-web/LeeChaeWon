export const RATING_FILTERS = [
  { label: '전체', value: 'all' },
  { label: '9점 이상', value: '9+' },
  { label: '8 ~ 9점', value: '8-9' },
  { label: '7 ~ 8점', value: '7-8' },
  { label: '6 ~ 7점', value: '6-7' },
  { label: '6점 미만', value: 'under-6' },
] as const;

export type RatingFilterValue = (typeof RATING_FILTERS)[number]['value'];

export const RATING_RANGES: Record<
  RatingFilterValue,
  { min?: number; max?: number }
> = {
  all: {},
  '9+': { min: 9 },
  '8-9': { min: 8, max: 9 },
  '7-8': { min: 7, max: 8 },
  '6-7': { min: 6, max: 7 },
  'under-6': { max: 6 },
};