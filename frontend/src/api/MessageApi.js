import Api from "./Api";

class MessageApi {
    getAllMessages() {
        return Api.get('/messages');
    }

    getAllMessagesBySenderId(senderId) {
        return Api.get(`/messages/bysender?senderId=${senderId}`);
    }

    getAllMessagesByRecipientId(recipientId) {
        return Api.get(`/messages/byrecipient?recipientId=${recipientId}`);
    }

    getMessageById(id) {
        return Api.get('/messages/'+id);
    }

    createMessage(msg) {
        return Api.post('/messages', msg);
    }

    updateMessage(newMsg) {
        return Api.put('/messages', newMsg)
    }

    deleteMessage(id) {
        return Api.delete('/messages/'+id);
    } 
}

export default new MessageApi();