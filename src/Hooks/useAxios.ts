
import useSWR from 'swr';

import api from '../Services/api';

export function useAxios(url: string) {
  const { data, error, mutate } = useSWR(url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    {}
  );
  return { data, error, mutate };
}