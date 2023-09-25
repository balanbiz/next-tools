// PaginationControls.tsx
"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    dataLength: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({ hasNextPage, hasPrevPage, dataLength }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page = searchParams.get("page") ?? "1";
    const per_page = searchParams.get("per_page") ?? "5";

    return (
        <div>
            <button
                type="button"
                disabled={!hasPrevPage}
                onClick={() => router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`, { scroll: false })}
            >
                prev page
            </button>
            <div>
                {page} / {Math.ceil(dataLength / Number(per_page))}
            </div>

            <button
                type="button"
                disabled={!hasNextPage}
                onClick={() => router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`, { scroll: false })}
            >
                next page
            </button>
        </div>
    );
};

export default PaginationControls;
