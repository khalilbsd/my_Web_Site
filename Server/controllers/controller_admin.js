import Admin from '../models/admin__schema.js'

export const getInformation_admin = async (req, res) => {
    try {
        const admin = await Admin.find();
        console.log(admin)
        res.status(200).json(admin)
    } catch (error) {
        console.error();
        res.status(404).json({
            message: error.message
        })
    }
}

