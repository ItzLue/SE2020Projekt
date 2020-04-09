package system;

import domain.Developer;
import java.util.HashMap;

public class system {
    protected Developer activeDeveloper;
    protected HashMap<String, Developer> developerHM = new HashMap<>();

    public void registerDeveloper(Developer developer) {
        String ID = developer.getFirstName().substring(0,2) + developer.getLastName().substring(0,2);
        developer.setID(ID);
        developerHM.put(ID,developer);
    }


    public void setActiveDeveloper(Developer developer) {
        this.activeDeveloper = developer;
    }

    public void setActiveDeveloper() {
        this.activeDeveloper = null;
    }

}
