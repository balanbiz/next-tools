import { db_connect } from "../db_connect";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        await db_connect(`DELETE FROM home_users WHERE id = ${body}`);
        return new Response(JSON.stringify(body));
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}
