const entitiesURL = process.env.NODE_ENV === 'local' ? `src/models/**/*.{ts,js}` : `/app/build/models/**/*.js`;
module.exports = {
    "type": "mysql",
    "replication": {
        "master": {
            "host": process.env.TYPEORM_HOST || "localhost",
            "port": process.env.TYPEORM_PORT || 3306,
            "username": process.env.TYPEORM_USERNAME || "root",
            "password": process.env.TYPEORM_PASSWORD || "",
            "database": process.env.TYPEORM_DATABASE || "tg_node"
        },
        "slaves": [
            {
                "host": process.env.TYPEORM_HOST || "localhost",
                "port": process.env.TYPEORM_PORT || 3306,
                "username": process.env.TYPEORM_USERNAME || "root",
                "password": process.env.TYPEORM_PASSWORD || "",
                "database": process.env.TYPEORM_DATABASE || "tg_node"
            }
        ]
    },
    "synchronize": true,
    "logging": false,
    "entities": [entitiesURL],
    "migrations": [`src/migration/**/*.ts`],
    "subscribers": [`src/subscriber/**/*.ts`],
    "cli": {
        "modelsDir": `src/models`,
        "migrationsDir": `src/migration`,
        "subscribersDir": `src/subscriber`
    }
}