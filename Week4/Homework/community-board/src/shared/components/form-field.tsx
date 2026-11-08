interface FormFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength: number;
  errorMessage: string;
  multiline?: boolean;
}

const FormField = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  errorMessage,
  multiline = false,
}: FormFieldProps) => {
  const characterCount = value.length;
  const isOverLimit = characterCount > maxLength;
  const helperTextId = `${id}-helper`;

  const inputClassName =
    'w-full rounded-lg border border-border bg-surface px-4 py-3 text-body-01 text-text-primary outline-none focus:border-primary';

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-subheading-01 text-text-primary">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          rows={8}
          placeholder={placeholder}
          aria-invalid={isOverLimit}
          aria-describedby={helperTextId}
          className={`${inputClassName} resize-y`}
        />
      ) : (
        <input
          type="text"
          id={id}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder}
          aria-invalid={isOverLimit}
          aria-describedby={helperTextId}
          className={inputClassName}
        />
      )}

      <div
        id={helperTextId}
        className="flex justify-between text-caption-01 text-text-secondary"
      >
        <span>{isOverLimit ? errorMessage : `최대 ${maxLength}글자`}</span>
        <span>
          {characterCount} / {maxLength}
        </span>
      </div>
    </div>
  );
};

export default FormField;