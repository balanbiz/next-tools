import { getResourse, postResourse } from "@/lib/fetch";
import PaginationControls from "./PaginationControls";

interface PaginationExampleProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const PaginationExample: React.FC<PaginationExampleProps> = async ({ searchParams }) => {
    const entries = (await postResourse("http://localhost:3000/api/load-entry", searchParams)) as IEntry[] | [] | undefined;
    const entriesLength = (await getResourse("http://localhost:3000/api/count-entries")) as number;

    return (
        <div>
            {entries && entries.map(each => <p key={each.id}>{each.data}</p>)}

            <PaginationControls dataLength={entriesLength} />
        </div>
    );
};

export default PaginationExample;
