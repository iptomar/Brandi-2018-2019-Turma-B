package Teste;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.FixMethodOrder;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
class TesteCRUDFichaTecnica {

	static WebDriver driver;
	static WebElement input;
	static JavascriptExecutor js = (JavascriptExecutor) driver;
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		String projectlocation = System.getProperty("user.dir");
		
		System.setProperty("webdriver.chrome.driver", projectlocation+"/lib/chromedriver/chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.get("http://brandi.ipt.pt");
		input = driver.findElement(By.id("username"));
		input.sendKeys("dmoreno");
		Thread.sleep(2000);
		input = driver.findElement(By.id("password"));
		input.sendKeys("pass123");
		Thread.sleep(2000);
		
		driver.findElement(By.id("idBtn")).click();
		
		Thread.sleep(2000);
		driver.findElement(By.linkText("Objetos")).click();
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
	void Ctest() throws InterruptedException {
		//editar ficha técnica
		driver.findElement(By.id("btEdi")).click();
		Thread.sleep(2000);
		
		input = driver.findElement(By.id("coordenador"));
		input.clear();
		input.sendKeys("David Moreno");
		Thread.sleep(2000);
		driver.findElement(By.id("btAdd")).click();
		Thread.sleep(2000);
		
		driver.findElement(By.xpath("//*[contains(text(), 'Teste')]")).click();
		Thread.sleep(2000);
		
		WebElement a = driver.findElement(By.xpath("//*[contains(text(), 'David Moreno')]"));
		assertEquals("David Moreno", a.getText());
		
	}
	
	@Test
	void Btest() throws InterruptedException {
		//ver detalhes ficha técnica
		driver.findElement(By.xpath("//*[contains(text(), 'Teste')]")).click();
		Thread.sleep(2000);
		
		WebElement a = driver.findElement(By.xpath("//*[contains(text(), 'Teste')]"));
		assertEquals("Teste", a.getText());
		
		WebElement b = driver.findElement(By.xpath("//*[contains(text(), '1221/21/07')]"));
		assertEquals("1221/21/07", b.getText());
		
		WebElement c = driver.findElement(By.xpath("//*[contains(text(), '0005-04-2007-MOB')]"));
		assertEquals("0005-04-2007-MOB", c.getText());
		
		
		WebElement h = driver.findElement(By.xpath("//*[contains(text(), 'João Nunes')]"));
		assertEquals("João Nunes", h.getText());
		
		WebElement i = driver.findElement(By.xpath("//*[contains(text(), 'Aluno')]"));
		assertEquals("Aluno", i.getText());
		
	}

	
	@Test
	void Atest() throws InterruptedException {
		//adicionar ficha técnica
		WebElement input;
		driver.findElement(By.className("btAddObj")).click();
		
		input = driver.findElement(By.id("objeto"));
		input.sendKeys("Teste");
		Thread.sleep(2000);
		input = driver.findElement(By.id("CEARC"));
		input.sendKeys("1221/21/07");
		Thread.sleep(2000);
		input = driver.findElement(By.id("LCRM"));
		input.sendKeys("0005-04-2007-MOB");
		Thread.sleep(2000);
		input = driver.findElement(By.id("dataAberturaCEARC"));
		input.sendKeys("2006-04-21");
		Thread.sleep(2000);
		input = driver.findElement(By.id("dataAberturaLCRM"));
		input.sendKeys("2006-04-21");
		Thread.sleep(2000);
		input = driver.findElement(By.id("dataEntradaCEARC"));
		input.sendKeys("2006-04-21");
		Thread.sleep(2000);
		input = driver.findElement(By.id("dataEntradaLCRM"));
		input.sendKeys("2006-04-21");
		Thread.sleep(2000);
		input = driver.findElement(By.id("coordenador"));
		input.sendKeys("João Nunes");
		Thread.sleep(2000);
		input = driver.findElement(By.id("funcao"));
		input.sendKeys("Aluno");
		Thread.sleep(2000);
		driver.findElement(By.id("btAdd")).click();
		
		Thread.sleep(2000);
		
		WebElement l = driver.findElement(By.xpath("//*[contains(text(), 'Teste')]"));
		Thread.sleep(2000);
		
		assertEquals("Teste", l.getText());
	
		
	}
	
	
	@Test
	void Dtest() throws InterruptedException {
		//Eliminar ficha técnica
		driver.findElement(By.id("btDelFT")).click();
		Thread.sleep(2000);
		
		driver.findElement(By.id("btDelObj")).click();
		
		Thread.sleep(2000);
		
		List <WebElement> a = driver.findElements(By.xpath("//*[contains(text(), 'Teste')]"));
		
		
		assertEquals(true, a.isEmpty());
		
	}

}
