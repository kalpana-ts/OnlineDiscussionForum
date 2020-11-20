package se.kth.sda.skeleton.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.comments.Comment;
import se.kth.sda.skeleton.comments.CommentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository repo;

    public List<Message> getAll() {
        return repo.findAll();
    }

    public Optional<Message> getById(Long id) {
        return repo.findById(id);
    }

    public Message create(Message newMessage) {
        return repo.save(newMessage);
    }

    public Message update(Message updatedMessage) {
        return repo.save(updatedMessage);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public List<Message> getAllBySenderId(Long senderId) {
        return repo.findAllBySenderId(senderId);
    }

    public List<Message> getAllByRecipientId(Long recipientId) {
        return repo.findAllByRecipientId(recipientId);
    }
}
