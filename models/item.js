const mangoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        state: ['Texas', 'Outside of Texas']
    },
    PreviousClient: {
        type: Boolean,
        default: false,
    },
    ClientRate: {
        type: Number,
        default: 0,
    }
});

module.exports = Item = mangoose.model('item', ItemSchema);