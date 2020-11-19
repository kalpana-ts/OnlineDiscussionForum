package se.kth.sda.skeleton.posts;

import se.kth.sda.skeleton.comments.Comment;
import se.kth.sda.skeleton.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity

public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String postTitle;
    @Column(columnDefinition = "TEXT")
    private String postBody;
    private Integer likes;
    private Integer disLikes; 

    @OneToMany
    private List<Comment> comments = new ArrayList<>();

    @ManyToOne
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Post(Long id, String postTitle, String postBody,Integer likes,Integer disLikes,User user) {
        this.id = id;
        this.postTitle = postTitle;
        this.postBody = postBody;
        this.likes = likes;
        this.disLikes = disLikes;
        this.user = user;
    }

    public Post() {
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Integer getDisLikes() {
        return disLikes;
    }

    public void setDisLikes(Integer disLikes) {
        this.disLikes = disLikes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getPostBody() {
        return postBody;
    }

    public void setPostBody(String postBody) {
        this.postBody = postBody;
    }
}
