import { useEffect, useState } from "react";
import { apiClient } from "../sevices/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const controller = new AbortController();
    
    setIsLoading(true);
    apiClient
      .get<GenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        console.log(err);
      });
    return () => controller.abort();
  }, []);

    return { genres, error, isLoading};
};

