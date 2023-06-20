import { homeUserServerValidation } from "@/lib/validations/homeUserServerValidation";
import { db_connect } from "../db_connect";
import { Query } from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { username, email, isAdmin, createdAt } = homeUserServerValidation.parse(body);

        const home_users_table = (await db_connect("SELECT * FROM home_users1")) as IHomeUser[];

        /* if (home_users_table.length === 0) {
            return new Response("No users in db", { status: 400 });
        } */
        await new Promise(resolve => setTimeout(resolve, 2000));
        return new Response(JSON.stringify(body));
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            throw new Error("Invalid request payload");
        }
        throw new Error(error);
    }
}
