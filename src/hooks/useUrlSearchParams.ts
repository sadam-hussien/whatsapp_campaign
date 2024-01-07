import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

import { useCallback } from "react";

import { useAppSelector } from "./useRedux";

type Props = {};

type searchParams = {
  value: string;
  key: string;
};

type setSearchParmasProps = {
  searchParams: Array<searchParams> | searchParams;
  path?: string;
};

type removeSearchParmasProps = {
  searchParams: Array<string> | string;
  path?: string;
};

export default function useUrlSearchParams() {
  const { lang } = useAppSelector((state) => state.global);

  const searchParams = useSearchParams();

  // router
  const router = useRouter();

  // path name
  const pathname = usePathname();

  const setSearchParmas = useCallback(
    ({ searchParams: _searchParams, path }: setSearchParmasProps) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));

      // set query
      if (Array.isArray(_searchParams)) {
        _searchParams.forEach((p) => {
          params.set(p.key, p.value);
        });
      } else {
        params.set(_searchParams.key, _searchParams.value);
      }

      if (path) {
        router.push(lang?.lang + "/" + path + "?" + params);
      } else {
        router.push("?" + params);
      }

      return params.toString();
    },
    [searchParams],
  );

  const removeSearchParmas = useCallback(
    ({ searchParams: _searchParams, path }: removeSearchParmasProps) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));

      // set query
      if (Array.isArray(_searchParams)) {
        _searchParams.forEach((p) => {
          params.delete(p);
        });
      } else {
        params.delete(_searchParams);
      }

      if (path) {
        router.push(lang?.lang + "/" + path + "?" + params);
      } else {
        router.push("?" + params);
      }

      return params.toString();
    },
    [searchParams],
  );

  return { searchParams, pathname, setSearchParmas, removeSearchParmas };
}
