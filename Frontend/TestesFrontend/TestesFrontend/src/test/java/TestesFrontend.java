import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestesFrontend {
    
    private WebDriver driver;

    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp(){
        System.setProperty("webdriver.chrome.driver", "/Users/simaoliveira/Documents/Escola/2 Semestre/Projecto de Sistemas de Informação/2019/chromedriver");
        driver = new ChromeDriver();
    }
    
    @After
    public void tearDown() {
        driver.close();
    }
    
    /**
     *
     * @throws java.lang.InterruptedException
     */
    @Test
    public void testLogin() throws InterruptedException{
      driver.navigate().to("http://brandi.ipt.pt");
      Thread.sleep(2000);
      WebElement inputBox;
      inputBox = driver.findElement(By.id("username"));
      inputBox.sendKeys("dmoreno");
      inputBox = driver.findElement(By.id("password"));
      inputBox.sendKeys("pass123");
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("idBtn")).click();
      Thread.sleep(5000);  // Let the user actually see something!
    }
    
    @Test
    public void LoginWrong() throws InterruptedException{
      driver.navigate().to("http://brandi.ipt.pt");
      Thread.sleep(2000);
      WebElement inputBox;
      inputBox = driver.findElement(By.id("username"));
      inputBox.sendKeys("dmoreno");
      inputBox = driver.findElement(By.id("password"));
      inputBox.sendKeys("pass123s");
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("idBtn")).click();
      Thread.sleep(5000);  // Let the user actually see something!

    }
}