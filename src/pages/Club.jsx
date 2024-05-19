import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import axiosInstance from '../services/axiosInterceptor';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsSendFill } from "react-icons/bs";
import { MdOutlineWifiCalling } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdPersonAdd } from "react-icons/io";
import CallingInterface from '../components/CallingInterface';

const socket = io('http://localhost:7000');

const Club = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const token = localStorage.getItem('accessToken');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    const { roomId } = useParams();
    const [isAdmin, setIsAdmin] = useState(false);
    const chatThreadRef = useRef(null);
    const [callActive, setCallActive] = useState(false);
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const [peerConnection, setPeerConnection] = useState(null);

    // ...

    const startCall = async () => {
        try {
            // Request access to the user's microphone
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setLocalStream(stream);
    
            // Create a peer connection
            const pc = new RTCPeerConnection();
            stream.getTracks().forEach(track => pc.addTrack(track, stream));
    
            pc.onicecandidate = event => {
                if (event.candidate) {
                    // Emit signal to the server
                    socket.emit('signal', { roomId, signal: event.candidate, from: userId });
                }
            };
    
            pc.ontrack = event => {
                setRemoteStream(event.streams[0]);
            };
    
            // Set the peer connection
            setPeerConnection(pc);
    
            // Create an offer
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socket.emit('startCall', { roomId, signal: offer, from: userId, participants: [] });
    
            setCallActive(true);
    
            // Send notification
            toast.info("Call is active. Members can join.");
        } catch (error) {
            console.error('Error starting call:', error);
        }
    };

    
    
  
    const endCall = () => {
      // Close peer connection
      if (peerConnection) {
        peerConnection.close();
      }
  
      // Stop local stream
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
  
      // Stop remote stream
      setRemoteStream(null);
      setLocalStream(null);
      setCallActive(false);
    };

    const notify = () => {
        toast.success("Member Added");
    };

    useEffect(() => {
        axiosInstance.post('/api/room/join', { roomId })
            .then(response => {
                setMessages(response.data.messages);
                console.log(response.data);
                scrollToBottom();
            })
            .catch(error => {
                console.error('Error joining room:', error);
            });
        socket.on('newMessage', (message) => {
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages, message];
                scrollToBottom();
                return updatedMessages;
            });
        });

        socket.on('groupCallStarted', async (data) => {
            console.log('Group call started:', data);
            await joinCall(data.signal);
        });


        return () => {
            socket.off('newMessage');
            socket.off('groupCallStarted');
        };
    }, [roomId]);

    useEffect(() => {
        if (localStream) {
            localVideoRef.current.srcObject = localStream;
        }
    }, [localStream]);

    useEffect(() => {
        if (remoteStream) {
            remoteVideoRef.current.srcObject = remoteStream;
        }
    }, [remoteStream]);

    const scrollToBottom = () => {
        if (chatThreadRef.current) {
            chatThreadRef.current.scrollTop = chatThreadRef.current.scrollHeight;
        }
    };

    const sendMessage = () => {
        if (input.trim()) {
            const newMessage = { sender: userId, content: input };

            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages, newMessage];
                scrollToBottom(); // Scroll to bottom when a new message is sent
                return updatedMessages;
            });

            axiosInstance.post('/api/room/send-message', { roomId, message: newMessage })
                .then(response => {
                    setInput('');
                })
                .catch(error => {
                    console.error('Error sending message:', error);
                });

            socket.emit('sendMessage', { roomId, message: newMessage });
        }
    };


    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    const [mutualFollowUsers, setMutualFollowUsers] = useState([]);

    useEffect(() => {
        // Fetch mutual follow users from the server and update state
        const fetchMutualFollowUsers = async () => {
            try {
                const response = await axiosInstance.get('/api/mutualFollowUsers');
                setMutualFollowUsers(response.data);
            } catch (error) {
                console.error('Error fetching mutual follow users:', error);
            }
        };
        fetchMutualFollowUsers();
    }, []);


    const handleAddMember = async (roomId, memberId) => {
        try {
            const response = await axiosInstance.post('/api/room/add-member', {
                roomId: roomId,
                memberId: memberId
            });
            notify()
           
        } catch (error) {
            console.error('Error adding member:', error);
        }
    };

    const [roomMembers, setRoomMembers] = useState([]);

    useEffect(() => {
        const fetchRoomMembers = async () => {
            try {
                const response = await axiosInstance.get(`/api/room/roomMembers?roomId=${roomId}`);
                setRoomMembers(response.data);
              
            } catch (error) {
                console.error('Error fetching room members:', error.message);
            }
        };

        fetchRoomMembers();
    }, [roomId]);

    return (
        <div>
            <ToastContainer />
            <Header />
            <div id="convo">

                <div className="chat-container">

                    <p style={{ position: "absolute", top: "8rem", left: "50%", transform: "translateX(-50%)" }}>
                        Joinee: {roomMembers.map(member => member.name).join(', ')}
                    </p>

                    <ul className="chat-thread" ref={chatThreadRef}>
                        <div>

                            {messages.map((msg, index) => (
                                <li key={index} className={msg.sender === userId ? 'message-sender' : 'message-other'}>
                                    {msg.content}
                                </li>
                            ))}
                        </div>
                    </ul>
                    <form>
                        <div className='chat-box-main'>
                            <input
                                type="text"
                                className='chat-input'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <p
                                style={{ fontSize: '25px', padding: "5px", cursor: 'pointer' }}
                                className='chat-btn'
                                onClick={sendMessage}
                            >
                                <BsSendFill />
                            </p>
                            {callActive ? (
                                <div style={{position:'absolute',}}>
                                   <CallingInterface endCall={endCall} /> 
                                </div>
                                
                            ) : (
                                <p
                                    style={{ fontSize: '25px', padding: "5px", cursor: 'pointer' }}
                                    className='chat-btn'
                                    onClick={startCall}
                                >
                                    <MdOutlineWifiCalling />
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                <div className="video-container" style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", width: "100%" }}>
                    <video ref={localVideoRef} autoPlay muted className="local-video" style={{ width: "45%", borderRadius: "10px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)" }}></video>
                    <video ref={remoteVideoRef} autoPlay className="remote-video" style={{ width: "45%", borderRadius: "10px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)" }}></video>
                </div>
                <div className="mutual-follow-users">
                    <h2 style={{ textAlign: "center", fontSize: "20px" }}>Mutual Follow Users</h2>
                    <div style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "10rem",
                        overflowY: "scroll"
                    }}>
                        {mutualFollowUsers.map(user => (
                            <div key={user._id} style={{ display: "flex", gap: "10px" }}>
                                <span>{user.name}</span>
                                <button onClick={() => handleAddMember(roomId, user._id)} style={{ background: "none", border: "none" }}><IoMdPersonAdd /> Add</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Club;
