const User = require("../../data/model/User");

const UserController = {

    register: async (req, res) => {
        const { email, password } = req.body ;

        if (!email || !password) {
            return res.status(400).send("Missing required fields");
        }

        const oldUser = await User.findByPk(email.toLowerCase());

        if(oldUser) {
            return res.status(409).send("User already exists");
        }

        let data = {
            email: email.toLowerCase(),
            password: password
        }
        
        let user = new User();
        user.email = data.email;
        user.password = await user.encodePassword(password)

        user = await user.save();
        
        user.token = await user.generateToken(user.id, user.email);

        const result = await user.save()

        res.status(201).json(result);
    },
};

module.exports = UserController;