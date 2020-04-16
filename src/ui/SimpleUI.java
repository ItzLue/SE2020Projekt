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

            System.out.println("   0) Exit");
            System.out.println("   1) Show developers");
            System.out.println("   2) Show projects");
            System.out.println("   3) Add developers");
            System.out.println("   4) add projects");
            System.out.println("   5) Cancel");
            System.out.println("Select a number (0-5): ");
            option = Integer.parseInt(in.nextLine());

            if (option==0) {
                break;
            }
            else if (option==1){
                app.getDeveloperHM();
            }
            else if (option==2){

            }
            else if (option==3){
                System.out.println("Write first name and last name");
                app.registerDeveloper(new Developer(in.next(),in.next()));
            }
            else if (option==4){

            }
        }
    }
}
