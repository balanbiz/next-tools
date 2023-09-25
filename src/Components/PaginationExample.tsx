import { getResourse, postResourse } from "@/lib/fetch";
import PaginationControls from "./PaginationControls";

interface PaginationExampleProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const PaginationExample: React.FC<PaginationExampleProps> = async ({ searchParams }) => {
    const entries = (await postResourse("http://localhost:3000/api/load-entry", searchParams)) as IEntry[] | [] | undefined;
    const entriesLength = await getResourse("http://localhost:3000/api/count-entries");
    const page = searchParams["page"] ?? "1";
    const per_page = searchParams["per_page"] ?? "5";
    // console.log(entries, entriesLength);

    /* const { isLoading, error, data } = useQuery<IEntry[] | undefined>({
        queryKey: ["entryData"],
        queryFn: () => getResourse("https://api.github.com/repos/TanStack/query"),
    });

    if (isLoading) return "Loading...";
    if (error instanceof Error) return "An error has occured: " + error.message; */

    return (
        <div>
            {entries && entries.map(each => <p key={each.id}>{each.data}</p>)}

            <PaginationControls hasNextPage={+page * +per_page < entriesLength} hasPrevPage={+page > 1} dataLength={entriesLength} />
            {/* <button onClick={fetchdata}>on CLick</button> */}
        </div>
    );
};

export default PaginationExample;
