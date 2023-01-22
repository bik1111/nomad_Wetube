const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email : { type: String, require: true, index:true, unique:true,sparse:true},
    avatarUrl: {type: String} ,
    socialOnly: { type: Boolean, default: false },
    username: { type: String, required: true, unique: true },
    password: { type: String },
    name: { type: String, required: true },
    location: String,
  });

//회원가입 하면서 새로운 유저 create 시 유저의 비밀번호 해쉬화.
userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 5)
})


const User = mongoose.model('User', userSchema);

module.exports = User;