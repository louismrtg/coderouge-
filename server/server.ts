import { createServer } from "./index";

const app = createServer();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
