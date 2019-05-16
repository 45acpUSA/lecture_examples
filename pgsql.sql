-- Relational Databases
-- Postgresql is part of a family of relational databases
-- SQL Server, mysql, sqlite

-- Joins
-- Allows you to select from multiple tables

-- A Simple Join

SELECT
	country.code,
	country.name,
	countrylanguage.language
FROM
	country JOIN countrylanguage ON country.code = countrylanguage.countrycode

-- Joins with Aliases

SELECT
	c.code,
	c.name,
	cl.language
FROM
	country c JOIN countrylanguage cl ON c.code = cl.countrycode

-- Joining on a WITH

WITH populated_countries AS (
	SELECT *
	FROM
		country
	WHERE
		population > 0
)
SELECT *
FROM
  country c_1 JOIN populated_countries c ON c_1.code = c.code

-- Joins: USING and ON

-- For ON you must specify the table and column
SELECT
	country.code,
	country.name,
	countrylanguage.language
FROM
	country JOIN countrylanguage ON country.code = countrylanguage.countrycode

-- For USING you just specify column

SELECT
	c.first_name,
	r.rental_date
FROM
	customers c JOIN rentals r USING (customer_id)

-- Outer Joins

SELECT
	country.name as country_name,
	city.name as capital
FROM
	country RIGHT JOIN city ON country.capital = city.id


-- A visual resource https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins
-- lecture video link from today: https://www.youtube.com/watch?v=9minwvsiOWg
