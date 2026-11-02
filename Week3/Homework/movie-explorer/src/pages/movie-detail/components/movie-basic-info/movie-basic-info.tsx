import * as styles from './movie-basic-info.css';

interface MovieBasicInfoProps {
  original_title: string;
  original_language: string;
  production_countries: { name: string }[];
  spoken_languages: { name: string }[];
  budget: number;
  revenue: number;
}

interface InfoCardProps {
  label: string;
  value: string;
}

const InfoCard = ({ label, value }: InfoCardProps) => (
  <div className={styles.card}>
    <h3 className={styles.label}>{label}</h3>
    <p className={styles.value}>{value}</p>
  </div>
);

const formatCurrency = (amount: number) =>
  amount === 0 ? '정보 없음' : `$${amount.toLocaleString('en-US')}`;

const MovieBasicInfo = ({
  original_title,
  original_language,
  production_countries,
  spoken_languages,
  budget,
  revenue,
}: MovieBasicInfoProps) => {
  const basicInfoItems = [
    { label: '원제', value: original_title || '정보 없음' },
    { label: '원어', value: original_language || '정보 없음' },
    {
      label: '제작 국가',
      value: production_countries.map(({ name }) => name).join(', ') || '정보 없음',
    },
    {
      label: '사용 언어',
      value: spoken_languages.map(({ name }) => name).join(', ') || '정보 없음',
    },
    { label: '예산', value: formatCurrency(budget) },
    { label: '수익', value: formatCurrency(revenue) },
  ];

  return (
    <section className={styles.basicInfo}>
      <h2 className={styles.title}>기본 정보</h2>

      <div className={styles.cardList}>
        {basicInfoItems.map((item) => (
          <InfoCard key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
    </section>
  );
};

export default MovieBasicInfo;