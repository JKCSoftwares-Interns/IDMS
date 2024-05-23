import mariadb, { PoolConnection } from 'mariadb';

const pool = mariadb.createPool({
     host: 'localhost', 
     user:'mysql', 
     password: 'root',
     port: 3306,
     connectionLimit: 5
});

async function createTables() {

  console.log("creating table");

  let conn: PoolConnection | null = null;
  try {
    conn = await pool.getConnection();
    await conn.query(`
    CREATE TABLE Products (
      productId VARCHAR(255) PRIMARY KEY,
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
      dateAdded TIMESTAMP,
      addedBy VARCHAR(255),
      lastEditedDate TIMESTAMP,
      lastEditedBy VARCHAR(255)
    );
      `);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) conn.release();
  }
}

interface Product {
  productId: string;
  productName: string;
  category: string;
  measuringUnit: string;
  packSize: number;
  noOfUnits: number;
  unitMRP: number;
  packMRP: number;
  manufacturer: string;
  marketer: string;
  supplier: string;
  upc: string;
  hsn: string;
  cgst: number;
  sgst: number;
  igst: number;
  cess: number;
  loadPrice: number;
  unloadingPrice: number;
  dateAdded: Date;
  addedBy: string;
  lastEditedDate: Date;
  lastEditedBy: string;
}

createTables();

export default pool