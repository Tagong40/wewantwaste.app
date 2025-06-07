import { CustomCheckbox } from "./CustomCheckbox";

const produktFilters = ["4", "6", "8", "10", "12", "14", "16", "20", "40"];

const gospodarstwoFilters = ["allowed_on_road", "allows_heavy_waste"];

interface Props {
  selectedProduct: string[];
  setSelectedProduct: (args: any) => void;
  selectedPreference: string;
  setSelectedPreference: (args: string) => void;
  price_range: [number, number];
  setPriceRange: (args: [number, number]) => void;
}
export const Sidebar = ({
  selectedProduct,
  setSelectedProduct,
  selectedPreference,
  setSelectedPreference,
  price_range,
  setPriceRange,
}: Props) => {
  const handleProduktChange = (filter: string) => {
    setSelectedProduct((prev: string[]) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const min = 80;
  const max = 2000;

  return (
    <aside className="w-[300px] flex-shrink-0 p-8 hidden md:block lg:block md:max-lg:hidden">
      <div className="space-y-8">
        {/* Product Filters */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-gray-800 mb-4">
            SKIP SIZES
          </h3>
          <div className="space-y-3">
            {produktFilters.map((filter) => (
              <CustomCheckbox
                key={filter}
                label={filter}
                checked={selectedProduct.includes(filter)}
                onChange={() => handleProduktChange(filter)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-gray-800 mb-4">
            ALLOWS HEAVY WASTE
          </h3>
          <div className="space-y-3">
            {gospodarstwoFilters.map((filter) => (
              <CustomCheckbox
                key={filter}
                label={filter}
                checked={selectedPreference === filter}
                onChange={() =>
                  setSelectedPreference(
                    selectedPreference === filter ? "" : filter
                  )
                }
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest text-gray-800 mb-4">
            PRICE RANGE
          </h3>
          <div className="relative h-5">
            {/* Background track */}
            <div className="absolute w-full h-1 bg-gray-200 rounded top-1/2 -translate-y-1/2"></div>

            {/* Active range */}
            <div
              className="absolute h-1 bg-[#409477] rounded top-1/2 -translate-y-1/2"
              style={{
                left: `${((price_range[0] - min) / (max - min)) * 100}%`,
                width: `${
                  ((price_range[1] - price_range[0]) / (max - min)) * 100
                }%`,
              }}
            ></div>

            {/* Left slider */}
            <input
              type="range"
              min={min}
              max={max}
              step={10}
              value={price_range[0]}
              onChange={(e) => {
                const newMin = Math.min(
                  Number(e.target.value),
                  price_range[1] - 10
                );
                setPriceRange([newMin, price_range[1]]);
              }}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto top-1/2 -translate-y-1/2 z-10"
            />

            {/* Right slider */}
            <input
              type="range"
              min={min}
              max={max}
              step={10}
              value={price_range[1]}
              onChange={(e) => {
                const newMax = Math.max(
                  Number(e.target.value),
                  price_range[0] + 10
                );
                setPriceRange([price_range[0], newMax]);
              }}
              className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto top-1/2 -translate-y-1/2 z-10"
            />
          </div>

          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span className="bg-gray-100 py-1 px-3 rounded">
              {price_range[0]} £
            </span>
            <span className="bg-gray-100 py-1 px-3 rounded">
              {price_range[1]} £
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
