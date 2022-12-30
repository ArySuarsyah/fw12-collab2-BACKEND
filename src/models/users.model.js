const db = require('../helper/db.helper');





exports.createUser = (data,cb)=> {
    const sql = 'INSERT INTO users("email", "password", "phoneNumber") VALUES ($1, $2, $3) RETURNING *';
    const value = [data.email, data.password.data.phoneNumber];
    db.query(sql, value, cb)
}