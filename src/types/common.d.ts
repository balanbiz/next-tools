interface IHomeUser {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
}

interface IEntry {
    id: number;
    data: string;
}
