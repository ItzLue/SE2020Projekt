package domain;

public class Developer {

    protected String lastName;
    protected String firstName;
    protected String ID;

    public Developer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setID(String ID) {this.ID = ID; }

    public String getID() {return this.ID; }

}
