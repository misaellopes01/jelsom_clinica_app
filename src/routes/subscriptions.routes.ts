import multer from "multer";
import uploadConfig from "../config/upload"
import { Router } from "express";
import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";
import { CreateSubscriptionsController } from "../modules/subscriptions/useCases/createSubscriptions/CreateSubscriptionsController";
import { ensureAdmin } from "../shared/infra/http/middlwares/ensureAdmin";
import { ListAllSubscriptionsController } from "../modules/subscriptions/useCases/listAllSubscriptions/ListAllSubscriptionsController";


const subscriptionRoutes = Router()

subscriptionRoutes.post(
    "/create_subscription",
    ensureAuthenticated,
    new CreateSubscriptionsController().handle
  );

subscriptionRoutes.get('/all', ensureAuthenticated, ensureAdmin, new ListAllSubscriptionsController().handle)

export { subscriptionRoutes }