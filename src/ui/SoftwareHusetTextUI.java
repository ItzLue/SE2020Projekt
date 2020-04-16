package ui;

import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeListener;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;

import domain.Developer;
import domain.Project;
import System.App;

public class SoftwareHusetTextUI implements PropertyChangeListener {

    Developer developer;
    Project project;
    App app;

    public static void main(String[] args) {
        Developer developer = null;
        Project project = null;
    }

    public SoftwareHusetTextUI() {
        app.registerDeveloper(new Developer("Hans","Hansen"));
        app.addObserver(this);
    }

    public SoftwareHusetTextUI(App m) {
        app = m;
        app.addObserver(this);
    }

    public void mainLoop(InputStream in, PrintStream out) throws IOException {
        BufferedReader rs = new BufferedReader(new InputStreamReader(in));
        String choice = null;
        do {
            showMenu(out);
            choice = rs.readLine();
            if (choice == null) {
                break;
            }
            int number = Integer.parseInt(choice);
            if (number == 0) {
                break;
            }
            processChoice(number, out);

        } while (choice != null);
    }


    public void showMenu(PrintStream out){
        out.println("   0) Exit");
        out.println("   1) Show developers");
        out.println("   2) Show projects");
        out.println("   3) Add developers");
        out.println("   4) add projects");
        out.println("   5) Cancel");
        out.println("Select a number (0-5): ");
    }

    private void processChoice(int numb, PrintStream out){
        switch (numb){
            case 1:
                out.println("1");
                break;
            default:

                break;
        }
    }

    @Override
    public void propertyChange(PropertyChangeEvent evt) {
        String type = evt.getPropertyName();
    }
}
