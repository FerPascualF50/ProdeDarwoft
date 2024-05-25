import  passport from '../services/auth.service.js';
import { validateTokenService } from '../services/auth.service.js';

export const googleAuth = (req, res, next) => {
  try {
    if (!req.body.credential) throw new Error('Without Credentials')
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

export const googleAuthCallback = (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      console.error("Error durante la autenticación de Google:", err);
      return res.redirect('/login/failed');
    }
    if (!user) {
      return res.redirect('/login/failed');
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error("Error durante el inicio de sesión:", err);
        return next(err);
      }
      const userData = user.userData;
      const access_token = user.access_token;
      const redirectUrl = `http://localhost:5173/bet#${encodeURIComponent(JSON.stringify({ userData, access_token }))}`;
      res.redirect(redirectUrl);
    });
  })(req, res, next);
};

export const logout = (req, res) => {
  console.log("Cerrando sesión...");
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};

export const validateToken = async (req, res) => {
  try {
    const { userName } = req.user;
    const user = await validateTokenService(userName)
    return res.json({ success: true, response: user })
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};