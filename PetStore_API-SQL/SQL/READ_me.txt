The project shows practical SQL usage for QA tasks such as data validation, reporting, and business logic verification.


SQL Portfolio: E-commerce Database Testing & Analysis
This project demonstrates database design and testing expertise for an E-commerce system. It showcases T-SQL (MS SQL Server) proficiency, ranging from schema architecture to complex analytical queries designed to verify data integrity and business logic.

📌 Project Overview
The project models an online store backend consisting of 5 interconnected tables:

Customers: User profiles and registration data.

Categories: Product classification.

Products: Inventory management and pricing.

Orders: Order tracking and status management.

OrderDetails: Line items for each order (Many-to-Many relationship).

🛠 Tech Stack
Database: Microsoft SQL Server (T-SQL)

Core Concepts: Primary/Foreign Keys, Constraints (CHECK, UNIQUE, DEFAULT), Joins, Subqueries, Aggregations, Data Validation.

🏗 Database Schema (ER)
The database is designed with normalization principles in mind:

Relationships: One-to-Many (Category -> Products, Customer -> Orders) and Many-to-Many (Orders <-> Products via OrderDetails).

Integrity: Implemented FOREIGN KEY constraints to prevent "orphan" records and CHECK constraints for price/quantity validation.

🔍 Key QA Testing Scenarios
The following queries demonstrate my ability to test backend logic and verify business requirements:

1. Order Total Calculation Testing
To verify the accuracy of backend services or triggers calculating TotalAmount, I implemented a script for bulk updates and cross-validation:

SQL

UPDATE Orders
SET TotalAmount = (
    SELECT SUM(Quantity * UnitPrice)
    FROM OrderDetails
    WHERE OrderDetails.OrderID = Orders.Id
);
2. Data Integrity Check (Negative Testing)
Scenario: Identifying "empty orders" (orders without items). This query helps detect bugs in the checkout process where a header is created without corresponding line items:

SQL

-- Searching for orders that have no matching records in OrderDetails
SELECT o.Id FROM Orders AS o
LEFT JOIN OrderDetails AS od ON o.Id = od.OrderID
WHERE od.OrderID IS NULL;
3. Comprehensive Data Validation (Complex Joins)
Demonstrating the ability to aggregate data from multiple sources to sync UI elements with the database:

Query: Retrieves full order composition including product names, quantities, and historical unit prices.

4. Analytical Reporting (Aggregation & Filtering)
Using GROUP BY and HAVING to verify frontend filters like "Best Sellers" or "Popular Items":

Query: Filters products sold in quantities greater than 2 to validate popularity-based algorithms.

5. Advanced Subqueries (Customer Segmentation)
Testing customer segmentation logic, such as identifying VIP clients who spend more than the average:

Query: Uses nested SELECT statements to dynamically calculate the average order value and filter top-spending customers.

🚀 How to Run
Open SQL Server Management Studio (SSMS) or any SQL-compatible tool.

Copy the contents of SQLQuery Portfolio_Mariia Stolbtsova.sql

Execute the script to create the schema, seed the data, and run the test scenarios.