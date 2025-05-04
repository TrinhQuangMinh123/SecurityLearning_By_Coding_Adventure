import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create( {
            ...req.body,
            user: req.user._id
        });

        res.status(201).json({success: true, data: subscription});
    } catch (error) {
        next(error);
    }
}

export const getUserSubscription = async (req, res, next) => {
    try{
        //protection against LFI: Check if the user requesting is the same as the one in the token
        //also a strict comparison in !==
        if(req.user.id !== req.params.id) {
            const error = new Error('You are not the Owner of this account!');
            error.status = 404;
            throw error;
        }

        const subscriptions = await Subscription.find({user: req.params.id});

        res.status(200).json({success: true, data: subscriptions});
    } catch(e){
        next(e);
    }
}