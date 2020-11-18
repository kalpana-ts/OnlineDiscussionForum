package se.kth.sda.skeleton.Chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.comments.Comment;
import se.kth.sda.skeleton.comments.CommentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ChatService {
    @Autowired
    private ChatRepository repo;

    public List<Chat> getAll() {
        return repo.findAll();
    }

    public Optional<Chat> getById(Long id) {
        return repo.findById(id);
    }

    public Chat create(Chat newChat) {
        return repo.save(newChat);
    }

    public Chat update(Chat updatedChat) {
        return repo.save(updatedChat);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public List<Chat> getAllByUserId(Long userId) {
        return repo.findAllByUserId(userId);
    }


}
