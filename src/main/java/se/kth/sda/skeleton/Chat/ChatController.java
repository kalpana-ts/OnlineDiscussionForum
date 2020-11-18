package se.kth.sda.skeleton.Chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping("/byuser")
    public List<Chat> getAllByUserId(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            return chatService.getAll();
        } else {
            return chatService.getAllByUserId(userId);
        }
    }
    @GetMapping("")
    public List<Chat> getAll() {
        return chatService.getAll();
    }

    //Get a specific post by its id
    @GetMapping("/{id}")
    public Chat getById(@PathVariable Long id) {
        return chatService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //Create a post
    @PostMapping("")
    public Chat create(@RequestBody Chat newChat) {
        return chatService.create(newChat);
    }

    //Create a task
    @PutMapping("")
    public Chat update(@RequestBody Chat newChat) {
        return chatService.update(newChat);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        chatService.delete(id);
    }


}
