let model = require("../models");
let jwt = require("jsonwebtoken");

module.exports = {
    loginUser: async (req, res) => {
        try {
            let { email, password } = req.body;
            let user = await model.user.findOne({ where: { email_id: email } },{raw: true,})

            if (!user) return res.status(404).json({
                success: false,
                message: "user not found",
                payload: {}
            })

            if (user.password != password) return res.status(400).json({
                success: false,
                message: "invalid password",
                payload: {}
            })

            // create jwt token
            var token = jwt.sign({ user: user.email_id }, 'test');

            user = {...user.dataValues,token}
            res.status(200).json({
                success: true,
                message: "user login successfully",
                payload: {
                    user: user
                }
            })
        } catch (err) {
            console.log("error during login user", err)
        }
    },
    getUserOrders:async(req,res)=>{
        try{
            let order = await model.order.findAll()
            res.status(200).json({
                success: true,
                message: "order fetched success fully",
                payload: {
                    orders: order
                }
            })

        }catch(err){
            console.log(err, "error during fetching user orders")
        }

    }

}