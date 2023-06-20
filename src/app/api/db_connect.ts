import mysql from "mysql2/promise";

export async function db_connect(query: string, values = []) {
    const db_connection = await mysql.createConnection({
        host: "localhost",
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });
    try {
        const [results] = await db_connection.execute(query, values);
        db_connection.end();
        return results;
    } catch (error: any) {
        throw Error(error.message);
    }
}
