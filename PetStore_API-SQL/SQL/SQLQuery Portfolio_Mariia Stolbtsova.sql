CREATE TABLE Customers (
Id INT PRIMARY KEY IDENTITY(1,1),
FirstName NVARCHAR(50) NOT NULL,
LastName NVARCHAR(50) NOT NULL,
Email NVARCHAR(100) NOT NULL UNIQUE,
RegistrationDate DATETIME DEFAULT GETDATE()
);

CREATE TABLE Categories (
Id INT PRIMARY KEY IDENTITY(1,1),
CategoryName NVARCHAR(100) NOT NULL,
Description NVARCHAR(255) 
);


CREATE TABLE Products (
Id INT PRIMARY KEY IDENTITY(1,1),
ProductName NVARCHAR(100) NOT NULL,
Price DECIMAL(10,2) NOT NULL CHECK(Price > 0),
StockQuantity INT NOT NULL,
CategoryID INT NOT NULL,
 CONSTRAINT FK_Products_Categories 
        FOREIGN KEY (CategoryID) REFERENCES Categories(Id)
);



CREATE TABLE Orders (
Id INT PRIMARY KEY IDENTITY(1,1),
CustomerID INT NOT NULL,
OrderDate DATETIME NOT NULL DEFAULT GETDATE(),
Status VARCHAR(20) NOT NULL CHECK(Status IN ('pending', 'shipped', 'delivered')),
TotalAmount DECIMAL(10,2) NOT NULL,
CONSTRAINT FK_Orders_Customers
FOREIGN KEY (CustomerID) REFERENCES Customers(Id)
);



CREATE TABLE OrderDetails (
OrderID INT NOT NULL,
ProductID INT NOT NULL,
Quantity INT NOT NULL CHECK(Quantity > 0),
UnitPrice DECIMAL(10,2) NOT NULL,
CONSTRAINT PK_OrderDetails PRIMARY KEY (OrderID, ProductID),
CONSTRAINT FK_OrderDetails_Orders FOREIGN KEY (OrderID) REFERENCES Orders(Id),
CONSTRAINT FK_OrderDetails_Products FOREIGN KEY (ProductID) REFERENCES Products(Id)
);




INSERT INTO Customers (FirstName, LastName, Email)
VALUES
('Lena', 'Ivanova', 'lena@mail.com'),
('Maks', 'Petrov', 'mpetrov@mail.com'),
('Kate', 'Middleton', 'katy@mail.com'),
('Petr', 'Tkachenko', 'ptkachenko1990@mail.com'),
('Alex', 'Gotka', 'gotka@mail.com');


INSERT INTO Categories(CategoryName, Description)
VALUES
('Electronics', 'Phones and gadgets'),
('Clothing', 'Men and Women apparel'),
('Home', 'Home essentials');


INSERT INTO Products(ProductName, Price, StockQuantity, CategoryID)
VALUES
('Laptop Pro 15', 1500.00, 5, 1),
('Smartphone X', 900.00, 12, 1),
('Wireless Headphones', 150.00, 20, 1),
('Smart Watch', 250.00, 15, 1),
('Tablet 10"', 600.00, 8, 1),

('T-shirt Basic', 25.00, 100, 2),
('Jeans Classic', 70.00, 40, 2),
('Hoodie Warm', 90.00, 25, 2),
('Sneakers Run', 120.00, 30, 2),
('Winter Jacket', 220.00, 10, 2),
('Vacuum Cleaner', 159.99, 15, 3),
('Candles', 5.99, 10, 3);


INSERT INTO Orders(CustomerID, Status, TotalAmount)
VALUES
(1, 'pending', 0),
(1, 'shipped', 0),
(1, 'delivered', 0),

(2, 'pending', 0),
(4, 'shipped', 0),
(2, 'delivered', 0),

(3, 'pending', 0),
(3, 'pending', 0),
(4, 'shipped', 0),
(3, 'delivered', 0),

(1, 'pending', 0),
(2, 'shipped', 0),
(5, 'delivered', 0),
(1, 'shipped', 0),
(5, 'pending', 0);

