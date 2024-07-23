import { useState} from "react";
import { ref as dfRef, set } from "firebase/database";
import { ref as stRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleImageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { username: username });
      const storageRef = stRef(storage, `profilePictures/${user.uid}`);
      await uploadBytes(storageRef, profilePicture);

      const profilePictureUrl = await getDownloadURL(storageRef);

      const userRef = dfRef(db, `users/${user.uid}`);
      await set(userRef, {
        email: user.email,
        username: username,
        profilePicture: profilePictureUrl,
      });
      navigate("/chat");
    } catch (error) {
      setError("Unsuccessfull Login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span>Lama Chat</span>
        <span>Register</span>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type={showPassword?'text':'password'}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={handleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <input
            required
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={handleImageChange}
          />
          <label htmlFor="file">
            <BiImageAdd />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
