package se.kth.sda.skeleton.Chat;

import se.kth.sda.skeleton.user.User;

import javax.persistence.*;

@Entity
public class Chat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String msgBody;

    @ManyToOne
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Chat() {
    }

    public Chat(Long id, String msgBody) {
        this.id = id;
        this.msgBody = msgBody;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMsgBody() {
        return msgBody;
    }

    public void setMsgBody(String msgBody) {
        this.msgBody = msgBody;
    }
}
