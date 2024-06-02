import { defineStore } from "pinia";
import axios from "axios";

// Типы для данных, которые мы получаем с API
interface Feature {
   description: string;
   image: string;
   image_alt: string;
   model_name: string;
   sorting: number;
}

interface FeaturesState {
   blockHeading: string;
   assetsDomain: string;
   features: Feature[];
}

export const useFeaturesStore = defineStore("features", {
   state: (): FeaturesState => ({
      blockHeading: "",
      assetsDomain: "",
      features: [],
   }),
   actions: {
      async fetchFeatures() {
         try {
            const response = await axios.post(
               "https://test-task-frontend-2023.slava.digital"
            );
            const data = response.data;
            this.blockHeading = data.block_heading;
            this.assetsDomain = data.assets_domain;
            this.features = data.features.filter(
               (feature: Feature) =>
                  feature.model_name === "Figaro" &&
                  feature.description &&
                  feature.image
            );
         } catch (error) {
            console.error("Failed to fetch features:", error);
         }
      },
   },
   persist: true,
});
