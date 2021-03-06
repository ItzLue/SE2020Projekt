package domain;

import io.cucumber.java.ca.Cal;
import time.Interval;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;

public class Project {

    protected Developer projectLeader;
    protected ArrayList<Activity> activityList = new ArrayList<>();
    protected boolean initialized;
    protected Interval interval;
    private String ID = "";
    protected String name;

    public Project(String name) {
        this.name = name;
        this.initialized = false;
    }

    public void addActivity(Activity activity) {
        this.activityList.add(activity);
    }

    public void initProject() {
        this.initialized = true;
    }

    public void setProjectLeader(Developer developer) {
        if (initialized) {
            this.projectLeader = developer;
        }
        else {
            System.out.println("deeeet var vidste en ommerr ahahaha skal vi have en lille en: læst med arne nougatgren stemme");
        }
    }

    public void setName(String name) { this.name = name; }

    public void setID(String ID) {
        if (this.ID.equals("")) {
            this.ID = ID;
        }
    }

    public String getID() {
        return this.ID;
    }

    @Override
    public String toString() {
        return ", name:'" + name + '\'' +
                ", ID: '" + ID + '\'' +
                "projectLeader: " + projectLeader +
                ", activityList: " + activityList;
    }

    public boolean isInitialized() {
        return initialized;
    }

    public void setInterval(Interval interval) {
        this.interval = interval;
    }

    public Interval getInterval() {
        return this.interval;
    }



}
