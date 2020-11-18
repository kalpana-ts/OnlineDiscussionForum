package se.kth.sda.skeleton.comments;

import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.user.User;

import javax.persistence.*;

@Entity

public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String commentBody;

    @ManyToOne
    private Post post;

    @ManyToOne
    private User user;

    public Comment(Long id, String commentBody,Post post,User user) {
        this.id = id;
        this.commentBody = commentBody;
        this.post = post;
        this.user = user;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }



    public Comment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getCommentBody() {
        return commentBody;
    }

    public void setCommentBody(String commentBody) {
        this.commentBody = commentBody;
    }
}

