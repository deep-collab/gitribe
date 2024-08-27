import styles from '@/styles/Assistant.module.css';
import { useState,useEffect,useRef } from 'react';

export default function Assistant (){
    
    const [showChat,setShowChat] = useState(false);
    const [query,setQuery] = useState();
    const [messages,setMessages]  = useState([]);
    const [typing,setTyping] = useState(false);
    let thread,assistant;
    async function open() {
        if (query) {
            let fullMessage = '';
          
            const eventSource = new EventSource(`/api/getassistant?query=${String(query)}`);
            // setQuery('');
      
             eventSource.onmessage = (event) => {
      const data = event.data;
      if (data === '[DONE]') {
        setTyping(false);
        eventSource.close();
       
        setMessages(prev => [...prev, fullMessage]);
      
      } else if (data === '[ERROR]') {
        setTyping(false);
        setMessages(prev => [...prev, "An error occurred."]);
        eventSource.close();
      } else {
        try {
          const parsedData = JSON.parse(data);
          if (parsedData.type === 'textCreated' || parsedData.type === 'textDelta') {
          
            if(parsedData.textDelta){
                fullMessage += parsedData.textDelta.value  ;
          
                // setMessages(prev => [...prev, parsedData.textDelta.value || parsedData.text.value]);

              
            }
          }
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      }
    };

    eventSource.onerror = (error) => {
      setTyping(false);
      setMessages(prev => [...prev, "An error occurred."]);
      eventSource.close();
    };
  

      
            setTyping(true);
      
            return () => {
              eventSource.close();
            };
          }
        // fetch('/api/getassistant', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ query }),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Assistant response:', data.response);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });


    }

    // useEffect(()=>{
    //     if(showChat){
    //        open();
    //     }
    // },[showChat]);
    const onQueryChange = (event)=>{
        setQuery(event.target.value);
    }
    const handleSubmit = ()=>{
       
        open();
        setMessages([]);
       
    }
    const handleKeyPress = (event)=>{
        if(event.key === 'Enter'){
            event.preventDefault();
            handleSubmit();  
            setQuery('');
            // let empty = '';
            // setQuery(empty);
        }
    }
    return(
        <>
            {showChat ? 
                <div className={styles.chat} >
                    <div className={styles.chat_topDiv}>
                        <div className={styles.chat_topDiv_left}>
                            <img  className={styles.assistantImage} src='/webSeva.jpg' width={35} height={35}/>
                             <p className={styles.assistantName}>WebSeva Ai</p>
                        </div>
                        <div className={styles.chat_topDiv_right}>
                                <button className={styles.closeButton} onClick={()=>{setShowChat(false)}}>
                                    <img className={styles.closeImage} src='/close.png' width={15} height={15}/>
                                </button>
                        </div>
                    </div>
                    <div className={styles.chat_middleDiv}>
                      
                        <div className={styles.chat_middleDiv_body}>
                            <img src='/webSeva.jpg' className={styles.assistantLogo} width={30} height={30}/>
                            <div className={styles.chat_middleDiv_subbody}>
                            {messages.length > 0 && (
                                  <p>{messages[messages.length - 1]}</p> // Show the last concatenated message
                            )
                          
                            }
                            {messages.length<= 0 && typing === false && (
                                <p>Hello there</p>
                            )}
                                     
                                    {typing && <p>Assistant is typing...</p>}
                            </div>
                        </div>
                        </div>
                    <div className={styles.chat_bottomDiv}>
                        <div className={styles.chat_bottomDiv_textInput}>
                          <input type='text' className={styles.textInput} onChange={onQueryChange} placeholder='Ask me anything' onKeyPress={handleKeyPress} value={query}/>
                        </div>
                       
                        {/* <button onClick={open}>
                            submit
                        </button> */}
                    </div>

                </div>:
                <button className={styles.container} onClick={()=>{setShowChat(true);}}>
                     <img src='/conversation.png' className={styles.image} width={25} height={25}/>
                </button>
            
            }
              
        </>
    )
}