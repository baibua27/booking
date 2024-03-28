const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {PrismaClient} =require('@prisma/client')

const prisma = new PrismaClient()

  exports.register = async (req, res, next) => {
    const { name, password, confirmPassword, email, role, phone } = req.body;
    try {
      // validation
      if (!(name && password && confirmPassword && email && role && phone)) {
        return next(new Error("Fulfill all inputs"));
      }
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const data = {
      name,
      password: hashedPassword,
      email,
      role,
      phone
    };

    res.json({ msg: 'Register successful' })
  } catch (err) {
    next(err);
  }
};


exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password must be provided' });
    }

    // Find user in the database
    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid login credentials' });
    }

    // Issue JWT token
    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.json({ token });
  } catch (err) {
    next(err);
  }
};

exports.getme = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};