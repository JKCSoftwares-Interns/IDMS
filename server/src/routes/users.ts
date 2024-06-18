/*------IMPORT----------*/

import express from "express";
import { PoolConnection } from "mariadb";

import { pool } from "../config/db";

/*------INTERFACE-------*/

interface User {
	userId: string;
	userName: string;
	name: string;
	mobile: number;
	email: string;
	role: string;
	password: string;
	status: string;
	dateAdded: Date;
	addedBy: string;
	lastEditedDate: Date;
	lastEditedBy: string;
}

const router = express.Router();

/*----------LOGGING FUNCTION------------*/

function greetStatus(route: string) {
	console.log(`/users/${route} is running`);
}

/*----------PATH FUNCTIONS------------*/

router.get("/", async (_, res) => {
	greetStatus("show");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const data = await conn.query("SELECT * FROM users");
		// console.log(typeof data);
		res.json(data);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	} finally {
		if (conn) conn.release();
	}
});

router.post("/add", async (req, res) => {
	greetStatus("add");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const users: Partial<User> = req.body;
		console.log("users be like:", users);
		await conn.query(
			`
    INSERT INTO users (
      userName,name, mobile, email, role, password, status, dateAdded, addedBy, 
      lastEditedDate, lastEditedBy
    ) VALUES ( 
      ?, ?, ?, ?, ?, ?, ?, NOW(), ?, NULL, NULL
    );
    `,
			[
				users.userName,
				users.name,
				users.mobile,
			    users.email,
				users.role,
				users.password,
				users.status,
				
				"admin", //must be changed to include user from session data
			]
		);
		res.status(200).send("User added successfully");
	} catch (err) {
		console.log("couldn't add: ", err);
		res.status(500).send("Error adding user");
	} finally {
		if (conn) conn.release();
	}
});

router.get("/edit/:id", async (req, res) => {
	let conn: PoolConnection | null = null;
	try {
	  conn = await pool.getConnection();
	  const { id } = req.params;
	  const rows = await conn.query("SELECT * FROM users WHERE userId = ?", [id]);
	  if (rows.length === 0) {
		res.status(404).send("User not found");
	  } else {
		res.json(rows[0]);
	  }
	} catch (err) {
	  console.log(err);
	  res.status(500).send(err);
	} finally {
	  if (conn) conn.release();
	}
  });

router.post("/edit/:id", async (req, res) => {
	console.log("ID ==>", req.params.id);

	greetStatus("edit");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		console.log("DATA RECEIVED:", req.body);
		const users: User = req.body;
		if (!users) {
			console.log("error 400");
			res.status(400).send("Invalid user data");
			return;
		}
		await conn.query(
			`
		UPDATE users SET
		userName = ?, 
        name = ?,
	    mobile = ?,
	    email = ?,
	    role = ?,
	    password = ?,
	    status = ?,
		lastEditedDate = NOW(), 
		lastEditedBy = ?
		WHERE userId = ?
		`,
			[
				users.userName,
				users.name,
				users.mobile,
			    users.email,
				users.role,
				users.password,
				users.status,
				users.lastEditedBy,
				req.params.id,
			]
		);
		res.status(200).send("User updated successfully");
	} catch (err) {
		console.log("couldn't update: ", err);
		res.status(500).send("Error updating user");
	} finally {
		if (conn) conn.release();
	}
});

router.delete("/delete/:id", async (req, res) => {
	greetStatus("delete");

	let conn: PoolConnection | null = null;
	try {
		conn = await pool.getConnection();
		const id = req.params.id;
		if (!id) {
			res.status(400).send("No id provided");
			return;
		}
		await conn.query(
			`
		DELETE FROM users
		WHERE userId = ?
		`,
			[id]
		);
		res.status(200).send("User deleted successfully");
	} catch (err) {
		console.log("couldn't delete: ", err);
		res.status(500).send("Error deleting user");
	} finally {
		if (conn) conn.release();
	}
});

export default router;
