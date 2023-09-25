import { db_connect } from "../db_connect";
export async function POST(req: Request) {
    try {
        const body = await req.json();
        if (JSON.stringify(body) === "{}") {
            const home_entry_table = (await db_connect("SELECT * FROM example_data LIMIT 5;")) as IEntry[] | [];
            return new Response(JSON.stringify(home_entry_table));
        } else {
            const { page, per_page } = body;
            const start = (+page - 1) * +per_page;
            const end = start + +per_page;
            const home_entry_table = (await db_connect(`SELECT * FROM example_data WHERE id > ${start} AND id <= ${end};`)) as
                | IEntry[]
                | [];
            return new Response(JSON.stringify(home_entry_table));
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}
