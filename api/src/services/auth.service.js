import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { UserModel } from '../database/models/user.schema.js';
import jwt from "jsonwebtoken";
import { JWT_SECRET, USER_EMAIL } from "../config.js"

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL_API}auth/google/callback`,
      scope: ['profile', 'email'],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let user = await UserModel.findOneAndUpdate(
          { providerId: profile.id },
          { imageProfile: profile.photos[0].value },
          { new: true }
        );
        if (!user) {
          user = await UserModel.create({
            providerId: profile.id,
            provider: profile.provider,
            displayName: profile.displayName,
            userName: profile.emails[0].value,
            imageProfile: profile.photos[0].value,
            lastName: profile.name.familyName,
            firstName: profile.name.givenName,
          });
        }
        const payload = {
          id: user._id,
          userName: user.userName,
          rol: user.isAdmin,
          firstName: user.firstName,
          imageProfile: user.imageProfile
        };
        const access_token = jwt.sign(payload, process.env.JWT_SECRET);
        done(null, { userData: payload, access_token });
      } catch (error) {
        console.error("Error durante la autenticación de Google:", error);
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;

export const validateTokenService = async (userName) => {
  try {
    const user = await UserModel.findOne({ userName });
    if (!user) throw new Error('Usuario inexistente')
    return user;
  } catch (error) {
    throw error;
  }
};