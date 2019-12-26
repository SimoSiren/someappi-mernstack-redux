const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

// Mongoose yhteys asetuksineen
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		})

		console.log('MongoDB yhdistetty...')
	} catch (err) {
		console.error(err.message)
		// Jos epäonnistuu, exit process
		process.exit(1)
	}
}

module.exports = connectDB
