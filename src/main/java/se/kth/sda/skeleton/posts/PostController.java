package se.kth.sda.skeleton.posts;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

   @GetMapping("")
    public List<Post> getAll(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            return postService.getAll();
        } else {
            return postService.getAllByUserId(userId);
        }
    }

    //Get a specific post by its id
    @GetMapping("/{id}")
    public Post getById(@PathVariable Long id) {
        return postService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //Create a post
    @PostMapping("")
    public Post create(@RequestBody Post newPost) {
        return postService.create(newPost);
    }

    //Create a task
    @PutMapping("")
    public Post update(@RequestBody Post newPost) {
        return postService.update(newPost);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        postService.delete(id);
    }
}
