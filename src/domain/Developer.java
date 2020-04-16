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
        return firstName.substring(0,2) + lastName.substring(0,2);
    }

    public void setId(String id) {
        this.id =  firstName.substring(0,2) + lastName.substring(0,2);
    }

    public Developer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }



}
