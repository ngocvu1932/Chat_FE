import React from 'react';
import {IMessage} from '../../pages/home/component/content';

interface IMessageProps {
  message: IMessage;
  user: any;
}

const Message: React.FC<IMessageProps> = ({message, user}) => {
  const isSender = message.senderId === user._id;

  return (
    <div className={`flex pb-2 w-full ${isSender ? 'justify-end pr-2' : 'justify-start pl-2'}`}>
      <div className={`${isSender ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-lg p-2 `}>
        {message.content}
      </div>
    </div>
  );
};

export default Message;
