const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const UserCtrl = {

    // This is not safe at all, but since it's a school project it's ok right?
    JWT_SECRET: "mysecretkey",

    async verifyUser(username, password) {
        const user = await User.findOne({
        where: { username }
        });

        if (!user) {
        // User not found
        return null;
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
        // Passwords don't match
        return null;
        }

        // User verified
        return user;
    },

    async createUser(username, password) {
        const existingUser = await User.findOne({
        where: { username }
        });

        if (existingUser) {
        // User with the same username already exists
        throw new Error('Username already taken');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
        username,
        password: hashedPassword
        });

        return newUser;
    }

};

module.exports = UserCtrl;
