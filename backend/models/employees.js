var connection = require('../connection');
// var async = require('async');
var _ = require('underscore');

function Employees() {
    this.createTable = function (res) {
        connection.acquire(function (err, con) {
            var queryString = "CREATE TABLE employee (" +
                "id  INT AUTO_INCREMENT NOT NULL, " +
                "name VARCHAR (50)     NOT NULL," +
                "userName  CHAR (50) NOT NULL UNIQUE," +
                "birthday  DATE        ," +
                "sex CHAR (50)," +
                "country CHAR (50)," +
                "position VARCHAR (50), " +
                "department VARCHAR (50)," +
                "PRIMARY KEY (id));"
            con.query(queryString, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    }

    this.get = function (res) {
        connection.acquire(function (err, con) {
            con.query('select * from `employee`', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (field_data, res) {
        connection.acquire(function (err, con) {
            var fieldValues = [];
            var fieldNames = Object.keys(field_data);
            fieldNames.forEach((key) => {
                fieldValues.push("'" + field_data[key] + "'");
            });
            var queryString = "insert into `employee`(" + fieldNames.join(',') + ") values (" + fieldValues.join(',') + ")";
            con.query(queryString, function (err, result) {
                con.release();
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        res.send({ status: 2, message: 'User name already existed' });
                    } else {
                        res.send({ status: 1, message: 'Employee creation failed' });
                    }
                } else {
                    res.send({ status: 0, message: 'Employee created successfully' });
                }
            });
        });
    };

    this.update = function (field_data, res) {
        connection.acquire(function (err, con) {
            var queryList = [];
            Object.keys(field_data).forEach((key) => {
                queryList.push(key + "='" + field_data[key] + "'");
            });
            var queryString = "update `employee` set " + queryList.join(",") + "where id='" + field_data.id + "'";
            con.query(queryString, function (err, result) {
                con.release();
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        res.send({ status: 2, message: 'User name already existed' });
                    } else {
                        res.send({ status: 1, message: 'Employee update failed' });
                    }
                } else {
                    res.send({ status: 0, message: 'Employee updated successfully' });
                }
            });
        });
    };

    this.read = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('select * from `employee` where id = ' + id, function (err, result) {
                con.release();
                res.send(result[0]);
            });
        });
    };

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('delete from `employee` where id = ' + id, function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Failed to delete' });
                } else {
                    res.send({ status: 0, message: 'Deleted successfully' });
                }
            });
        });
    };
}
module.exports = new Employees();