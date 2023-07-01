import { homeUserServerValidation } from "@/lib/validations/homeUserServerValidation";
import { db_connect } from "../db_connect";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { username, email, isAdmin, createdAt } = homeUserServerValidation.parse(body);

        // dont forget that sql query boolean dont need quotes
        const insert_query = `INSERT INTO home_users (username, email, isAdmin, createdAt) VALUES ('${username}', '${email}', ${isAdmin}, '${createdAt}')`;
        await db_connect(insert_query);

        await new Promise(resolve => setTimeout(resolve, 2000));
        return new Response(JSON.stringify(body));
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            throw new Error("Invalid request payload");
        }
        throw new Error(error);
    }
}
