/*---------IMPORTS---------*/
// noinspection SpellCheckingInspection

import {
    mysqlTable,
    date,
    decimal,
    timestamp,
    int,
    varchar,
} from 'drizzle-orm/mysql-core';

// import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

/*---------TABLES---------*/

/*
    Order:
        1. credentials
        2. user
        3. supplier
        4. product
        5. offer
        6. vendor
        7. transport
        8. inventory

    Run:
        `bun drizzle-kit generate`

    TODO:
        Try using `bigint` as datatype for reference `serial`.
*/


export const user = mysqlTable('users', {
    userId: int('userId').primaryKey().autoincrement(),
    userName: varchar('userName', { length: 255 }),
    name: varchar('name', { length: 255 }),
    mobile: varchar('mobile', { length: 255 }),
    email: varchar('email', { length: 255 }),
    role: varchar('role', { length: 255 }),
    status: varchar('status', { length: 255 }),
    dateAdded: timestamp('dateAdded').notNull().defaultNow(),
    addedBy: varchar('addedBy', { length: 255 }),
    lastEditedDate: timestamp('lastEditedDate'),
    lastEditedBy: varchar('lastEditedBy', { length: 255 }),
    password: varchar('password', { length: 255 }),
});

export const supplier = mysqlTable('suppliers', {
    supplierId: int('supplierId').primaryKey().autoincrement(),
    supplierName: varchar('supplierName', { length: 255 }),
    businessName: varchar('businessName', { length: 255 }),
    mobileNumber: varchar('mobileNumber', { length: 255 }),
    alternateMobileNumber: varchar('alternateMobileNumber', { length: 255 }),
    addressLine1: varchar('addressLine1', { length: 255 }),
    addressLine2: varchar('addressLine2', { length: 255 }),
    city: varchar('city', { length: 255 }),
    state: varchar('state', { length: 255 }),
    pinCode: varchar('pinCode', { length: 255 }),
    beneficiaryName: varchar('beneficiaryName', { length: 255 }),
    accountNumber: varchar('accountNumber', { length: 255 }),
    ifscCode: varchar('ifscCode', { length: 255 }),
    virtualPaymentAddress: varchar('virtualPaymentAddress', { length: 255 }),
    remarks: varchar('remarks', { length: 255 }),
    dateAdded: timestamp('dateAdded').notNull().defaultNow(),
    addedBy: varchar('addedBy', { length: 255 }),
    lastEditedDate: timestamp('lastEditedDate'),
    lastEditedBy: varchar('lastEditedBy', { length: 255 }),
});

export const product = mysqlTable('products', {
    productId: int('productId').primaryKey().autoincrement(),
    productName: varchar('productName', { length: 255 }),
    category: varchar('category', { length: 255 }),
    measuringUnit: varchar('measuringUnit', { length: 255 }),
    packSize: int('packSize'),
    noOfUnits: int('noOfUnits'),
    unitMRP: decimal('unitMRP', { precision: 10, scale: 2 }),
    packMRP: decimal('packMRP', { precision: 10, scale: 2 }),
    manufacturer: varchar('manufacturer', { length: 255 }),
    marketer: varchar('marketer', { length: 255 }),
    supplierID: int('supplier').references(() => supplier.supplierId),
    upc: varchar('upc', { length: 255 }),
    hsn: varchar('hsn', { length: 255 }),
    cgst: decimal('cgst', { precision: 10, scale: 2 }),
    sgst: decimal('sgst', { precision: 10, scale: 2 }),
    igst: decimal('igst', { precision: 10, scale: 2 }),
    cess: decimal('cess', { precision: 10, scale: 2 }),
    loadPrice: decimal('loadPrice', { precision: 10, scale: 2 }),
    unloadingPrice: decimal('unloadingPrice', { precision: 10, scale: 2 }),
    dateAdded: timestamp('dateAdded').notNull().defaultNow(),
    addedBy: varchar('addedBy', { length: 255 }),
    lastEditedDate: timestamp('lastEditedDate'),
    lastEditedBy: varchar('lastEditedBy', { length: 255 }),
});

export const offer = mysqlTable('offers', {
    offerId: int('offerId').primaryKey().autoincrement(),
    offerType: varchar('offerType', { length: 255 }),
    offerName: varchar('offerName', { length: 255 }),
    startDate: date('startDate'),
    endDate: date('endDate'),
    products: varchar('products', { length: 255 }),
    offers: varchar('offers', { length: 255 }),
    discountValue: decimal('discountValue', { precision: 10, scale: 2 }),
    discountPercentage: decimal('discountPercentage', { precision: 10, scale: 2 }),
    maximumDiscountValue: decimal('maximumDiscountValue', { precision: 10, scale: 2 }),
    minimumPurchase: decimal('minimumPurchase', { precision: 10, scale: 2 }),
    offerApplicabilityFrequency: varchar('offerApplicabilityFrequency', { length: 255 }),
    applicableTo: varchar('applicableTo', { length: 255 }),
    status: varchar('status', { length: 255 }),
    dateAdded: timestamp('dateAdded').notNull().defaultNow(),
    addedBy: varchar('addedBy', { length: 255 }),
    lastEditedDate: timestamp('lastEditedDate'),
    lastEditedBy: varchar('lastEditedBy', { length: 255 }),
});

