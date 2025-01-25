import {useSelector} from 'react-redux';
import HeaderComp from './component/header';

const HomePage = () => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <div className="flex w-screen h-screen flex-col bg-red-600">
      <div className="flex h-[9%] bg-blue-200">
        <HeaderComp />
      </div>
      <div className="flex h-[91%] bg-green-200">
        <div className="flex w-[25%] bg-yellow-200">sidebar</div>
        <div className="flex w-[75%] bg-yellow-300">content</div>
      </div>
    </div>
  );
};

export default HomePage;
