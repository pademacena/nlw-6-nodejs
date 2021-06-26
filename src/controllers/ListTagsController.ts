import { Request, Response } from "express";
import { ListaTagsService } from "../services/ListTagsServices";

class ListTagsController {
  async handle(req: Request, res: Response) {
    const listTagsService = new ListaTagsService();

    const tags = await listTagsService.execute();

    return res.json(tags);
  }
}
export { ListTagsController }