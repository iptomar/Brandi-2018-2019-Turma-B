package testesRegister;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class registerTestes {

	static WebDriver driver;
	static WebElement input;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		String projectlocation = System.getProperty("user.dir");
		
		System.setProperty("webdriver.chrome.driver", projectlocation+"/lib/chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.get("http://brandi.ipt.pt");
		Thread.sleep(5000);
		
		input = driver.findElement(By.id("username"));
		input.sendKeys("admin");
		Thread.sleep(2000);
		input = driver.findElement(By.id("password"));
		input.sendKeys("admin");
		Thread.sleep(2000);
		driver.findElement(By.id("idBtn")).click();
		Thread.sleep(2000);
		
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		driver.quit();
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void test() throws Exception {
		driver.get("http://brandi.ipt.pt/register");
		Thread.sleep(2000);
		
		input = driver.findElement(By.id("username"));
		input.sendKeys("seleniumTester3");
		Thread.sleep(2000);
		
		input = driver.findElement(By.id("password"));
		input.sendKeys("pass123");
		Thread.sleep(2000);
		
		input = driver.findElement(By.id("email"));
		input.sendKeys("seleniumer@gmail.com");
		Thread.sleep(2000);
		
		input = driver.findElement(By.id("tipo"));
		input.sendKeys("adumin");
		Thread.sleep(2000);
		
		input = driver.findElement(By.id("Habilitacoes"));
		input.sendKeys("mestroide");
		Thread.sleep(2000);
		
		input = driver.findElement(By.id("Nome"));
		input.sendKeys("Joaquinnn");
		Thread.sleep(2000);
		
		input = driver.findElement(By.id("NivProfissional"));
		input.sendKeys("5");
		Thread.sleep(2000);
		
		driver.findElement(By.id("idBtn")).click();
		Thread.sleep(2000);
		
		WebElement a = driver.findElement(By.xpath("//*[contains(text(), 'Joaquinnn')]"));
		assertEquals("Joaquinnn", a.getText());
		Thread.sleep(5000);
		
	}

}
