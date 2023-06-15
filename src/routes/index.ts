import { categories } from "./categories";

import { Router } from "express";

const router: Router = Router();

router.use("/categories", categories);

export { router };
