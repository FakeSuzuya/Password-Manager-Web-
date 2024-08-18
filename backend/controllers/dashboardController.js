const bcrypt = require('bcryptjs');
const Password = require('../models/Password');

exports.storePassword = async (req, res) => {
    const { site, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const newPassword = new Password({
        userId: req.user.id,
        site,
        username,
        password: hashedPassword,
    });

    await newPassword.save();
    res.status(201).json({ message: 'Mot de passe enregistré avec succès.' });
};
