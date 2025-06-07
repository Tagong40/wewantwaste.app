import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import axios from "axios";

export interface SkipHireOption {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

type Store = {
  skips: SkipHireOption[];
  loading: boolean;
  fetchSkip: () => Promise<void>;
};

export const useProducts = create<Store>()(
  devtools(
    persist(
      (set): Store => ({
        skips: [],
        loading: true,
        fetchSkip: async () => {
          try {
            const response = await axios.get(
              "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
            );
            set({ skips: response.data });
          } catch (error: any) {
            console.error(error);
          } finally {
            set({ loading: false });
          }
        },
      }),
      {
        name: "skips",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
