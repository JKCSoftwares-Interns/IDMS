import express from 'express';
import pool from './db.ts'
import { PoolConnection } from 'mariadb';
const PORT = process.env.PORT || '3000';

const app = express();

app.get('/fetchProducts', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => {
  res.send("hello world");
});

/* WORKING ON THIS | DON'T TOUCH  */

app.get('/products/show', async (req, res) => {
     let conn: PoolConnection | null = null;     
     try {
         conn = await pool.getConnection();
         const rows = await conn.query("SELECT * FROM Products");
         res.json(rows);
       } catch (err) {
              console.log(err);
              res.status(500).send(err);
       } finally {
              if (conn) conn.release();
       }
});

const data = [
  {
    productId: 'P123',
    productName: 'Product 1',
    category: 'Category 1',
    measuringUnit: 'Unit 1',
    packSize: 10,
    noOfUnits: 100,
    unitMRP: 100.00,
    packMRP: 1000.00,
    manufacturer: 'Manufacturer 1',
    marketer: 'Marketer 1',
    supplier: 'Supplier 1',
    upc: 'UPC1',
    hsn: 'HSN1',
    cgst: 10.00,
    sgst: 10.00,
    igst: 10.00,
    cess: 10.00,
    loadPrice: 90.00,
    unloadingPrice: 110.00,
    dateAdded: new Date('2022-01-01'),
    addedBy: 'User 1',
    lastEditedDate: new Date('2022-01-02'),
    lastEditedBy: 'User 2'
  },
  {
    productId: 'P124',
    productName: 'Product 2',
    category: 'Category 2',
    measuringUnit: 'Unit 2',
    packSize: 20,
    noOfUnits: 200,
    unitMRP: 200.00,
    packMRP: 2000.00,
    manufacturer: 'Manufacturer 2',
    marketer: 'Marketer 2',
    supplier: 'Supplier 2',
    upc: 'UPC2',
    hsn: 'HSN2',
    cgst: 20.00,
    sgst: 20.00,
    igst: 20.00,
    cess: 20.00,
    loadPrice: 180.00,
    unloadingPrice: 220.00,
    dateAdded: new Date('2022-02-01'),
    addedBy: 'User 3',
    lastEditedDate: new Date('2022-02-02'),
    lastEditedBy: 'User 4'
  }
];

app.get('/add', async (req, res) => {
  let conn: PoolConnection | null = null;
  try {
    conn = await pool.getConnection();
    await conn.query(`
    INSERT INTO Products (
      productId, productName, category, measuringUnit, packSize, noOfUnits, 
      unitMRP, packMRP, manufacturer, marketer, supplier, upc, hsn, cgst, 
      sgst, igst, cess, loadPrice, unloadingPrice, dateAdded, addedBy, 
      lastEditedDate, lastEditedBy
    ) VALUES (
      'P123', 'Product 1', 'Category 1', 'Unit 1', 10, 100, 
      100.00, 1000.00, 'Manufacturer 1', 'Marketer 1', 'Supplier 1', 'UPC1', 'HSN1', 10.00, 
      10.00, 10.00, 10.00, 90.00, 110.00, '2022-01-01 00:00:00', 'User 1', 
      '2022-01-02 00:00:00', 'User 2'
    );
    
    INSERT INTO Products (
      productId, productName, category, measuringUnit, packSize, noOfUnits, 
      unitMRP, packMRP, manufacturer, marketer, supplier, upc, hsn, cgst, 
      sgst, igst, cess, loadPrice, unloadingPrice, dateAdded, addedBy, 
      lastEditedDate, lastEditedBy
    ) VALUES (
      'P124', 'Product 2', 'Category 2', 'Unit 2', 20, 200, 
      200.00, 2000.00, 'Manufacturer 2', 'Marketer 2', 'Supplier 2', 'UPC2', 'HSN2', 20.00, 
      20.00, 20.00, 20.00, 180.00, 220.00, '2022-02-01 00:00:00', 'User 3', 
      '2022-02-02 00:00:00', 'User 4'
    );
    `);
  } catch (err) {
    console.log('couldn\'t add: ', err);
    res.status
}});

app.listen(3000, () => {console.log("server running at 3000")});