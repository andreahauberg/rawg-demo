import {useData} from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () => {
  const { data, error, isLoading } = useData<Platform>(
    "/platforms/lists/parents",
  );

  return { platforms: data, error, isLoading };
};


