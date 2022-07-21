const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID:"313426930988-jbt28usmbl9fkl03vdo9viufemevoh5r.apps.googleusercontent.com",
			clientSecret:"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",
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
