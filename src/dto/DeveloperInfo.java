package dto;

import domain.Developer;


public class DeveloperInfo {

    private String lastName;
    private String firstName;
    private String ID;

    public DeveloperInfo(String lastName, String firstName, String ID) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.ID = ID;
    }


    public DeveloperInfo(Developer developer){
        this.firstName = developer.getFirstName();
        this.lastName = developer.getLastName();
        this.ID = developer.getID();
    }

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

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    private Developer asDeveloper(){
        return new Developer(firstName,lastName,ID);
    }
}
