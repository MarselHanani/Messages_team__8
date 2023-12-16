import React, { useState, useEffect } from 'react';
import './styles.css';
import { ref, onValue, push } from 'firebase/database';
import { database } from './firebase';

const users = [
{ id: '1', name: 'marsel' },
{ id: '2', name: 'yahya' },
{ id: '3', name: 'omar' },
{ id: '4', name: 'rama' },
{ id: '5', name: 'besan' }
];

const ChatDisplay = ({ userId }) => {
const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, 'messages/' + userId);
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = [];
      for (const key in data) {
        loadedMessages.push(data[key]);
      }
      setMessages(loadedMessages);
    });
  }, [userId]);

  return (
    <div className="chat-display">
      {messages.map((msg, index) => <div key={index}>{msg}</div>)}
    </div>
  );
};

const MessageInput = ({ userId }) => {
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    const messagesRef = ref(database, 'messages/' + userId);
    push(messagesRef, newMessage);
    setNewMessage('');
  };

  return (
    <div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

const UserCard = ({ user, onSelectUser }) => (
  <div className="user-card" onClick={() => onSelectUser(user.id)}>
    {user.name}
  </div>
);

const App = () => {
  const [activeChatUserId, setActiveChatUserId] = useState(null);

  const handleSelectUser = (userId) => {
    setActiveChatUserId(userId);
  };

  return (
    <div className="app-container">
      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} onSelectUser={handleSelectUser} />
        ))}
      </div>
      <div className="chat-container">
        {activeChatUserId ? (
          <>
            <ChatDisplay userId={activeChatUserId} />
            <MessageInput userId={activeChatUserId} />
          </>
        ) : (
          <div>Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default App;
