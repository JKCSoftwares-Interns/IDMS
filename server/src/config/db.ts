import mariadb, { PoolConnection } from "mariadb";

export async function initializeDB() {
  console.log("Initializing database...");

  const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "test",
    port: 3306,
    connectionLimit: 5,
  });

  let conn: PoolConnection | null = null;
  try {
    conn = await pool.getConnection();
    await conn.query(`CREATE DATABASE IF NOT EXISTS testidms;`);
    await conn.query(`USE testidms;`);
    await conn.query(`
    CREATE TABLE IF NOT EXISTS products (
      productId INT AUTO_INCREMENT PRIMARY KEY,
      productName VARCHAR(255),
      category VARCHAR(255),
      measuringUnit VARCHAR(255),
      packSize INT,
      noOfUnits INT,
      unitMRP DECIMAL(10,2),
      packMRP DECIMAL(10,2),
      manufacturer VARCHAR(255),
      marketer VARCHAR(255),
      supplier VARCHAR(255),
      upc VARCHAR(255),
      hsn VARCHAR(255),
      cgst DECIMAL(10,2),
      sgst DECIMAL(10,2),
      igst DECIMAL(10,2),
      cess DECIMAL(10,2),
      loadPrice DECIMAL(10,2),
      unloadingPrice DECIMAL(10,2),
      dateAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      addedBy VARCHAR(255),
      lastEditedDate TIMESTAMP,
      lastEditedBy VARCHAR(255)
    );
`);

  await conn.query(`
  CREATE TABLE IF NOT EXISTS vendors (
    vendorId INT AUTO_INCREMENT PRIMARY KEY,
    vendorName VARCHAR(255),
    businessName VARCHAR(255),
    email VARCHAR(255),
    mobileNumber VARCHAR(255),
    alternateMobileNumber VARCHAR(255),
    addressLine1 VARCHAR(255),
    addressLine2 VARCHAR(255),
    landmark VARCHAR(255),
    city VARCHAR(255),
    district VARCHAR(255),
    state VARCHAR(255),
    pinCode VARCHAR(255),
    gstin VARCHAR(255),
    fssai VARCHAR(255),
    registrationNumber VARCHAR(255),
    aadharNumber VARCHAR(255),
    panNumber VARCHAR(255),
    otherDocuments VARCHAR(255),
    status VARCHAR(255),
    dateAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    addedBy VARCHAR(255),
    lastEditedDate TIMESTAMP,
    lastEditedBy VARCHAR(255)
  );
`);
    console.log("Database initialized successfully.");
  } catch (err) {
    console.error("Error initializing database: ", err);
  } finally {
    if (conn) conn.release();
  }
}

export const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "test",
  port: 3306,
  database: "testidms",
  connectionLimit: 5,
});