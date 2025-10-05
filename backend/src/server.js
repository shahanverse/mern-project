import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("server started on PORT:5001");
});


//mongodb+srv://shahanverse_db_user:LEEm54qppYFgORVP@cluster0.k9zywty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0