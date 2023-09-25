import { db_connect } from "../db_connect";

export async function GET() {
    try {
        const full_data_length = (await db_connect("SELECT COUNT(*) as total_records FROM example_data;")) as [{ total_records: number }];
        return new Response(JSON.stringify(full_data_length[0].total_records));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}
