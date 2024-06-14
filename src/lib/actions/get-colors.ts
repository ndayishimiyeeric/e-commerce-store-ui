import { Color } from "@/types/color";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const data = await fetch(URL);
  return data.json();
};

export default getColors;
