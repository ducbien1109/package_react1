import './App.css';
import FunctionComponent from './functionComponent/FunctionComponent';
import FunctionMyClass from './functionComponentMyClass/FunctionMyClass';
import FunctionInlineStyle from './functionInlineStyle/FunctionInlineStyle';
import TiltePage from './pageVti/tiltePage/TiltePage';
import Login from './formLogin/Login';
import FullName from './functionUsername/FullName';
import Blog from './blog/Blog';
function App() {
  return (
    <div className="">
      <FunctionComponent/>
      <FunctionMyClass/>
      <FunctionInlineStyle/>
      <TiltePage/>
      <Login/>
      <FullName/>
      <Blog/>
    </div>
  );
}
export default App;
