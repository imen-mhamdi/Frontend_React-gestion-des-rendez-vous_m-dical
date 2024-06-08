import React from 'react';
import './ChatList.css';
import ChatListItems from './ChatListItems';

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allChats: [
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
          id: 1,
          name: 'Slim Kassar',
          active: true,
          isOnline: true,
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
          id: 3,
          name: 'Sofiène Ayadi',
          active: false,
          isOnline: false,
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU',
          id: 4,
          name: 'Mazen Kallel',
          active: false,
          isOnline: true,
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
          id: 5,
          name: 'Moncef Guiga',
          active: false,
          isOnline: false,
        },
        {
          image:
            'https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png',
          id: 6,
          name: 'nawress',
          active: false,
          isOnline: true,
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
          id: 7,
          name: 'Taher Djemal',
          active: false,
          isOnline: true,
        },

      ],
    };
  }

  render() {
    return (
      <div className="main__chatlist">
        <div className="chatList_search">
          <div className="search_wrap">
            <input type="text" placeholder="search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="chatlist__items">
            {this.state.allChats.map((item, index) => (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? 'active' : ''}
                isOnline={item.isOnline ? 'active' : ''}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ChatList;
