import { SliderItem } from "@/constans";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function getSlider(): Promise<SliderItem[]> {
  try {
    const records = await directus.request(readItems("slider"));

    const sliderItems: SliderItem[] = records.map(
      (record: Record<string, any>) => ({
        id: record.id,
        title: record.title,
        image: record.image,
      })
    );
    return sliderItems;
  } catch (error) {
    console.log("Error getting slider images:", error);
    return [];
  }
}
