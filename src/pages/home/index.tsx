import {useSelector} from 'react-redux';
import HeaderComp from './component/header';
import {useEffect, useState} from 'react';
import chatAPIs from '../../api/chat';
import {IChat} from '../../api/chat/interface';
import Sidebar from './component/sidebar';
import Content from './component/content';
import {IChatSelected} from '../../components/chat';

const HomePage = () => {
  const user = useSelector((state: any) => state.user.user);
  const [listChat, setListChat] = useState<IChat[]>();
  const [loading, setLoading] = useState({chat: true});
  const [selectedChat, setSelectedChat] = useState<IChatSelected | undefined>();
  const [isShowDetailChat, setIsShowDetailChat] = useState(false);

  useEffect(() => {
    getChat();
  }, []);

  const getChat = async () => {
    setLoading((prev) => ({...prev, chat: true}));
    try {
      const res = await chatAPIs.getChats();
      if (res.statusCode === 201) {
        setListChat(res.data);
        setLoading((prev) => ({...prev, chat: false}));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex w-screen h-screen flex-col bg-slate-200">
      <div className="flex h-[8vh] pt-1 px-1">
        <HeaderComp />
      </div>
      <div className="flex p-1 h-[92vh] ">
        <div className="flex w-[20%]">
          <Sidebar
            user={user}
            isLoading={loading.chat}
            chatData={listChat ?? []}
            chatSelected={(chat: IChatSelected) => setSelectedChat(chat)}
          />
        </div>
        <div className="flex w-[80%]">
          <Content
            selectedChat={selectedChat}
            isShowDetailChat={isShowDetailChat}
            setShowDetailChat={(value) => setIsShowDetailChat(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
