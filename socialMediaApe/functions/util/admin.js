const admin=require('firebase-admin')

const db=admin.firestore()

db.settings({ ignoreUndefinedProperties: true })

module.exports={admin,db}