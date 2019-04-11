package Teste;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class TesteLogin {
	static WebDriver driver;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		String projectlocation = System.getProperty("user.dir");
		
		System.setProperty("webdriver.chrome.driver", projectlocation+"/lib/chromedriver/chromedriver.exe");
		
		driver = new ChromeDriver();
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
	void testUserErrado() throws InterruptedException {
		WebElement input;
		driver.get("http://brandi.ipt.pt");
		Thread.sleep(2000);
		
		
		input = driver.findElement(By.id("username"));
		input.sendKeys("lalalaa");
		Thread.sleep(2000);
		input = driver.findElement(By.id("password"));
		input.sendKeys("lalalala");
		Thread.sleep(2000);
		
		driver.findElement(By.id("idBtn")).click();
		Thread.sleep(2000);
		
		WebElement l =driver.findElement(By.id("alertBox"));
		
		assertEquals("Wrong username/password", l.getText());
	} 
	
	@Test
	void testLogin() throws InterruptedException {
		WebElement input;
		driver.get("http://brandi.ipt.pt");
		Thread.sleep(2000);
		
		
		input = driver.findElement(By.id("username"));
		input.sendKeys("dmoreno");
		Thread.sleep(2000);
		input = driver.findElement(By.id("password"));
		input.sendKeys("pass123");
		Thread.sleep(2000);
		
		driver.findElement(By.id("idBtn")).click();
		Thread.sleep(2000);
		
		WebElement l =driver.findElement(By.linkText("Conservação e Restauro"));
		
		assertEquals(true, l!=null);
		
		driver.get("http://brandi.ipt.pt/logout");
		
	} 



}
