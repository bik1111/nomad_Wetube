const mongoose = require('mongoose');




const videoSchema = new mongoose.Schema({
    title: {type: String, required: true },
    description: {type: String, required: true},
    createdAt: { type: Date, required: true, default : Date.now},
    hashtags: [{ type: String}],
    meta: {
        views: {type: Number, default : 0, required: true},
        rating: {type: Number, default : 0, required: true},
    },


});

// hashtag 에 대한 static 함수를 설정해 특정 조건을 만족시키면서 controller 함수를 실행할 수 있도록 설정함.
videoSchema.static('formatHashtags', function(hashtags) {
    return  hashtags.split(',').map(word => (word.startsWith('#')? word : `#${word}`))
})


const Video = mongoose.model("Video", videoSchema);

module.exports = Video;