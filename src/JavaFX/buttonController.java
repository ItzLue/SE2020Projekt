package JavaFX;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

import java.net.URL;
import java.util.ResourceBundle;

public class buttonController implements Initializable {

    @FXML
    private Button AddDeveloperBtn, ShowProjectsBtn, CreateProjectBtn, ShowDeveloperBtn,Back;


    @FXML
    public void handleButtonAction(ActionEvent event) throws Exception {
        Stage stage = null;
        Parent root = null;

        if (event.getSource() == AddDeveloperBtn) {
            stage = (Stage) AddDeveloperBtn.getScene().getWindow();
            root = FXMLLoader.load(getClass().getResource("Resources/addDeveloper.fxml"));
        } else if (event.getSource() == ShowProjectsBtn) {
            stage = (Stage) ShowProjectsBtn.getScene().getWindow();
            root = FXMLLoader.load(getClass().getResource("Resources/showProject.fxml"));
        } else if (event.getSource() == CreateProjectBtn) {
            stage = (Stage) CreateProjectBtn.getScene().getWindow();
            root = FXMLLoader.load(getClass().getResource("Resources/createProject.fxml"));
        } else if (event.getSource() == ShowDeveloperBtn) {
            stage = (Stage) ShowDeveloperBtn.getScene().getWindow();
            root = FXMLLoader.load(getClass().getResource("Resources/showDevelopers.fxml"));
        } else if(event.getSource() == Back){
            System.out.println("No button clicked");
        }

        Scene scene = new Scene(root);
        stage.setScene(scene);
        stage.show();
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }
}