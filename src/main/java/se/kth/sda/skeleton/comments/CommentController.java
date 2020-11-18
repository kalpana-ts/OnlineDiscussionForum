package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.skeleton.posts.Post;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    // @GetMapping("/{postId}")
    // public List<Comment> getAllPostId(@PathVariable Long postId) {
     
    //         return commentService.getAllByPostId(postId);
        
    }

    @GetMapping("/postid")
    public List<Comment> getAllPostId(@RequestParam(required = false) Long postId) {
        if (postId == null) {
            return commentService.getAll();
        } else {
            return commentService.getAllByPostId(postId);
        }
    }


    @GetMapping("/userid")
    public List<Comment> getAllByUserId(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            return commentService.getAll();
        } else {
            return commentService.getAllByUserId(userId);
        }
    }
    @GetMapping("")
    public List<Comment> getAll() {
        return commentService.getAll();
    }


    //Get a specific post by its id
    @GetMapping("/{id}")
    public Comment getById(@PathVariable Long id) {
        return commentService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //Create a post
    @PostMapping("")
    public Comment create(@RequestBody Comment newComment) {
        return commentService.create(newComment);
    }

    //Create a task
    @PutMapping("")
    public Comment update(@RequestBody Comment newComment) {
        return commentService.update(newComment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        commentService.delete(id);
    }

}