export const vendor = mysqlTable('vendors', {
    vendorId: int('vendorId').primaryKey().autoincrement(),
    vendorName: varchar('vendorName', { length: 255 }),
    businessName: varchar('businessName', { length: 255 }),
    email: varchar('email', { length: 255 }),
    mobileNumber: varchar('mobileNumber', { length: 255 }),
    alternateMobileNumber: varchar('alternateMobileNumber', { length: 255 }),
    addressLine1: varchar('addressLine1', { length: 255 }),
    addressLine2: varchar('addressLine2', { length: 255 }),
    landmark: varchar('landmark', { length: 255 }),
    city: varchar('city', { length: 255 }),
    district: varchar('district', { length: 255 }),
    state: varchar('state', { length: 255 }),
    pinCode: varchar('pinCode', { length: 255 }),
    gstin: varchar('gstin', { length: 255 }),
    fssai: varchar('fssai', { length: 255 }),
    registrationNumber: varchar('registrationNumber', { length: 255 }),
    aadharNumber: varchar('aadharNumber', { length: 255 }),
    panNumber: varchar('panNumber', { length: 255 }),
    otherDocuments: varchar('otherDocuments', { length: 255 }),
    status: varchar('status', { length: 255 }),
    dateAdded: timestamp('dateAdded').notNull().defaultNow(),
    addedBy: varchar('addedBy', { length: 255 }),
    lastEditedDate: timestamp('lastEditedDate'),
    lastEditedBy: varchar('lastEditedBy', { length: 255 }),
});

export const transport = mysqlTable('transports', {
    transportId: int('transportId').primaryKey().autoincrement(),
    transportName: varchar('transportName', { length: 255 }),
    businessName: varchar('businessName', { length: 255 }),
    vehicleName: varchar('vehicleName', { length: 255 }),
    email: varchar('email', { length: 255 }),
    mobileNumber: varchar('mobileNumber', { length: 255 }),
    alternateMobileNumber: varchar('alternateMobileNumber', { length: 255 }),
    addressLine1: varchar('addressLine1', { length: 255 }),
    addressLine2: varchar('addressLine2', { length: 255 }),
    landmark: varchar('landmark', { length: 255 }),
    city: varchar('city', { length: 255 }),
    district: varchar('district', { length: 255 }),
    state: varchar('state', { length: 255 }),
    pinCode: varchar('pinCode', { length: 255 }),
    branchOffice: varchar('branchOffice', { length: 255 }),
    aadharNumber: varchar('aadharNumber', { length: 255 }),
    panNumber: varchar('panNumber', { length: 255 }),
    driverName: varchar('driverName', { length: 255 }),
    driverMobileNumber: varchar('driverMobileNumber', { length: 255 }),
    driverAlternateNumber: varchar('driverAlternateNumber', { length: 255 }),
    status: varchar('status', { length: 255 }),
    dateAdded: timestamp('dateAdded').notNull().defaultNow(),
    addedBy: varchar('addedBy', { length: 255 }),
    lastEditedDate: timestamp('lastEditedDate'),
    lastEditedBy: varchar('lastEditedBy', { length: 255 }),
});

export const inventory = mysqlTable('inventory', {
    inventoryId: int('inventoryId').primaryKey().autoincrement(),
    orderedDate: varchar('orderedDate', { length: 10 }),
    dateOfEntry: varchar('dateOfEntry', { length: 10 }),
    referenceNumber: varchar('referenceNumber', { length: 255 }),
    supplier: varchar('supplier', { length: 255 }),
    reason: varchar('reason', { length: 255 }),
    productId: int('productId').references(() => product.productId),
    dateOfManufacture: varchar('dateOfManufacture', { length: 10 }),
    dateOfExpiry: varchar('dateOfExpiry', { length: 10 }),
    quantity: int('quantity'),
    purchasePrice: decimal('purchasePrice', { precision: 10, scale: 2 }),
    sellingPrice: decimal('sellingPrice', { precision: 10, scale: 2 }),
    batchNumber: varchar('batchNumber', { length: 255 }),
    storageLocation: varchar('storageLocation', { length: 255 }),
    additionalNote: varchar('additionalNote', { length: 255 }),
    dateAdded: timestamp('dateAdded').notNull().defaultNow(),
    addedBy: varchar('addedBy', { length: 255 }),
    lastEditedDate: timestamp('lastEditedDate'),
    lastEditedBy: varchar('lastEditedBy', { length: 255 }),
});

// type User = InferSelectModel<typeof user>;
// type NewUser = InferInsertModel<typeof user>;