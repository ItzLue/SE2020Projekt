package System;

import time.DateServer;
import domain.Developer;
import domain.Project;
import javafx.beans.InvalidationListener;
import javafx.collections.MapChangeListener;
import javafx.collections.ObservableMap;
import javafx.scene.control.Tab;
import ui.SoftwareHusetTextUI;

import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class App {
    protected Developer developer;
    protected Developer activeDeveloper;
    protected HashMap<String, Developer> developerHM = new HashMap<String, Developer>();
    protected HashMap<String, Project> projectHM = new HashMap<String,Project>();
    private PropertyChangeSupport support = new PropertyChangeSupport(this);
    protected DateServer dateServer = new DateServer();

    public void registerDeveloper(Developer developer) {
        developerHM.put(developer.getId(),developer);
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
        developerHM.put("haha",new Developer("Hans", "Hansen"));
    }

    public static void main(String[] args) {


    }

    public void setActiveDeveloper(Developer developer) {
        this.activeDeveloper = developer;
    }

    public void setActiveDeveloper() {
        this.activeDeveloper = null;
    }


    public Developer getDeveloperHM() {
        return developerHM.get("haha");
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
