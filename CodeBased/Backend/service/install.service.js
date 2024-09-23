const { query } = require("express");
const conn = require("../config/db.config");
const fs = require('fs');
const { resolve } = require("path");
const { rejects } = require("assert");

async function install() {
    const queryFile = __dirname + '/sql/initial-queries.sql';
    console.log(queryFile);

    let queries = [];
    let finalMessage = {};
    let tempLine = '';

    const lines = await fs.readFileSync(queryFile, 'utf-8').split('\n');

    await new Promise((resolve, reject) => {
        lines.forEach((line) => {
            if (line.trim().startsWith('--') || line.trim() === '') {
                return;
            }
            tempLine += line;
            if (line.trim().endsWith(';')) {
                const sqlQuery = tempLine.trim();
                queries.push(sqlQuery);
                tempLine = '';
            }
        });
        resolve("queries are added to the list");
    });

    for (let i = 0; i < queries.length; i++) {
        try {
            const result = await conn.query(queries[i]);
            console.log("Query executed:", queries[i]);
        } catch (err) {
            console.error("Error executing query:", queries[i], "\nError:", err);
            finalMessage.message = "not all tables are created";
            break;
        }
    }

    if (!finalMessage.message) {
        finalMessage.message = "all tables are created";
        finalMessage.status = 200;
    } else {
        finalMessage.status = 500;
    }

    return finalMessage;
}

module.exports = {
    install
};
