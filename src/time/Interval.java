package time;


import java.util.Calendar;

public class Interval {

    protected Calendar startDate;
    protected Calendar endDate;

    public Interval(Calendar startDate, Calendar endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Calendar getEndDate() {
        return endDate;
    }

    public Calendar getStartDate() {
        return startDate;
    }

    public void setEndDate(Calendar endDate) {
        this.endDate = endDate;
    }

    public void setStartDate(Calendar startDate) {
        this.startDate = startDate;
    }
}
