const NumberCell = ({number, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="aspect-square rounded-lg border border-border bg-surface text-heading-01 text-text-primary transition-colors hover:bg-secondary p-12"
    >
      {number}
    </button>
  )
}

export default NumberCell;