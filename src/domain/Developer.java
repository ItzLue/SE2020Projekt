package domain;


import javax.persistence.Id;

public class Developer {
    @Id
    private String firstName;
    private String lastName;
    private String id;

    public Developer(String firstName, String lastName, String id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }





}
