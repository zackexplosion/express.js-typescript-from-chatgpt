import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

export const addCustomVariable = (req: Request, res: Response, next: NextFunction) => {
  req.customVariable = "This is a custom variable!";
  next();
};

app.use(addCustomVariable);

app.get("/", (req: Request, res: Response) => {
  console.log(req.customVariable); // Output: This is a custom variable!
  res.send("Hello, TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
