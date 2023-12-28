import './App.css';
import Child from './Child';

function App() {
  return (
    <>
    <div className='container mt-5'>
      <h3 className='text-center'>React Redux</h3>
      <div className='row ParentDesign'>
        <div className='mt-3 mb-5'>
          <h4 className='text-center'>Parent Component</h4>
        </div>
        <Child/>
      </div>
    </div>
    </>
  );
}

export default App;
