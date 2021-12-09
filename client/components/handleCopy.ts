export const handleCopy = (
  e: React.ChangeEvent<HTMLInputElement>,
  text: string
) => {
  e.preventDefault();
  navigator.clipboard.writeText(text);
};
