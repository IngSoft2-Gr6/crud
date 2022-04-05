const db = require("./config/db.config");

const main = async () => {
	let municipios = await db.models.municipio.findAndCountAll({
		limit: 10,
		offset: 0,
	});

	console.log(JSON.stringify(municipios));
};

main();