INSERT INTO OrderDetails (OrderID, ProductID, Quantity, UnitPrice)
VALUES
-- Order 1 (Customer 1, pending)
(1, 1, 1, 1500.00),
(1, 6, 2, 25.00),

-- Order 2 (Customer 1, shipped)
(2, 2, 1, 900.00),

-- Order 3 (Customer 1, delivered)
(3, 10, 1, 220.00),
(3, 8, 1, 90.00),

-- Order 4 (Customer 2, pending)
(4, 3, 2, 150.00),

-- Order 5 (Customer 4, shipped)
(5, 4, 1, 250.00),
(5, 6, 3, 25.00),

-- Order 6 (Customer 2, delivered)
(6, 5, 1, 600.00),

-- Order 7 (Customer 3, pending)
(7, 9, 1, 120.00),
(7, 7, 1, 70.00),

-- Order 8 (Customer 3, pending)
(8, 6, 4, 25.00),

-- Order 9 (Customer 4, shipped)
(9, 2, 1, 900.00),
(9, 3, 1, 150.00),

-- Order 10 (Customer 3, delivered)
(10, 1, 1, 1500.00),

-- Order 11 (Customer 1, pending)
(11, 8, 2, 90.00),

-- Order 12 (Customer 2, shipped)
(12, 4, 1, 250.00),

-- Order 13 (Customer 5, delivered)
(13, 10, 1, 220.00),

-- Order 14 (Customer 1, shipped)
(14, 5, 1, 600.00),
(14, 6, 2, 25.00),

-- Order 15 (Customer 5, pending)
(15, 7, 1, 70.00),
(15, 9, 1, 120.00);


UPDATE Orders
SET TotalAmount = (
    SELECT SUM(Quantity * UnitPrice)
    FROM OrderDetails
    WHERE OrderDetails.OrderID = Orders.Id
);





SELECT * FROM Customers
SELECT * FROM Categories
SELECT * FROM Products
SELECT * FROM Orders
SELECT * FROM OrderDetails




--1case
--all clients
SELECT * FROM Customers;

--all goods which is available
SELECT ProductName,Price, StockQuantity FROM Products
WHERE StockQuantity > 0;


--2case Join orders plus customers
SELECT
o.Id As OrderId,
c.FirstName,
c.LastName,
o.[Status],
o.TotalAmount
FROM [Orders] AS o
INNER JOIN Customers AS c ON o.CustomerID = c.Id;


--3 case JOIN: order details
SELECT
o.Id AS OrderId,
p.ProductName,
od.Quantity,
od.UnitPrice
FROM OrderDetails AS od
INNER JOIN Orders AS o ON od.OrderId = o.Id
INNER JOIN Products AS p ON od.ProductId = p.Id;

--4 case Total purchase amount by customer
SELECT 
    c.FirstName,
    c.LastName,
    SUM(o.TotalAmount) AS TotalSpent
FROM Customers AS c
INNER JOIN Orders AS o ON c.Id = o.CustomerID
GROUP BY c.FirstName, c.LastName;


--5case top sold products
SELECT 
    p.ProductName,
    SUM(od.Quantity) AS TotalSold
FROM OrderDetails AS od
JOIN Products AS p ON od.ProductID = p.Id
GROUP BY p.ProductName
ORDER BY TotalSold DESC;

--6case sold goods more than 2
SELECT 
    p.ProductName,
    SUM(od.Quantity) AS TotalSold
FROM OrderDetails AS od
JOIN Products AS p ON od.ProductID = p.Id
GROUP BY p.ProductName
HAVING SUM(od.Quantity) > 2;

--7case Customers with orders above the average total amount

SELECT FirstName, LastName
FROM Customers
WHERE Id IN (
    SELECT CustomerID
    FROM Orders
    WHERE TotalAmount > (
        SELECT AVG(TotalAmount) FROM Orders
    )
);

--8case order without goods
SELECT o.Id
FROM Orders AS o
LEFT JOIN OrderDetails AS od ON o.Id = od.OrderID
WHERE od.OrderID IS NULL;