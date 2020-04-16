package System;

import time.DateServer;
import domain.Developer;
import domain.Project;

import java.util.*;

public class App {
    protected Developer activeDeveloper;
    protected HashMap<String, Developer> developerHM = new HashMap<>();
    protected HashMap<String, Project> projectHM = new HashMap<>();
    protected DateServer dateServer = new DateServer();

    public void registerDeveloper(Developer developer) {
        String ID = developer.getFirstName().substring(0,2) + developer.getLastName().substring(0,2);
        developer.setId(ID);
        developerHM.put(ID,developer);
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


    public void setActiveDeveloper(Developer developer) {
        this.activeDeveloper = developer;
    }

    public void setActiveDeveloper() {
        this.activeDeveloper = null;
    }

    public HashMap<String, Developer> getDeveloperHM() {
        return developerHM;
    }

    public Calendar getDate() {
        return dateServer.getDate();
    }
}
