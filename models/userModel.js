import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const UserSchema = new Schema({
  username: String,
  password: String,
});
UserSchema.plugin(passportLocalMongoose);

const User = model("User", UserSchema);
export default User;
