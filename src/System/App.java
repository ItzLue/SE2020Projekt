package System;

import domain.Developer;
import domain.Project;
import javafx.beans.InvalidationListener;
import javafx.collections.MapChangeListener;
import javafx.collections.ObservableMap;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class App {
    protected Developer activeDeveloper;
    protected HashMap<String, Developer> developerHM = new HashMap<>();
    protected HashMap<String, Project> projectHM = new HashMap<>();


    public HashMap<String, Developer> getDeveloperHM() {
        return developerHM;
    }

    public void registerDeveloper(Developer developer) {
        String ID = developer.getFirstName().substring(0,2) + developer.getLastName().substring(0,2);
        developer.setId(ID);
        developerHM.put(ID,developer);
    }

    public void setActiveDeveloper(Developer developer) {
        this.activeDeveloper = developer;
    }

    public void setActiveDeveloper() {
        this.activeDeveloper = null;
    }

}
