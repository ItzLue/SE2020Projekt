package JavaFX;

import System.App;
import domain.Developer;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.collections.transformation.FilteredList;
import javafx.collections.transformation.SortedList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.stage.Stage;
import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

public class DeveloperTableController implements Initializable {

    // Table
    @FXML
    private TableView<Developer> devTab;
    @FXML
    private TableColumn<Developer, String> firstNameCol;
    @FXML
    private TableColumn<Developer, String> lastNameCol;
    @FXML
    private TableColumn<Developer, String> idCol;

    //TextFields for new Developer
    @FXML
    private TextField firstNameTextField;
    @FXML
    private TextField lastNameTextField;
    @FXML
    ObservableList<Developer> developer = FXCollections.observableArrayList();


        // Search bar

    @FXML
    private TextField searchBar;


    public void changeScreenButtonPushed(ActionEvent event) throws IOException {
        // Load fxml file and set scene
        Parent showDeveloperParent = FXMLLoader.load(getClass().getResource("resources/frontPage.fxml"));
        Scene showDeveloperScene = new Scene(showDeveloperParent);

        // Stage information
        Stage window = (Stage) ((Node) event.getSource()).getScene().getWindow();

        window.setScene(showDeveloperScene);
        window.show();
    }

    public void changeFirstNameCellEvent(TableColumn.CellEditEvent cellEditEvent) {
        Developer developerSelected = devTab.getSelectionModel().getSelectedItem();
        developerSelected.setFirstName(cellEditEvent.getNewValue().toString());

    }

    public void changeLastNameCellEvent(TableColumn.CellEditEvent cellEditEvent) {
        Developer developerSelected = devTab.getSelectionModel().getSelectedItem();
        developerSelected.setLastName(cellEditEvent.getNewValue().toString());
    }

    public void newDeveloperButtonPushed(ActionEvent event) {

        developer.add(new Developer("Hans","Hansen"));
        devTab.setItems(developer);
    }

    public void deleteButtonPushed(ActionEvent event) {


        ObservableList<Developer> selectedRows, allDevelopers;
        allDevelopers = devTab.getItems();

        //this gives us the rows that were selected
        selectedRows = devTab.getSelectionModel().getSelectedItems();

        //loop over the selected rows and remove the Person objects from the table
        for (Developer developer : selectedRows) {
            allDevelopers.remove(developer);
        }
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {

        devTab.setEditable(true);

        firstNameCol.setCellValueFactory(new PropertyValueFactory<Developer, String>("firstName"));
        lastNameCol.setCellValueFactory(new PropertyValueFactory<Developer, String>("lastName"));
        idCol.setCellValueFactory(new PropertyValueFactory<Developer, String>("id"));

        // Example list
        //devTab.setItems(getDevelopers());

        // Update list


        FilteredList<Developer> filteredList = new FilteredList<Developer>(getDevelopers(), b -> true);

        searchBar.textProperty().addListener(((observableValue, oldValue, newValue) -> {
            filteredList.setPredicate(developer -> {
                // if empty
                if (newValue == null || newValue.isEmpty()) {
                    return true;
                }
                // Compare names
                String lowerCaseFilter = newValue.toLowerCase();

                if (developer.getFirstName().toLowerCase().contains(lowerCaseFilter)) {
                    return true;
                } else if (developer.getLastName().toLowerCase().contains(lowerCaseFilter)) {
                    return true;
                } else if (developer.getID().toLowerCase().contains(lowerCaseFilter)) {
                    return true;
                } else {
                    return false;
                }
            });
        }));

        SortedList<Developer> sortedData = new SortedList<Developer>(filteredList);

        sortedData.comparatorProperty().bind(devTab.comparatorProperty());

        devTab.setItems(filteredList);
    }

    public ObservableList<Developer> getDevelopers() {
        developer.add(new Developer("Frank", "Hansen"));
        developer.add(new Developer("Rebecca", "Jensen"));
        developer.add(new Developer("Jonas", "Tang"));
        return developer;
    }
}
