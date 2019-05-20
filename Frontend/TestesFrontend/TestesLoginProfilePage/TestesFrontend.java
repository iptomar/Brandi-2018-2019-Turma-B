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
        System.setProperty("webdriver.chrome.driver", "/Users/simaoliveira/Documents/Escola/2Semestre/Projecto de Sistemas de Informação/2019/chromedriver");
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
      driver.navigate().to("http://brandi.ipt.pt/");
      Thread.sleep(2000);
      WebElement inputBox;
      inputBox = driver.findElement(By.id("username"));
      inputBox.sendKeys("admin");
      inputBox = driver.findElement(By.id("password"));
      inputBox.sendKeys("admin");
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
    
    
    @Test
    public void testProfilePage() throws InterruptedException{
      driver.navigate().to("http://brandi.ipt.pt/");
      Thread.sleep(2000);
      WebElement inputBox;
      inputBox = driver.findElement(By.id("username"));
      inputBox.sendKeys("admin");
      inputBox = driver.findElement(By.id("password"));
      inputBox.sendKeys("admin");
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("idBtn")).click();
      Thread.sleep(2000);  // Let the user actually see something!
      driver.navigate().to("http://brandi.ipt.pt/profile");
      driver.findElement(By.id("CampoNome")).click();
      inputBox = driver.findElement(By.id("TfNome"));
      inputBox.sendKeys("1");      
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("CampoNome")).click();
      Thread.sleep(5000);  // Let the user actually see something!
      driver.findElement(By.id("CampoUsername")).click();
      inputBox = driver.findElement(By.id("TfUser"));
      inputBox.sendKeys("admin");      
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("CampoUsername")).click();
      Thread.sleep(5000);  // Let the user actually see something!
      driver.findElement(By.id("CampoEmail")).click();
      inputBox = driver.findElement(By.id("TfEmail"));
      inputBox.sendKeys("2");      
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("CampoEmail")).click();
      Thread.sleep(5000);  // Let the user actually see something!
      driver.findElement(By.id("CampoPass")).click();
      inputBox = driver.findElement(By.id("TfPass"));
      inputBox.sendKeys("admin");      
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("CampoPass")).click();
      Thread.sleep(5000);  // Let the user actually see something!
      driver.findElement(By.id("CampoTipo")).click();
      inputBox = driver.findElement(By.id("TfTipo"));
      inputBox.sendKeys("admin");      
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("CampoTipo")).click();
      Thread.sleep(5000);  // Let the user actually see something!
      driver.findElement(By.id("CampoHab")).click();
      inputBox = driver.findElement(By.id("TfHab"));
      inputBox.sendKeys("Mestrado");      
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("CampoHab")).click();
      Thread.sleep(5000);  // Let the user actually see something!
      driver.findElement(By.id("CampoNivel")).click();
      inputBox = driver.findElement(By.id("TfNivel"));
      inputBox.sendKeys("7");      
      Thread.sleep(2000);  // Let the user actually see something!
      driver.findElement(By.id("CampoNivel")).click();
      Thread.sleep(5000);  // Let the user actually see something!
               
               
               
      Thread.sleep(5000);  // Let the user actually see something!
    }
}