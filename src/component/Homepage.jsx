import React from 'react'
import Post from './Post'
function Homepage() {


  const posts = [
    {
      id: 1,
      profileImg: "https://i.pravatar.cc/50?img=1",
      username: "Rahul",
      time: "2h ago",
      text: "Post Description shown here",
      postImg: null,
    },
    {
      id: 2,
      profileImg: "https://i.pravatar.cc/50?img=2",
      username: "Aisha",
      time: "5h ago",
      text: "Post Description shown here",
      postImg: null,
    },
    {
      id: 3,
      profileImg: "https://i.pravatar.cc/50?img=2",
      username: "Aisha",
      time: "5h ago",
      text: "Post Description shown here",
      postImg: null,
    },
  ];


  return (
    <>
       <div className="flex flex-col items-center justify-center text-center pt-10 px-4">
         {/* <h1 className='lg:text-6xl text-2xl'>
             Feeds Shown here
          </h1>  */}
          <p className='mt-5 text-gray-400 text-center text-xl'>Stay connected with everything that’s happening in our college, from important updates to exciting events, all in one place.</p>
       </div>
    

      <div className="p-6">
      {/* <h1 className="text-xl font-bold text-white mb-6">College Feed</h1> */}
      {posts.map((post) => (
        
        <Post
          key={post.id}
          profileImg={post.profileImg}
          username={post.username}
          time={post.time}
          text={post.text}
          postImg={post.postImg}
        />

      ))}
    </div>
    </>

       
  )
}

export default Homepage