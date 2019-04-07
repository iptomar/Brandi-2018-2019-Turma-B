package Teste;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteObjetos {
	
	public static void main(String[] args) throws InterruptedException{
		
		String projectlocation = System.getProperty("user.dir");
		
		System.setProperty("webdriver.chrome.driver", projectlocation+"/lib/chromedriver/chromedriver.exe");
		
		WebDriver driver = new ChromeDriver();
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
		driver.findElement(By.linkText("Objetos")).click();
		Thread.sleep(2000);
		
		//consultar objetos
		driver.findElement(By.id("1")).click();
		Thread.sleep(5000);
		
		//editar objetos
		driver.findElement(By.id("btEdi")).click();
		Thread.sleep(2000);
		input = driver.findElement(By.id("coordenador"));
		input.clear();
		input.sendKeys("Fernando dos Santos Antunes");
		Thread.sleep(2000);
		driver.findElement(By.id("btAdd")).click();
		Thread.sleep(2000);
		driver.findElement(By.id("1")).click();
		Thread.sleep(5000);
		driver.findElement(By.linkText("Back")).click();
		Thread.sleep(2000);
		//adicionar objetos
		driver.findElement(By.className("btAddObj")).click();
		//************************************************************************************
		//sempre que se adicionar uma ficha técnica criar outro objeto com um nome diferente *
		//************************************************************************************
		input = driver.findElement(By.id("objeto"));
		input.sendKeys("bbbbbb");
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
		
		Thread.sleep(5000);
		//remover objetos
		//*********************************************************
		//sempre que se executar o teste incrementar o id do card *
		//*********************************************************
		driver.findElement(By.id("16")).click(); //id do card
		Thread.sleep(5000);
		driver.findElement(By.id("btDel")).click();
		Thread.sleep(2000);
		driver.findElement(By.linkText("Back")).click();
		Thread.sleep(10000);

		driver.quit();
		
		
		
	}
	
	

	

    
    
    
}
