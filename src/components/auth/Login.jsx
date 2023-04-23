import React,{useState, useContext, useEffect} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../apis/firebase/FireBase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ModalContext } from "./../../apis/ModalContext";

const Login = () => {
  let { setShow } = useContext(ModalContext);
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  //  let [confirmPassword, setConfirmPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      setShow(false);
      
        // toast.error("Password is not matched");
     
        await signInWithEmailAndPassword(email, password);

        toast.success("successfully user login");
        navigate("/");
      
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          placeholder="enter an email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          placeholder="enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button onClick={() => signInWithEmailAndPassword(email, password)}>
          Login
        </button>
      </div>
    </form>
  );
};

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     if (user) navigate("/");
//   }, [user, loading]);
//   return (
//     <div className="login">
//       <div className="login__container">
//         <input
//           type="text"
//           className="login__textBox"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="login__textBox"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button
//           className="login__btn"
//           onClick={() => signInWithEmailAndPassword(email, password)}
//         >
//           Login
//         </button>
//         {/* <button className="login__btn login__google" onClick={signInWithGoogle}>
//           Login with Google
//         </button> */}
//         {/* <div>
//           <Link to="/reset">Forgot Password</Link>
//         </div> */}
//         {/* <div>
//           Don't have an account? <Link to="/register">Register</Link> now.
//         </div> */}
//       </div>
//     </div>
//   );
// }

export default Login;


// import React, { useState } from "react";
// import Styles from "./auth.module.css";
// import { FaFacebookF } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { toast } from "react-toastify";
// import { auth } from "../../apis/firebase/firebase";

// const Loginform = ({ setshow }) => {
//   let [password, setPassword] = useState("");
//   let [email, setEmail] = useState("");
//   let [loading, setLoading] = useState(false);
//   let [user, setUsers] = useState({});
//   onAuthStateChanged(auth, currentUser => {
//     setUsers(currentUser);
//     setLoading(false);
//   });
//   let logOut = async e => {
//     await signOut(auth);
//     setLoading(false);
//   };
//   let handlingForm = async e => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       toast.success("suceesfullu sign in");
//       // setshow(false);
//       await signInWithEmailAndPassword(auth, email, password);
//       setEmail("");
//       setPassword("");
//     } catch (error) {
//       console.log(error);
//       toast.error("somthing wrong enter correct details");
//     }
//     setLoading(false);
//   };
//   return (
//     <>
//       <>
//         <form onSubmit={handlingForm}>
//           <div>
//             <input
//               type="email"
//               placeholder="E-mail"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <button>Sign In</button>
//           </div>
//         </form>
//         <button onClick={logOut}>Sign Out</button>
//         <h1>email: {user?.email}</h1>
//       </>
//     </>
//   );
// };

// export default Loginform;