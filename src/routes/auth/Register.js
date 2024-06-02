import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';


export default function Register({username, password, setUsername, setPassword}) {
  return (
    <div className="content">
      <h1>Create a new account</h1>
      <Input type="text" label="Username" value={username} setValue={setUsername}/>
      <Input type="password" label="Password" value={password} setValue={setPassword}/>
      <div className="button-container">
        <Button label="Sign Up"/>
      </div>
    </div>
  )
}
