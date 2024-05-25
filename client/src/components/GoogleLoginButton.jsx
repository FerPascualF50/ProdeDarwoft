import { useEffect } from 'react';

const GoogleSignInButton = () => {

  useEffect(() => {
    const handleCredentialResponse = (response) => {
    };

    const loadGoogleSignIn = () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        document.body.appendChild(script);
      } catch (error) {
        console.error('Error during Google Sign-In initialization:', error);
      }
    };

    loadGoogleSignIn();
  }, []);

  return (
    <>
      <div id="g_id_onload"
        data-client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        data-login_uri="http://localhost:4000/api/auth/google"
        data-auto_prompt="false">
      </div>
      <div className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left">
      </div>
      <div id="buttonDiv"></div>
    </>
  );
};

export default GoogleSignInButton;