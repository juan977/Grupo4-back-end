import express from "express";
import morgan from "morgan";
import contribuyenteroutes from "./routes/contribuyente.routes";
import distritoroutes from "./routes/distrito.routes";
import tipoviaroutes from "./routes/tipovia.routes";
import tipodocumentoroutes from "./routes/documento.routes";
import trabajadorroutes from "./routes/trabajador.routes";
import predioroutes from "./routes/predio.routes";
import authRoutes from "./routes/auth.routes";
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(
    "<h1>Bienvenidos al Backend de la Municipalidad</h1><p>Desarrollado por Alumonos de la UpeU</p>"
  );
});
app.use("/api/auth/contribuyente", contribuyenteroutes);
app.use("/api/auth/distrito", distritoroutes);
app.use("/api/auth/predio", predioroutes);
app.use("/api/auth/tipovia", tipoviaroutes);
app.use("/api/auth/documento", tipodocumentoroutes);
app.use("/api/auth/trabajador", trabajadorroutes);
app.use("/api/auth", authRoutes);
app.use("/api/auth/movil", authRoutes);
export default app;
