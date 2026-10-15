const NumberCell = ({number, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex aspect-square items-center justify-center rounded-lg border border-border bg-surface text-heading-01 text-text-primary transition-colors active:bg-secondary active:scale-90 p-12"
    >
      {number}
    </button>
  );
};

export default NumberCell;