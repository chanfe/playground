const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    stars: Number,
    review: String,
    note: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }
}, {
    timestamps: true
});

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review