package acceptance_tests.helper;
import system.system;
import domain.Developer;
import dto.DeveloperInfo;

public class DeveloperHelper {

    private DeveloperInfo developer;
    private System system;

    public DeveloperInfo getDeveloper() {
        if (developer == null) {
            developer = exampleDeveloper();
        }
        return developer;
    }

    public void setDeveloper(String firstName, String lastName, String ID) {
        developer = new DeveloperInfo(firstName,lastName,ID);
    }

    public DeveloperInfo registerExampleDeveloper() throws Exception {
        DeveloperInfo dev = getDeveloper();

        return dev;
    }

    private DeveloperInfo exampleDeveloper() {
        DeveloperInfo developer = new DeveloperInfo("Hansen","Freddie","FRHA");
        return developer;
    }
}
