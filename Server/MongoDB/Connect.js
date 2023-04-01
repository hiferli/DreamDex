import mongoose from 'mongoose'

const connectDatabase = (url) => {
    // When the strict option is set to true, Mongoose will ensure that only the fields that are specified in your schema will be saved in the database
    mongoose.set("strictQuery" , true)

    mongoose.connect(url).then(
            () => {
                console.log("Database Connected Successfully")
            }
        ) .catch(
            (e) => {
                console.log("Error connecting to the database: " + e);
            }
        )
}

export default connectDatabase;