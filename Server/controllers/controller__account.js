import Account  from "../models/account__schema";

export const getAccount_admin = async (req, resp) => {
    try {
        const account = await Account.find();
        console.log(account)
        resp.status(200).json(account)
    } catch (error) {
        console.error();
        resp.status(404).json({
            message: error.message
        })
    }
}

