import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addbtn from './assets/add-30.png';
import msgicon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import send from './assets/send.svg';
import usericon from './assets/user-icon.png';
import gptlogoimg from './assets/chatgptLogo.svg';
// import { sendmsgtoopenai } from './Openai';
// import { useState } from 'react';


function App() {
  // const[input , setinput] = useState("")
  // const handlesend =  async()=>{
  //   const res = await sendmsgtoopenai(input);
  //   console.log(res)
  // }
  return (
    <div className="App">
     <div className="sidebar">
          <div className="upperside">
            <div className="uppersideTop"><img src={gptLogo} alt="logo" className="logo" /><span className="brand">ChatGPT</span></div>
            <button className="midbtn"><img src={addbtn} alt="new chat" className="addbtn" />New Chat</button>
            <div className="uppersidebottom">
              <button className="query"><img src={msgicon} alt="query" />What is programming?</button>
              <button className="query"><img src={msgicon} alt="query" />How to Use an API?</button>
            </div>

          </div>
          <div className="lowerside">
          <div className="listitem"><img src={home} alt="" className="listitemimg" />Home</div>
          <div className="listitem"><img src={saved} alt="" className="listitemimg" />Saved</div>
          <div className="listitem"><img src={rocket} alt="" className="listitemimg" />Upgrade To Pro</div>
          </div>
     </div>
     <div className="main">
      <div className="chats">
        <div className="chat">
          <img className = 'chatimg'src={usericon} alt="" /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat a mollitia repudiandae hic autem cupiditate in exercitationem dignissimos adipisci.</p>
        </div>

        <div className="chat bot">
          <img className = 'chatimg ' src={gptlogoimg} alt="" /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat soluta ducimus unde aliquid est architecto praesentium. Sapiente, asperiores quaerat. Nesciunt molestias ratione accusamus deleniti? Dolore minima, natus enim fuga nihil placeat iure incidunt voluptas ad assumenda a dolores. Debitis, similique? Dicta culpa quo inventore ipsa vero voluptate accusantium aliquid beatae dolores assumenda expedita temporibus, suscipit ullam numquam explicabo tempora? Modi, asperiores. Error nihil ullam quisquam blanditiis vero necessitatibus eius ducimus dignissimos animi nam voluptate corrupti autem, ut maiores sunt similique tenetur voluptas recusandae dolor laudantium optio! Magnam corrupti ut, impedit, culpa soluta quibusdam hic, ratione officiis a minima repellat debitis nulla quisquam nihil iste. Assumenda, eum ducimus labore ipsam quam deserunt molestiae illum et necessitatibus. Neque obcaecati eaque odit facere vero dolor mollitia unde repellat placeat cupiditate voluptatum nesciunt error sint provident perferendis reprehenderit dignissimos dolorum et natus deserunt, magni aut aperiam. Sed ratione numquam aut a modi? Tenetur debitis earum eveniet neque laboriosam asperiores nam? Harum perspiciatis ipsum, debitis quia blanditiis pariatur voluptas beatae eum in nulla fuga suscipit quibusdam exercitationem neque laborum itaque consectetur ut fugit modi. Consectetur alias reiciendis sint vel et quasi, similique quia eligendi nisi quo eius corrupti eaque facilis neque, in ad accusamus!</p>
        </div>


      </div>
      <div className="chatfooter">
        <div className="inp">
          <input type="text"  placeholder = "Send a Message"  name="" id="" /> <button className="send"><img src={send} alt="Send" /></button>

        </div>
        <p>ChatGPT may produce inaccurate information about people,places,or facts. ChatGPT August 20 version.</p>
      </div>

     </div>
    </div>
  );
}

export default App;
