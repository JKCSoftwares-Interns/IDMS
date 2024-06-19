import express from "express";
import {PoolConnection} from "mariadb";
import {pool} from "../config/db";

const router = express.router();

interface User {
    email: string,
    password: string,
}

router.post("/login", async (req, res) => {

    let conn: PoolConnection | null = null;
    try {
        conn = await pool.getConnection();
        const user: User = req.body;
        await conn.query(`
            INSERT INTO CREDENTIALS
        `);
    }

})