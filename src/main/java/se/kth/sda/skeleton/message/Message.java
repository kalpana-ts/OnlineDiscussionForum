package se.kth.sda.skeleton.message;

import se.kth.sda.skeleton.user.User;

import javax.persistence.*;

@Entity
public class Message {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String msgBody;

    @Column(columnDefinition = "TEXT")
    private String msgSubject;

    @ManyToOne
    private User sender;

    @ManyToOne
    private User recipient;


    public Message() {
    }

    public Message(Long id, String msgBody, String msgSubject) {
        this.id = id;
        this.msgBody = msgBody;
        this.msgSubject = msgSubject;
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

    public String getMsgSubject() {
        return msgSubject;
    }

    public void setMsgSubject(String msgSubject) {
        this.msgSubject = msgSubject;
    }

    public User getSender() {
        return this.sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public User getRecipient() {
        return this.recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }

}
