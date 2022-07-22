import React from 'react'
import "./Login.css"
const Login = () => {

  return (
    <>
    <div className='main'>
        <div className='submain'>
            <h1>Welcome to the world of Bewakoof!</h1>
            <img src="https://images.bewakoof.com/web/group-19-1617704502.png"/>
        </div>


        <div className='submain'>
            <h2>Log in / Sign up</h2>
            <p style={{
                        color:"gray",
                        marginBottom: "50px",
                        fontWeight: "bold"
                }}
                >for Latest trends, exciting offers and everything Bewakoof!
            </p>
            <input style={{
                           width:"375px",
                           height:"50px",
                           borderRadius:"5px",
                           textAlign: "center",
                           fontSize: "15px",
                           marginTop:"30px"

                        }} 
                   id="mobile_number"  name="mobile" placeholder="Enter Mobile Number" maxlength="10" data-phonecode="+91" 
            />
            <br/>
            <button style={{backgroundColor: "#00AFAF",
                            border: "none",
                            color: " white",
                            padding: "15px 32px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
                            borderRadius:"5px",
                            width:"380px",
                            marginTop:"5px"
                            }}>Continue
            </button>
            <br/>
            <hr style={{marginBottom: "50px",width:"400px", marginTop:"50px" }}/>

            <button style={{
                    backgroundColor: "white",
                    border: "none",
                    color: " #6B6B6B",
                    padding: "5px 40px 10px 40px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    border: "1px solid black",
                    borderRadius:"5px",
                    margin:"10px",
                    width:"370px"
            }}>
                <img style={{width:"20px", margin:"5px 15px 0px 10px",}} src="https://images.bewakoof.com/web/carbon-email-1620039620.png"/>
                 CONTINUE WITH EMAIL
            </button>
            <div>
                <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=800081634217-rbfe00vph9bbuk3cldi3hfemufs7r2bd.apps.googleusercontent.com&scope=openid%20email%20profile&redirect_uri=https%3A%2F%2Fapp.clockify.me%2Flogin&state=MC43aGt4Z3gwMzl6Zw%3D%3D&nonce=MC5ybWpzYjE0MW1iaQ%3D%3D&flowName=GeneralOAuthFlow">
                   <button style={{
                     backgroundColor: "white",
                     border: "none",
                     color: " #6B6B6B",
                     padding: "5px 40px 5px 30px",
                     textAlign: "center",
                     textDecoration: "none",
                     display: "inline-block",
                     fontSize: "16px",
                     border: "1px solid black",
                     borderRadius:"5px",
                     margin:"10px"
                   }} >
                    <img style={{width:"20px", margin:"5px 15px 0px 10px",}}  src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"/>
                     GOOGLE
                    </button>
                </a>

                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1548728332017744&kid_directed_site=0&app_id=1548728332017744&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D1548728332017744%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_gender%252Cuser_hometown%252Cuser_location%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.bewakoof.com%252Flogin%252Ffacebook%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dba16d91c-1c50-4965-97e6-31128372d4c2%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.bewakoof.com%2Flogin%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
                    <button  style={{
                        backgroundColor: "white",
                        border: "none",
                        color: " #6B6B6B",
                        padding: "5px 25px 5px 20px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                        border: "1px solid black",
                        borderRadius:"5px",
                        margin:"10px",
                    }} >
                        <img style={{width:"20px", margin:"5px 15px 0px 10px",}} src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"/>
                        FACEBOOK
                    </button>
                </a>

                <small style={{textAlign: "left" }}>
                    <p class="termsAndConditions" 
                    style={{width:"450px",
                            height:"30px",
                            margin:"auto",
                            marginTop: "30px",
                            color:"gray" 
                            }}>
                        By creating an account or logging in, you agree with Bewakoof's
                        <a style={{textDecoration: "none",color:"#1CB4C0"}} href="https://www.bewakoof.com/terms-and-conditions" target="_blank">
                            Terms and Conditions </a>
                            and 
                        <a style={{textDecoration: "none",color:"#00AFAF"}} href="https://www.bewakoof.com/privacy-policy-and-disclaimer" target="_blank">Privacy Policy</a>.
                    </p>
                </small>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login