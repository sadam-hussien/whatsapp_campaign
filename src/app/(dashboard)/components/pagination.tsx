"use client";

import cls from "@/helpers/cls";

import useUrlSearchParams from "@/hooks/useUrlSearchParams";

type Props = {
  pages: number;
};

export default function Pagination({ pages }: Props) {
  const { searchParams, setSearchParmas } = useUrlSearchParams();

  const currentPage = searchParams.get("page") || 1;

  const prevPage = Number(currentPage) > 1 ? Number(currentPage) - 1 : 0;

  const nextPage = Number(currentPage) < pages ? Number(currentPage) + 1 : 0;

  // fill the array with number of pages
  const arrayOfPages: number[] = Array.from(
    { length: pages },
    (_, index) => index + 1,
  );

  function handlePage(page: number) {
    setSearchParmas({ searchParams: { key: "page", value: page.toString() } });
  }

  return arrayOfPages.length ? (
    <div className="join">
      <button
        disabled={prevPage < 1}
        onClick={() => handlePage(prevPage)}
        className={cls(
          "join-item btn border-0 !rounded-full !w-10 !h-10 !min-w-0 !min-h-0 !text-lg me-sm",
        )}
      >
        <i className="las la-angle-left"></i>
      </button>
      {arrayOfPages.map((page: number) => (
        <button
          key={page}
          onClick={() => handlePage(page)}
          className={cls(
            "join-item btn border-0 !w-10 !h-10 !min-w-0 !min-h-0",
            {
              "btn-active !bg-primary text-white": page === Number(currentPage),
            },
          )}
        >
          {page}
        </button>
      ))}
      <button
        disabled={nextPage < 1}
        onClick={() => handlePage(nextPage)}
        className={cls(
          "join-item btn border-0 !rounded-full !w-10 !h-10 !min-w-0 !min-h-0 !text-lg ms-sm",
        )}
      >
        <i className="las la-angle-right"></i>
      </button>
    </div>
  ) : null;
}
