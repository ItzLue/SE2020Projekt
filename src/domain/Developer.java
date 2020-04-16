package domain;

public class Developer {

    protected String lastName;
    protected String firstName;
    protected String id;

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Developer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }



}
