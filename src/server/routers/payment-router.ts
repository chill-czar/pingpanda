import { router } from "../__internals/router";
import { privateProcedure } from "../procedures";
import { Sessions } from './../../../node_modules/stripe/esm/resources/BillingPortal/Sessions';

export const paymentRouter = router({
    createCheckoutSession: privateProcedure.mutation( async({c,ctx})=>{
        const {user} = ctx 

        const sessions = await createCheckoutSession({
            userEmail: user.email,
            userId: user.id
        })

        return c.json({url: "TO BE DONE"})
    })
})