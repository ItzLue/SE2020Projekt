package System;

import time.DateServer;
import domain.Developer;
import domain.Project;

import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;
import java.util.*;
import java.util.stream.Stream;

public class App {
    protected Developer activeDeveloper;
    protected HashMap<String, Developer> developerHM = new HashMap<String, Developer>();
    protected HashMap<String, Project> projectHM = new HashMap<String,Project>();
    private PropertyChangeSupport support = new PropertyChangeSupport(this);
    protected DateServer dateServer = new DateServer();

    public void registerDeveloper(Developer developer) {
        String ID = "";
        if (developerHM.size() > 9) {
            ID = developer.getFirstName().substring(0,2).toLowerCase() + developer.getLastName().substring(0,2).toLowerCase() + (developerHM.size()+1);
        } else {
            ID = developer.getFirstName().substring(0,2).toLowerCase() + developer.getLastName().substring(0,2) .toLowerCase() + 0 + (developerHM.size()+1);
        }


        developer.setId(ID);
        developerHM.put(developer.getID(),developer);
    }

    public void registerProject(Project project) {
        project.setID(makeProjectID());
        projectHM.put(project.getID(),project);
    }

    public String makeProjectID() {
        String weekNumber = Integer.toString(getDate().get(Calendar.WEEK_OF_YEAR));
        String year = Integer.toString(getDate().get(Calendar.YEAR)).substring(2);
        String runningNumber = Integer.toString(projectHM.size()+1);
        String ID = year + weekNumber + runningNumber;
        return ID;
    }

    public App(){
        registerDeveloper(new Developer("Hans","Hansen"));
    }

    public static void main(String[] args) {


    }

    public void setActiveDeveloper(String ID) {
        if (developerHM.containsKey(ID)) {
            setActiveDeveloper(developerHM.get(ID));
        }
    }

    public void setActiveDeveloper(Developer developer) {
        this.activeDeveloper = developer;
    }

    public void setActiveDeveloper() {
        this.activeDeveloper = null;
    }

    public HashMap<String, Developer> getDeveloperHM() {
        return this.developerHM;
    }

    public void getDevValues() {
       Stream.of(developerHM.values().toString()).forEach(System.out::println);
    }

    public Calendar getDate() {
        return dateServer.getDate();
    }
    public void addObserver(PropertyChangeListener listener) {
        support.addPropertyChangeListener(listener);
    }

    public boolean devHmEmpty(){
        if (developerHM.isEmpty()){
            System.out.println("Developer list is empty");
        }
        return true;
    }
}
