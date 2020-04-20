package ui;

import java.util.Scanner;
import domain.*;
import System.App;

public class SimpleUI {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int option;
        String firstName;
        String lastName;
        App app = new App();

        while (true){
            System.out.println(" Active developer: " + app.getActiveDeveloper());
            System.out.println("   1) Show developers");
            System.out.println("   2) Add developers");
            System.out.println("   3) Show projects");
            System.out.println("   4) add projects");
            System.out.println("   5) Exit");
            System.out.println("Select a number (1-5): ");
            option = (in.nextInt());

             if (option==1){
                 if (!app.devHmEmpty()){
                     app.getDevValues();
                 } else app.getDevValues();

            }
            else if (option==2){
                System.out.println("Write first name and last name");
                app.registerDeveloper(new Developer(in.next(),in.next()));
            }
            else if (option==3){
                System.out.println("Write project name");
            }
            else if (option==4){
                app.getProjectValues();
            }else if (option==5) {
                break;
            }
        }
    }
}
