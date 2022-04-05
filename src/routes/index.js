// export all routes
const { Router } = require("express");
const router = Router();

// import all routes
const municipioRoutes = require("./municipioRouter");
const personaRoutes = require("./personaRouter");
const viviendaRoutes = require("./viviendaRouter");

// use all routes
router.use("/municipio", municipioRoutes);
router.use("/persona", personaRoutes);
router.use("/vivienda", viviendaRoutes);

// export router
module.exports = router;
