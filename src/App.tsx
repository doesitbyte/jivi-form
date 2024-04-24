import JiviForm from './jivi-form/components/Form';
import './App.css';

const App = () => {
  return (
    <div className="flex justify-center font-jivi bg-white">
      <div className='w-full max-w-[746px] min-h-screen max-h-screen'>
        <JiviForm />
      </div>
    </div>
  );
}

export default App