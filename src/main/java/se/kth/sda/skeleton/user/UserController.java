package se.kth.sda.skeleton.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{email}")
    public User getUserByMail(@PathVariable String email) {
        return userService.findUserByEmail(email);
                //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
