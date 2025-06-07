export const CustomCheckbox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="flex items-center space-x-3 cursor-pointer text-gray-700">
    <div className="relative flex items-center justify-center">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-5 h-5 border border-gray-300 rounded-sm bg-white"></div>
      {checked && (
        <div className="absolute w-2.5 h-2.5 bg-[#409477] rounded-full"></div>
      )}
    </div>
    <span>{label.replace(/_/g, "")}</span>
  </label>
);
