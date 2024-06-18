CREATE TABLE IF NOT EXISTS inventory(
    inventoryId INT AUTO_INCREMENT PRIMARY KEY,
    orderedDate VARCHAR(10),
    dateOfEntry VARCHAR(10),
    referenceNumber VARCHAR(255),
    supplier VARCHAR(255),
    reason VARCHAR(255),
    productId INT,
    dateOfManufacture VARCHAR(10),
    dateOfExpiry VARCHAR(10),
    quantity INT,
    purchasePrice DECIMAL(10, 2),
    sellingPrice DECIMAL(10, 2),
    batchNumber VARCHAR(255),
    storageLocation VARCHAR(255),
    additionalNote VARCHAR(255),
    dateAdded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    addedBy VARCHAR(255),
    lastEditedDate TIMESTAMP,
    lastEditedBy VARCHAR(255),
    FOREIGN KEY (productId) REFERENCES products(productId)
  );