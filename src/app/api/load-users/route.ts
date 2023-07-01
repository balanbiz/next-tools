import { db_connect } from "../db_connect";

export async function GET() {
    try {
        const home_users_table = (await db_connect("SELECT * FROM home_users")) as IHomeUser[] | [];

        return new Response(JSON.stringify(home_users_table));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}
