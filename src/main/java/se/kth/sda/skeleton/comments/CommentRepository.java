package se.kth.sda.skeleton.comments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda.skeleton.posts.Post;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
