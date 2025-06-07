import { useEffect, useState } from "react";
import { ProductCard } from "./component/Products/ProcuctCard";
import { useProducts } from "./hooks/useProructs";
import { Header } from "./component/Layout/Header";
import { Sidebar } from "./component/Layout/SideBar";

export default function App() {
  const { fetchSkip, skips } = useProducts((state) => state);
  const [selectedProduct, setSelectedProduct] = useState<string[]>([]);
  const [selectedPreference, setSelectedPreference] = useState<string>("");
  const [price_range, setPriceRange] = useState<[number, number]>([80, 1200]);

  const filteredSkips = skips.filter((skip) => {
    const sizeMatch =
      selectedProduct.length === 0 ||
      selectedProduct.includes(String(skip.size));

    const gospodarstwoMatch =
      !selectedPreference ||
      (selectedPreference === "allowed_on_road" && skip.allowed_on_road) ||
      (selectedPreference === "allows_heavy_waste" && skip.allows_heavy_waste);

    const priceMatch =
      skip.price_before_vat >= price_range[0] &&
      skip.price_before_vat <= price_range[1];

    return sizeMatch && gospodarstwoMatch && priceMatch;
  });

  useEffect(() => {
    fetchSkip();
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen p-4 md:p-8 flex justify-center items-start">
      <main className="bg-white shadow-lg w-full max-w-7xl">
        <Header />
        <div className="flex flex-col md:flex-row">
          <Sidebar
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            selectedPreference={selectedPreference}
            setSelectedPreference={setSelectedPreference}
            price_range={price_range}
            setPriceRange={setPriceRange}
          />
          <div className="w-full bg-white p-8 border-l border-gray-200">
            <div className="h-[700px] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredSkips.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
