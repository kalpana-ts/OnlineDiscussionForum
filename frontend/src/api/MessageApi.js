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

    createMessage(post) {
        return Api.post('/messages', post);
    }

    deleteMessage(id) {
        return Api.delete('/messages/'+id);
    } 
}

export default new MessageApi();