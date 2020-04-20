package System;

import time.DateServer;
import domain.Developer;
import domain.Project;

import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;
import java.util.*;

public class App {
    protected Developer activeDeveloper;
    public HashMap<String, Developer> developerHM = new HashMap<String, Developer>();
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
        return year + weekNumber + runningNumber;
    }

    public App(){
    }

    public static void main(String[] args) {

    }

    public void setDateServer(DateServer dateServer) {
        this.dateServer = dateServer;
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

    public HashMap<String, Project> getProjectHM() {
        return this.projectHM;
    }

    public void getDevValues() {
//       Stream.of(developerHM.values().toString()).forEach(System.out::println);
        for (Developer developer : developerHM.values()) {
            System.out.println(developer);
        }
    }
    public void getProjectValues(){
        for (Project project : projectHM.values()){
            System.out.println(project);
        }
    }

    public Calendar getDate() {
        return dateServer.getDate();
    }
    public void addObserver(PropertyChangeListener listener) {
        support.addPropertyChangeListener(listener);
    }

    public Developer getActiveDeveloper() {
        return activeDeveloper;
    }

    public boolean devHmEmpty(){
        if (developerHM.isEmpty()){
            System.out.println("Developer list is empty");
        }
        return true;
    }
}
