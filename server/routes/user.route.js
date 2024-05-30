// backend/routes/userRoutes.js
import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
  const { username, fullName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      fullName,
      email,
      password: hashedPassword,
    });

    // Save user to database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password,userType } = req.body;

  try {
    // Find user in the database by username or email
    const user = await User.findOne({
      $and: [
        { $or: [{ username }, { email: username }] }, // Username or email
        { userType: userType } // User type
      ]
    });

    if (!user) {
      // User not found, return error response
      return res.status(401).json({ message: 'Invalid username or password or User Type' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Passwords don't match, return error response
      return res.status(401).json({ message: 'Invalid username or password or User Type' });
    }

    // Passwords match, login successful, return success response
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
