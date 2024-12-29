import express, { Request, Response} from "express";
import { addCustomVariable } from "./middlewares/add-custom-variable";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(addCustomVariable);

app.get("/", (req: Request, res: Response) => {
  console.log(req.customVariable); // Output: This is a custom variable!
  res.send("Hello, TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
