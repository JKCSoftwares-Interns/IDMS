import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";


interface User{
    productsAdded: boolean;
}

const router = express.Router();

router.get("/", async (_, res) => {
    // greetStatus("show");

    let conn: PoolConnection | null = null;
    try {
        conn = await pool.getConnection();
        const data = await conn.query("SELECT * FROM user_activity");
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});

router.post("/", async (req, res) => {
    // greetStatus("add");

    let conn: PoolConnection | null = null;
    try {
        conn = await pool.getConnection();
        const user: User = req.body;
        await conn.query(`
    INSERT INTO user_activity (
        productsAdded
        ) VALUES (
            ?
        );
        `, [user.productsAdded]);
        res.send("User activity added successfully.");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    } finally {
        if (conn) conn.release();
    }
});