export default {
    port : 8000,
    host : "0.0.0.0",

    db_url : "mongodb+srv://Admin:veronika2007@cluster0.oh64r.gcp.mongodb.net/stolen-bikes?retryWrites=true&w=majority",

    salt_bcrypt: 10,

    jwt_access_expire: 12*60*60, ///seconds
    jwt_refresh_expire: 24*60*60, /// seconds 
    jwt_access_secret: "access_secret",
    jwt_refresh_secret: "refresh_secret",
}