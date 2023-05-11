import bcrypt from 'bcrypt';
import { pool } from './server.js';

export const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            `INSERT INTO users (fullname, email, password, create_datetime)
            VALUES ($1, $2, $3, NOW()) RETURNING *`,
            [fullname, email, hashedPassword]
        );
        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({error: 'Server error'});
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await pool.query(`SELECT * FROM users 
        WHERE email = $1`, [email]);

        if (user.rows.length === 0) {
            return res.status(401).json({error: 'Invalid Credential'});
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json({error: 'Invalid Credentials'});
        }


        res.json({message: 'Login successful', user: user.rows[0]});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: 'Server error'});
    }
};
