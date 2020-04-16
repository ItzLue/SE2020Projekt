package domain;

import time.Interval;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;

public class Project {

    protected Developer projectLeader;
    protected ArrayList<Activity> activityList = new ArrayList<>();
    protected boolean initialized;
    protected Interval interval;
    protected String ID;
    protected String name;

    public Project() {
        this.initialized = false;
    }

    public void addActivity(Activity activity) {
        activityList.add(activity);
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

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getID() {
        return this.ID;
    }



}
