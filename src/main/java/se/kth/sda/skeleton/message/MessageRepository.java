package se.kth.sda.skeleton.message;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda.skeleton.comments.Comment;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findAllBySenderId(Long senderId);
    List<Message> findAllByRecipientId(Long recipientId);
}
