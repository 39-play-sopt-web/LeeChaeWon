import type { ReactNode } from 'react';
import { chipVariants } from './chip.css';

interface ChipProps {
  variant: 'rating' | 'genre';
  children: ReactNode;
}

const Chip = ({ variant, children }: ChipProps) => {
  return <span className={chipVariants[variant]}>{children}</span>;
};

export default Chip;