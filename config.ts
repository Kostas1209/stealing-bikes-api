export default {
    port : 8000,
    host : "0.0.0.0",

    db_port : 27017,
    db_host: `mongodb://localhost`,
    db_name: "stolen_bikes",

    salt_bcrypt: 10,

    jwt_access_expire: 12*60*60, ///seconds
    jwt_refresh_expire: 24*60*60, /// seconds 
    jwt_access_secret: "access_secret",
    jwt_refresh_secret: "refresh_secret",
}