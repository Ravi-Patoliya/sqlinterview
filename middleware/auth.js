let jwt = require("jsonwebtoken");
let model = require("../models")

module.exports = {
    auth: async (req, res, next) => {
        let token = req.headers.token;
        let decoded = jwt.verify(token, "test")
        if (!decoded)
            return res.status(401).json({ success: false, message: "invalid token" })

        let user = await model.user.findOne({ where: { email_id: decoded.user } }, { raw: true, })

        if (!user)
            return res.status(401).json({
                success: false,
                message: "invalid User",
                payload: {}
            })


        //* store the user detais in request
        req.user = user
        next()
    }
}
