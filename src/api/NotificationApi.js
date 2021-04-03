import { api } from '../api';
import io from 'socket.io-client';

const socket = io("http://localhost:3001");

const sendMessage = () => (
    {
        socket.emit("connection", {
            "name": document.getElementById("name").value;
        })
    }
)

export const getUser = ({_id}) => {
    return api.get('/user/basic-details', {
      params: {
        _id: _id,
      }
    });
  }