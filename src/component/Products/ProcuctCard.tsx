import type { SkipHireOption } from "../../hooks/useProructs";

export const ProductCard = ({ product }: { product: SkipHireOption }) => (
  <div className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer p-6 text-left">
    <img
      src={
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg"
      }
      alt={product.postcode}
      className="w-full h-auto rounded object-contain aspect-video mb-4"
    />
    <div className="flex mr-4 justify-between items-center">
      <div className="mx-4">
        <h4 className="text-lg   font-bold text-gray-900">
          {product.size} Yard Skip
        </h4>
        <p className="text-sm text-gray-500 ">
          {product.hire_period_days} day hire period
        </p>
      </div>
      <p className="text-lg font-bold text-gray-500 ">
        £{product?.price_before_vat?.toFixed(2)}
      </p>
    </div>
  </div>
);
