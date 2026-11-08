import type { MemberPart } from '../types/member';

const PARTS: MemberPart[] = ['WEB', 'iOS', 'ANDROID'];

interface PartSelectorProps {
  value: MemberPart | '';
  onChange: (part: MemberPart | '') => void;
}

const PartSelector = ({ value, onChange }: PartSelectorProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPart = PARTS.find((part) => part === event.target.value);

    onChange(selectedPart ?? '');
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-body-02 text-text-primary outline-none transition-colors focus:border-primary"
    >
      <option value="" disabled>
        파트를 선택해 주세요.
      </option>

      {PARTS.map((part) => (
        <option key={part} value={part}>
          {part}
        </option>
      ))}
    </select>
  );
};

export default PartSelector;
