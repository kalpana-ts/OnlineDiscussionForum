package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository repo;


    public List<Post> getAll() {
        return repo.findAll();
    }

    public Optional<Post> getById(Long id) {
        return repo.findById(id);
    }

    public Post create(Post newPost) {
        return repo.save(newPost);
    }

    public Post update(Post updatedPost) {
        return repo.save(updatedPost);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }


 public List<Post> getAllByUserId(Long userId) {
        return repo.findAllByUserId(userId);
    }
}
